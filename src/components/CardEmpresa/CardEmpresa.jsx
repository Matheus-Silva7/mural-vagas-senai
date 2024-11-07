import React, { useState, useEffect } from 'react';
import "./CardEmpresa.css";
import ButtonMain from "../Buttons/ButtonMain/ButtonMain";
import { IoCheckmark } from 'react-icons/io5';
import { HiXMark } from 'react-icons/hi2';
import { autorizarEmpresa, excluirEmpresa, getEmpresas } from '../../services/ApiAdmin';

const CardEmpresa = () => {
  const [dadosEmpresa, setDadosEmpresa] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const empresas = await getEmpresas();
        setDadosEmpresa(empresas);
      } catch (error) {
        console.error("Erro ao obter as empresas:", error);
      }
    };

    fetchEmpresas();
  }, []);

  const aprovarEmpresa = async (idEmpresa) => {
    try {
      await autorizarEmpresa(idEmpresa);  
    } catch (error) {
      console.error("Erro ao autorizar empresa:", error);
    }
  };

  const recusarEmpresa = async (idEmpresa) => {
    try {
      setLoading(true);
      await excluirEmpresa(idEmpresa);
      
      setTimeout(async () => {
        await fetchEmpresas();
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Erro ao excluir empresa:", error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <p>Excluindo empresa, atualizando lista...</p>}

      {dadosEmpresa.length > 0 ? (
        dadosEmpresa.map((empresa, index) => (
          <div key={index} className='card-empresa'>
            <div className="left-card">
              <img src={empresa.logo.linkLogo} alt={empresa.nomeEmpresa} />
              <div className="text-left">
                <h2>{empresa.nomeEmpresa}</h2>
                <p className='b-text'>Ramo: {empresa.descricao.ramo}</p>
                <p>{empresa.endereco.cidade}</p>
              </div>
            </div>
            <ButtonMain text={"Mais detalhes"} />
            <div className="right-card">
              <p>Data solicitação:</p>
              <p>{empresa.dataSolicitacao}</p>
              <div className="buttons-aprovar">
                <button 
                  className='check' 
                  onClick={(e) => {
                    e.preventDefault(); 
                    aprovarEmpresa(empresa.empresaId);
                  }}
                >
                  <IoCheckmark />
                </button>
                <button 
                  className='recuse' 
                  onClick={(e) => {
                    e.preventDefault();
                    recusarEmpresa(empresa.empresaId);  
                  }}
                >
                  <HiXMark />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Carregando empresas...</p>
      )}
    </>
  );
};

export default CardEmpresa;

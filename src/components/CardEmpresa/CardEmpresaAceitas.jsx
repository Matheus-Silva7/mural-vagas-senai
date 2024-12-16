import React, { useState, useEffect } from 'react';
import "./CardEmpresa.css";
import ButtonMain from "../Buttons/ButtonMain/ButtonMain";
import { HiXMark } from 'react-icons/hi2';
import { excluirEmpresa, getEmpresasAceitas } from '../../services/ApiAdmin';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDadosEmpresa } from '../../services/Api';
import { useNavigate } from 'react-router-dom';

const CardEmpresa = () => {
  const navigate = useNavigate();
  const [dadosEmpresa, setDadosEmpresa] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEmpresas = async () => {
    try {
      const response = await getEmpresasAceitas(); 
      setDadosEmpresa(response.content); 
    } catch (error) {
      console.error("Erro ao obter as empresas:", error);
    }
  };

  useEffect(() => {
    fetchEmpresas();
  }, []);

  const recusarEmpresa = async (idEmpresa) => {
    try {
      setLoading(true);
      const response = await excluirEmpresa(idEmpresa);

      if (response) {
        toast.success("Empresa excluída com sucesso!");
        fetchEmpresas(); 
      }
    } catch (error) {
      console.error("Erro ao excluir empresa:", error);
      toast.error("Erro ao excluir a empresa!");
    } finally {
      setLoading(false);
    }
  };

  const handleMostrarDetalhes = async (empresaId) => {
    try {
      const response = await getDadosEmpresa(empresaId);

     
      navigate('/admin/empresaDetalhe', { state: { empresa: response } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading && <p>Excluindo empresa, atualizando lista...</p>}

      {dadosEmpresa.length > 0 ? (
        dadosEmpresa.map((empresa, index) => (
          <div key={index} className="card-empresa">
            <div className="left-card">
              <img src={empresa.logo.linkLogo} alt={empresa.nomeEmpresa} />
              <div className="text-left">
                <h2>{empresa.nomeEmpresa}</h2>
                <p className="b-text">Ramo: {empresa.descricao.ramo}</p>
                <p>{empresa.endereco.cidade}, {empresa.endereco.estado}</p>
              </div>
            </div>
            <ButtonMain
              text={"Mais detalhes"}
              click={() => handleMostrarDetalhes(empresa.empresaId)}
            />
            <div className="right-card">
              <p>Excluir Empresa:</p>
              <p>{empresa.dataSolicitacao}</p>
              <div className="buttons-aprovar">
                <button
                  className="recuse"
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
        <div className="sem-empresas">
          <h3>Nenhuma empresa aceita...</h3>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default CardEmpresa;

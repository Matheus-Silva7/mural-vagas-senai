import React, { useState, useEffect } from 'react';
import './CardEmpresa.css';
import ButtonMain from '../Buttons/ButtonMain/ButtonMain';
import { IoCheckmark } from 'react-icons/io5';
import { HiXMark } from 'react-icons/hi2';
import { autorizarEmpresa, excluirEmpresa, getEmpresasAceitar } from '../../services/ApiAdmin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDadosEmpresa } from '../../services/Api';
import { useNavigate } from 'react-router-dom';

const CardEmpresa = () => {
  const navigate = useNavigate();
  const [dadosEmpresa, setDadosEmpresa] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEmpresas = async () => {
    try {
      const response = await getEmpresasAceitar();
      setDadosEmpresa(response.content || []); // Garante que content seja sempre um array.
    } catch (error) {
      console.error('Erro ao obter as empresas:', error);
      toast.error('Erro ao carregar as empresas.');
    }
  };

  useEffect(() => {
    fetchEmpresas();
  }, []);

  const aprovarEmpresa = async (idEmpresa) => {
    try {
      const response = await autorizarEmpresa(idEmpresa);
      if (response) {
        toast.success('Empresa autorizada com sucesso!');
        fetchEmpresas(); // Atualiza a lista após aprovação.
      }
    } catch (error) {
      console.error('Erro ao autorizar empresa:', error);
      toast.error('Erro ao autorizar a empresa!');
    }
  };

  const recusarEmpresa = async (idEmpresa) => {
    try {
      setLoading(true);
      const response = await excluirEmpresa(idEmpresa);
      if (response) {
        toast.success('Empresa excluída com sucesso!');
        fetchEmpresas(); // Atualiza a lista após exclusão.
      }
    } catch (error) {
      console.error('Erro ao excluir empresa:', error);
      toast.error('Erro ao excluir a empresa!');
    } finally {
      setLoading(false);
    }
  };

  const handleMostrarDetalhes = async (empresaId) => {
    try {
      const response = await getDadosEmpresa(empresaId);
      navigate('/admin/empresaDetalhe', { state: { empresa: response } });
    } catch (error) {
      console.error('Erro ao carregar detalhes da empresa:', error);
      toast.error('Erro ao carregar os detalhes da empresa.');
    }
  };

  return (
    <>
      {loading && <p>Processando, por favor aguarde...</p>}
      {dadosEmpresa.length > 0 ? (
        dadosEmpresa.map((empresa) => (
          <div key={empresa.empresaId} className="card-empresa">
            <div className="left-card">
              <img src={empresa.logo.linkLogo} alt={empresa.nomeEmpresa} />
              <div className="text-left">
                <h2>{empresa.nomeEmpresa}</h2>
                <p className="b-text">Ramo: {empresa.descricao.ramo}</p>
                <p>{empresa.endereco.cidade}</p>
              </div>
            </div>
            <ButtonMain text="Mais detalhes" click={() => handleMostrarDetalhes(empresa.empresaId)} />
            <div className="right-card">
              <p>Aceitar Empresa:</p>
              <div className="buttons-aprovar">
                <button
                  className="check"
                  onClick={(e) => {
                    e.preventDefault();
                    aprovarEmpresa(empresa.empresaId);
                  }}
                >
                  <IoCheckmark />
                </button>
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
          <h3>Sem novas solicitações...</h3>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default CardEmpresa;

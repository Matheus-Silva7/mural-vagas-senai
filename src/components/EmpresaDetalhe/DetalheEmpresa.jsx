import React, { useState, useEffect } from 'react';
import "./DetalheEmpresa.css";
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import ButtonMain from "../Buttons/ButtonMain/ButtonMain";
import { autorizarEmpresa, excluirEmpresa, getEmpresasAceitas } from '../../services/ApiAdmin';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const EmpresaDetalhes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const empresa = location.state?.empresa; // Pegando os dados da empresa do state passado na navegação

  const [loading, setLoading] = useState(false);

  // Função para aprovar a empresa (semelhante ao botão de "Aceitar" no CardEmpresa)
  const aprovarEmpresa = async (idEmpresa) => {
    try {
      setLoading(true);
      const response = await autorizarEmpresa(idEmpresa);
      if (response) {
        toast.success('Empresa autorizada com sucesso!');
        navigate('/admin');
      }
    } catch (error) {
      console.error('Erro ao autorizar empresa:', error);
      toast.error('Erro ao autorizar a empresa!');
    } finally {
      setLoading(false);
    }
  };

  // Função para recusar a empresa (semelhante ao botão de "Excluir" no CardEmpresa)
  const recusarEmpresa = async (idEmpresa) => {
    try {
      setLoading(true);
      const response = await excluirEmpresa(idEmpresa);
      if (response) {
        toast.success('Empresa excluída com sucesso!');
        // Recarregar as empresas após exclusão (exemplo: atualização na lista)
        navigate('/admin');
      }
    } catch (error) {
      console.error('Erro ao excluir empresa:', error);
      toast.error('Erro ao excluir a empresa!');
    } finally {
      setLoading(false);
    }
  };


  // Caso a empresa não seja encontrada nos dados
  if (!empresa) {
    return <div>Empresa não encontrada!</div>;
  }

  return (
    <>
      <div className='empresa-content'>
        <button className="button-back" onClick={() => navigate(-1)}>
          <MdKeyboardArrowLeft />
        </button>
        <div className="empresa">
          <div className="topEmpresa">
            <img src={empresa.logo.linkLogo} alt="logo empresa" />
            <div className="top-right-empresa">
              <div className="texts">
                <h1>Empresa: {empresa.nomeEmpresa}</h1>
                <h2><span>Ramo:</span> {empresa.descricao.ramo}</h2>
                <h2>CNPJ: {empresa.cnpj}</h2>
              </div>
            </div>
          </div>
          <div className="bottomEmpresa">
            <div className="desc-empresa">
              <h3>Contatos da empresa</h3>
              <ul>
                <li><b>email:</b> {empresa.email}</li>
                <li><b>telefone:</b> {empresa.telefone}</li>
                <li><b>endereço:</b> {empresa.endereco.rua}, {empresa.endereco.numero}, {empresa.endereco.bairro}, {empresa.endereco.cidade} - {empresa.endereco.estado}, {empresa.endereco.pais} {empresa.endereco.cep}</li>
                <li><b>site:</b> {empresa.descricao.site}</li>
              </ul>
            </div>
            <div className="desc-empresa">
              <h3>Descrição da empresa</h3>
              <p>{empresa.descricao.descricao}</p>
              <ul>
                <li><b>Quantidade de funcionários:</b> {empresa.descricao.qntdFuncionarios} funcionários</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="aceitar-empresa">
        {empresa.autorizacao === true ? (
          <ButtonMain
            text={loading ? "Excluindo..." : "Excluir"}
            click={() => recusarEmpresa(empresa.empresaId)}
            disabled={loading}
          />
        ) : (
          <>
            <ButtonMain
              text={loading ? "Aprovando..." : "Aceitar"}
              click={() => aprovarEmpresa(empresa.empresaId)}
              disabled={loading}
            />
            <ButtonMain
              text={loading ? "Excluindo..." : "Recusar"}
              click={() => recusarEmpresa(empresa.empresaId)}
              disabled={loading}
            />
          </>
        )}
      </div>

    </>
  );
};

export default EmpresaDetalhes;

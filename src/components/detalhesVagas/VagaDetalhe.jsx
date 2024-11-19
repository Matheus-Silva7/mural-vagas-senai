import React from 'react';
import "./VagaDetalhe.css";
import LogoEmpresa from "../../assets/logo-empresa.png";
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom'; // Importar useLocation

const VagaDetalhe = () => {
  const navigate = useNavigate(); 
  const location = useLocation(); // Hook para acessar os dados passados na navegação

  // Pegando os dados da vaga a partir do state
  const vaga = location.state?.vaga; 

  // Caso não tenha dados da vaga, exibe uma mensagem de erro
  if (!vaga) {
    return <div>Vaga não encontrada.</div>; 
  }

  // Função para formatar a data no formato DD/MM/YYYY
  const formatarData = (data) => {
    const date = new Date(data);
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear(); 
    return `${day}/${month}/${year}`; 
  };

  return (
    <div className="vaga-content">
      <button className="button-back" onClick={() => navigate(-1)}>
        <MdKeyboardArrowLeft />
      </button>
      <div className="vaga">
        <div className="top-vaga">
          <img src={LogoEmpresa} alt="logo empresa" />
          <div className="right-top">
            <div className="titles">
              <h1 className="title-vaga">{vaga.nomeVaga}</h1>
              <h2 className="n-empresa">Nome da Empresa</h2> 
            </div>
            <div className="data-vaga">
              <p>Publicado em {formatarData(vaga.dataPublicacao)}</p>
              <p>Expira em {formatarData(vaga.dataExpiracao)}</p>
            </div>
          </div>
        </div>
        <div className="infos-vaga">
          <div className="info">
            <span>Posição</span>
            <p>{vaga.tipoContratacao.tipo}</p> {/* Descrição da vaga */}
          </div>
          <div className="info">
            <span>Modelo de trabalho</span>
            <p>Presencial</p> {/* Tipo de contratação */}
          </div>
          <div className="info">
            <span>Salário</span>
            <p>R$ {vaga.salario}</p> {/* Salário */}
          </div>
          <div className="info">
            <span>Carga Horaria</span>
            <p>{vaga.cargaSemanal}</p> {/* Quantidade de vagas */}
          </div>
          <div className="info">
            <span>Localização</span>
            <p>São Paulo</p> {/* Quantidade de vagas */}
          </div>
        </div>
        <div className="desc-vaga">
          <div className="desc">
            <h3>Como se candidatar</h3>
            <p>{vaga.formaCandidatura.formaCandidatura}</p> {/* Como se candidatar */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VagaDetalhe;

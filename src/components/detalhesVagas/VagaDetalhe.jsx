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
              <h2 className="n-empresa">Liora</h2> 
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
            <p>{vaga.tipoContratacao.tipo}</p>
          </div>
          <div className="info">
            <span>Modelo de trabalho</span>
            <p>Presencial</p> 
          </div>
          <div className="info">
            <span>Remuneração</span>
            <p>R$ {vaga.salario}</p>
          </div>
          <div className="info">
            <span>Carga Horaria</span>
            <p>{vaga.cargaSemanal}</p> 
          </div>
          <div className="info">
            <span>Localização</span>
            <p>São Paulo</p> 
          </div>
        </div>
        <div className="desc-vaga">
          <div className="desc">
            <h3>Sobre a empresa</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          </div>
          <div className="desc">
            <h3>Contatos da empresa</h3>
           <ul>
            <li><b>Email:</b> empresa@email.com</li>
            <li><b>Telefone:</b> 11 987654321</li>
            <li><b>Endereço:</b> It has survived not only five centuries, but also the leap into electronic typesetting</li>
           </ul>
          </div>
          <div className="desc">
            <h3>Descrição da vaga</h3>
            <p>{vaga.descricao}</p> 
          </div>
          <div className="desc">
            <h3>Requisitos</h3>
            <p>{vaga.requisitos}</p> 
          </div>
          <div className="desc">
            <h3>Benefícios</h3>
            <p>{vaga.beneficios.beneficio}</p> 
          </div>
          <div className="desc">
            <h3>Informações adicionais</h3>
           <ul>
            <li><b>Remuneração:</b> R$ {vaga.salario}</li>
            <li><b>Carga horária semanal:</b> {vaga.cargaSemanal} horas</li>
          <li><b>Quantidade de vagas:</b> {vaga.qtdVagasDisponiveis} vagas</li>
           </ul>
          </div>
          <div className="desc">
            <h3>Como se candidatar</h3>
            <p>A candidatura deve ser feito {vaga.formaCandidatura.formaCandidatura}</p> {/* Como se candidatar */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VagaDetalhe;

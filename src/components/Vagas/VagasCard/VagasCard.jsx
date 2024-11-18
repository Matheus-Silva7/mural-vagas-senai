import React from 'react';
import "./VagasCard.css";
import ImgEmpresa from "../../../assets/empresa-img.png";
import ButtonMain from '../../Buttons/ButtonMain/ButtonMain';
import { Link } from 'react-router-dom';

const VagasCard = ({ vagasExist, vagaid, nomeVaga, dataPublicacao }) => {

  // Função para formatar a data no formato DD/MM/YYYY
  const formatarData = (data) => {
    const date = new Date(data);
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear(); 
    return `${day}/${month}/${year}`; 
  };


  const handleClick = (id) => {
    console.log("foi");
  };

  return (
    vagasExist === 0 ? (
      <div className="sem-vagas">
        <p>Não há vagas disponíveis no momento.</p>
      </div>
    ) : (
      <div className="vagas-card">
        <div className="top-card">
          <img src={ImgEmpresa} alt="Logo da empresa" />
          <div className="right-top">
            <div className="info-vaga">
              <h2>{nomeVaga}</h2>
              <span>Tempos Brasil</span>
            </div>
            <div className='info-local'>
              <p>Presencial</p>
              <p>São Paulo</p>
            </div>
          </div>
        </div>
        <div className="bottom-card">
          <span>Data de postagem: <p>{formatarData(dataPublicacao)}</p></span>
          <ButtonMain text={<Link to={"/vagaDetalhe"}>Vaga</Link>} click={handleClick(vagaid)} />
        </div>
      </div>
    )
  );
};

export default VagasCard;

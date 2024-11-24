import React from 'react';
import "./VagasCard.css";
import ImgEmpresa from "../../../assets/empresa-img.png";
import ButtonMain from '../../Buttons/ButtonMain/ButtonMain';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { getOneVaga } from '../../../services/ApiVaga';

const VagasCard = ({ vagasExist, vagaid, nomeVaga, dataPublicacao }) => {
  const navigate = useNavigate();


 
  const formatarData = (data) => {
    const date = new Date(data);
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear(); 
    return `${day}/${month}/${year}`; 
  };

  // Função para lidar com o clique no botão "Ver Detalhes"
  const handleClick = async (vagaId) => {
    try {
  
      const response = await getOneVaga(vagaId)
      
      // Passando os dados da vaga para a página de detalhes
      navigate('/vagaDetalhe', { state: { vaga: response } });

    } catch (error) {
      console.error(error);
    }
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
              <span>Tempos Brasil</span> {/* Nome da empresa, substitua conforme necessário */}
            </div>
            <div className='info-local'>
              <p>Presencial</p>
              <p>São Paulo</p> {/* Localização da vaga */}
            </div>
          </div>
        </div>
        <div className="bottom-card">
          <span>Data de postagem: <p>{dataPublicacao}</p></span>
          <ButtonMain text="Vaga" click={() => handleClick(vagaid)} />
        </div>
      </div>
    )
  );
};

export default VagasCard;

import React, { useEffect, useState } from "react";
import "./VagasCard.css";
import ImgEmpresa from "../../../assets/empresa-img.png";
import ButtonMain from "../../Buttons/ButtonMain/ButtonMain";
import { useNavigate } from "react-router-dom";
import { getOneVaga } from "../../../services/ApiVaga";
import { getDadosEmpresa } from "../../../services/Api";

const VagasCard = ({ vagasExist, vagaid, nomeVaga, dataPublicacao, criadorId }) => {
  const [empresa, setEmpresa] = useState(null); 
  const navigate = useNavigate();


  const fetchEmpresa = async (criadorId) => {
    try {
      const response = await getDadosEmpresa(criadorId); 
      setEmpresa(response); 
    } catch (error) {
      console.error("Erro ao buscar dados da empresa:", error);
    }
  };


  useEffect(() => {
    if (criadorId && !empresa) { 
      fetchEmpresa(criadorId);
    }
  }, [criadorId, empresa]); 


  const handleClick = async (vagaId) => {
    try {
      const vagaResponse = await getOneVaga(vagaId); 
      const empresaResponse = await getDadosEmpresa(criadorId)
      console.log("empresaaaa", vagaResponse)
      console.log("empresa", empresa)
      navigate("/vagaDetalhe", {
        state: {
          empresa: empresaResponse, 
          vaga: vagaResponse,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };


  return vagasExist === 0 ? (
    <div className="sem-vagas">
      <p>Não há vagas disponíveis no momento.</p>
    </div>
  ) : (
    <div className="vagas-card">
      <div className="top-card">
      
        <img src={empresa?.logo?.linkLogo || ImgEmpresa} alt="Logo da empresa" />
        <div className="right-top">
          <div className="info-vaga">
            <h2>{nomeVaga}</h2>
            <span>{empresa?.nomeEmpresa || "Empresa desconhecida"}</span> {/* Nome da empresa */}
          </div>
          <div className="info-local">
            <p>{empresa?.descricao?.ramo || "Ramo não informado"}</p>
            <p>{empresa?.endereco?.cidade || "Localização não informada"}, {empresa?.endereco?.estado || "Localização não informada"}</p> {/* Localização */}
          </div>
        </div>
      </div>
      <div className="bottom-card">
        <span>
          Data de postagem: <p>{dataPublicacao}</p>
        </span>
        <ButtonMain text="Vaga" click={() => handleClick(vagaid)} />
      </div>
    </div>
  );
};

export default VagasCard;

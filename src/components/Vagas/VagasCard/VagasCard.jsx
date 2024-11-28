import React, { useEffect, useState } from "react";
import "./VagasCard.css";
import ImgEmpresa from "../../../assets/empresa-img.png";
import ButtonMain from "../../Buttons/ButtonMain/ButtonMain";
import { useNavigate } from "react-router-dom";
import { getOneVaga } from "../../../services/ApiVaga";
import { getDadosEmpresa } from "../../../services/Api";

const VagasCard = ({ vagasExist, vagaid, nomeVaga, dataPublicacao, criadorId }) => {
  const [empresa, setEmpresa] = useState(null); // Estado para armazenar os dados da empresa
  const navigate = useNavigate();

  // Função para buscar os dados da empresa
  const fetchEmpresa = async (criadorId) => {
    try {
      const response = await getDadosEmpresa(criadorId); // Chama a API para buscar os dados da empresa
      setEmpresa(response); // Salva os dados da empresa no estado
    } catch (error) {
      console.error("Erro ao buscar dados da empresa:", error);
    }
  };

  // Busca os dados da empresa quando o criadorId muda e somente se a empresa não estiver carregada
  useEffect(() => {
    if (criadorId && !empresa) { // Adicionando a verificação se empresa já foi carregada
      fetchEmpresa(criadorId);
    }
  }, [criadorId, empresa]); // Dependência de criadorId e empresa

  // Função para navegar para os detalhes da vaga
  const handleClick = async (vagaId) => {
    try {
      const vagaResponse = await getOneVaga(vagaId); // Busca os dados da vaga

      // Navega para a página de detalhes, passando os dados da vaga e da empresa
      navigate("/vagaDetalhe", {
        state: {
          vaga: vagaResponse,
          empresa: empresa, // Dados da empresa
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Renderiza o componente
  return vagasExist === 0 ? (
    <div className="sem-vagas">
      <p>Não há vagas disponíveis no momento.</p>
    </div>
  ) : (
    <div className="vagas-card">
      <div className="top-card">
        {/* Exibe a logo da empresa ou uma imagem genérica */}
        <img src={empresa?.logo?.linkLogo || ImgEmpresa} alt="Logo da empresa" />
        <div className="right-top">
          <div className="info-vaga">
            <h2>{nomeVaga}</h2>
            <span>{empresa?.nomeEmpresa || "Empresa desconhecida"}</span> {/* Nome da empresa */}
          </div>
          <div className="info-local">
            <p>{empresa?.descricao?.ramo || "Ramo não informado"}</p>
            <p>{empresa?.endereco?.cidade || "Localização não informada"}</p> {/* Localização */}
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

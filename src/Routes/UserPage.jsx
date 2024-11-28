import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { getTodasVagas } from "../services/ApiVaga";
import VagasCard from "../components/Vagas/VagasCard/VagasCard";
import TitleMural from "../components/Title/TitleMural";
import MainTitle from "../components/Title/MainTitle";
import InfoMural from "../components/InfoMural/InfoMural";
import ButtonMain from "../components/Buttons/ButtonMain/ButtonMain";
import { Link } from "react-router-dom";

const UserPage = ({ theme, setTheme }) => {
  const [vagas, setVagas] = useState([]);

  // Função para buscar as vagas
  const fetchVagas = async () => {
    try {
      const response = await getTodasVagas();
      console.log("Vagas recebidas da API:", response);
      setVagas(response.content || []); // Garante que "content" seja um array
    } catch (error) {
      console.error("Erro ao obter as vagas:", error);
    }
  };

  // Chamada inicial da API ao montar o componente
  useEffect(() => {
    fetchVagas();
  }, []);

  return (
    <>
      {/* Barra de navegação */}
      <NavBar theme={theme} setTheme={setTheme} />

      {/* Título do mural */}
      <TitleMural text="MURAL DE VAGAS - Comunidade" />

      {/* Informações sobre o mural */}
      <InfoMural />

      {/* Seção de vagas recém publicadas */}
      <MainTitle title="Vagas recém publicadas" />

      {/* Conteúdo das vagas */}
      <div
        className={`vagas-content user-vagas ${vagas.length > 3 ? "tres-vagas" : ""}`}
      >
        {vagas.length === 0 ? (
          // Exibição de mensagem quando não há vagas
          <div className="sem-vagas">
            <h2>Sem vagas</h2>
          </div>
        ) : (
          // Mapeamento das vagas para os cartões
          vagas.map((item) =>
            item.vaga ? (
              <VagasCard
                key={item.vaga.vagaId}
                vagaid={item.vaga.vagaId}
                criadorId={item.criadorId} // Passando o ID do criador
                vagasExist={vagas.length}
                nomeVaga={item.vaga.nomeVaga}
                dataPublicacao={new Date(item.vaga.dataPublicacao).toLocaleDateString("pt-BR")}
              />
            ) : (
              // Fallback para quando a vaga não está disponível
              <div key={Math.random()}>Erro ao carregar vaga</div>
            )
          )
        )}
      </div>

      {/* Botão para ver mais vagas */}
      <ButtonMain
        text={<Link to="/vagas">Ver mais vagas</Link>}
        classname="btn-user-vagas"
      />

      {/* Rodapé */}
      <Footer />
    </>
  );
};

export default UserPage;

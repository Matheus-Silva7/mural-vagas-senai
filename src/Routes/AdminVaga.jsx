import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import MainTitle from "../components/Title/MainTitle";
import VagasCard from "../components/Vagas/VagasCard/VagasCard";
import { getTodasVagas } from "../services/ApiVaga";
import NavBar from "../components/NavBar/NavBar";

const AdminVaga = ({ theme, setTheme }) => {
  const [vagas, setVagas] = useState([]);

  // Função para buscar as vagas
  const fetchVagas = async () => {
    try {
      const response = await getTodasVagas();
      console.log("Vagas recebidas da API:", response);

      // Garante que "content" seja um array válido
      setVagas(Array.isArray(response.content) ? response.content : []);
    } catch (error) {
      console.error("Erro ao obter as vagas:", error);
      setVagas([]); // Define vagas como vazio em caso de erro
    }
  };

  // Chamada inicial da API ao montar o componente
  useEffect(() => {
    fetchVagas();
  }, []);

  return (
    <>
      <NavBar theme={theme} setTheme={setTheme} />
      <MainTitle title="Vagas publicadas" />
      <div
        className={`vagas-content ${
          vagas.length > 3
            ? "tres-vagas"
            : vagas.length === 0
            ? "zero-vagas"
            : ""
        }`}
      >
        {vagas.length === 0 ? (
          <div className="sem-vagas">
            <h2>Sem vagas</h2>
          </div>
        ) : (
          vagas.map((item) =>
            item.vaga ? (
              <VagasCard
                key={item.vaga.vagaId}
                vagaid={item.vaga.vagaId}
                criadorId={item.criadorId} // Passando o ID do criador
                vagasExist={vagas.length}
                nomeVaga={item.vaga.nomeVaga || "Título não informado"}
                dataPublicacao={
                  item.vaga.dataPublicacao
                    ? new Date(item.vaga.dataPublicacao).toLocaleDateString("pt-BR")
                    : "Data não disponível"
                }
              />
            ) : null
          )
        )}
      </div>
      <Footer />
    </>
  );
};

export default AdminVaga;

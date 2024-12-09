import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { getTodasVagas, filtrarVagas } from "../services/ApiVaga";
import VagasCard from "../components/Vagas/VagasCard/VagasCard";
import TitleMural from "../components/Title/TitleMural";
import MainTitle from "../components/Title/MainTitle";
import FiltroVagas from "../components/FiltroVagas/FiltroVagas";

const VagasUser = ({ theme, setTheme }) => {
  const [vagas, setVagas] = useState([]);
  const [vagasExibidas, setVagasExibidas] = useState([]);

  const fetchVagas = async () => {
    try {
      const response = await getTodasVagas();
      console.log("Dados recebidos da API:", response);
      const listaVagas = response.content || [];
      setVagas(listaVagas);
      setVagasExibidas(listaVagas);
    } catch (error) {
      console.error("Erro ao obter as vagas:", error);
    }
  };

  const handleFiltrarVagas = async (filtros) => {
    if (Object.keys(filtros).length === 0) {
      // Se o filtro estiver vazio, chama a função fetchVagas para buscar todas as vagas
      fetchVagas();
    } else {
      try {
        const vagasFiltradasResponse = await filtrarVagas(filtros);
        console.log("Vagas filtradas:", vagasFiltradasResponse);
        setVagasExibidas(vagasFiltradasResponse.content || []);
      } catch (error) {
        console.error("Erro ao filtrar vagas:", error);
      }
    }
  };

  useEffect(() => {
    fetchVagas();
  }, []);

  return (
    <>
      <NavBar theme={theme} setTheme={setTheme} />
      <TitleMural text="MURAL DE VAGAS - Comunidade" />
      <FiltroVagas onBuscar={handleFiltrarVagas} />
      <MainTitle title="Vagas publicadas" />
      <div
        className={`vagas-content user-vagas ${
          vagasExibidas.length > 3 ? "tres-vagas" : ""
        }`}
      >
        {vagasExibidas.length === 0 ? (
          <div className="sem-vagas">
            <h2>Sem vagas</h2>
          </div>
        ) : (
          vagasExibidas.map((vaga) =>
            vaga.vaga ? (
              <VagasCard
                key={vaga.vaga.vagaId}
                criadorId={vaga.criadorId}
                vagaid={vaga.vaga.vagaId}
                vagasExist={vagasExibidas.length}
                nomeVaga={vaga.vaga.nomeVaga}
                dataPublicacao={new Date(vaga.vaga.dataPublicacao).toLocaleDateString(
                  "pt-BR"
                )}
              />
            ) : (
              <div key={Math.random()}>Erro ao carregar vaga</div>
            )
          )
        )}
      </div>
      <Footer />
    </>
  );
};

export default VagasUser;
``

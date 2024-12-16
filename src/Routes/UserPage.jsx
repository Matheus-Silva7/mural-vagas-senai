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


  const fetchVagas = async () => {
    try {
      const response = await getTodasVagas();
      console.log("Vagas recebidas da API:", response);
      setVagas(response.content || []); 
    } catch (error) {
      console.error("Erro ao obter as vagas:", error);
    }
  };

  
  useEffect(() => {
    fetchVagas();
  }, []);

  return (
    <>
   
      <NavBar theme={theme} setTheme={setTheme} />
      <TitleMural text="MURAL DE VAGAS - Comunidade" />
      <InfoMural />
      <MainTitle title="Vagas recém publicadas" />
      <div
        className={`vagas-content user-vagas ${vagas.length > 3 ? "tres-vagas" : ""}`}
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
                criadorId={item.criadorId} 
                vagasExist={vagas.length}
                nomeVaga={item.vaga.nomeVaga}
                dataPublicacao={new Date(item.vaga.dataPublicacao).toLocaleDateString("pt-BR")}
              />
            ) : (
              
              <div key={Math.random()}>Erro ao carregar vaga</div>
            )
          )
        )}
      </div>
      <ButtonMain
        text={<Link to="/vagas">Ver mais vagas</Link>}
        classname="btn-user-vagas"
      />
      <Footer />
    </>
  );
};

export default UserPage;

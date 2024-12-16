import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import TitleMural from "../components/Title/TitleMural";
import MainTitle from "../components/Title/MainTitle";
import CardEmpresaAceitar from "../components/CardEmpresa/CardEmpresaAceitar";
import VagasCard from "../components/Vagas/VagasCard/VagasCard";
import { getTodasVagas } from "../services/ApiVaga";
import NavBar from "../components/NavBar/NavBar";

const Admin = ({ theme, setTheme }) => {
  const [vagas, setVagas] = useState([]);


  const fetchVagas = async () => {
    try {
      const response = await getTodasVagas();
      console.log("Vagas recebidas da API:", response);

    
      setVagas(Array.isArray(response.content) ? response.content : []);
    } catch (error) {
      console.error("Erro ao obter as vagas:", error);
      setVagas([]); 
    }
  };

  useEffect(() => {
    fetchVagas();
  }, []);

  return (
    <div>
   
      <NavBar theme={theme} setTheme={setTheme} />
      <TitleMural text="Mural de aprovação" />
      <MainTitle title="Últimas solicitações" />

      <CardEmpresaAceitar />


      <MainTitle title="Vagas publicadas" />
      <div className={`vagas-content ${vagas.length > 3 ? "tres-vagas" : ""}`}>
        {vagas.length === 0 ? (
          <div className="sem-vagas">
            <h2>Sem vagas publicadas</h2>
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
    </div>
  );
};

export default Admin;

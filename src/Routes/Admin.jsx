import React, { useEffect, useState } from "react";
import NavBarAdmin from "../components/NavBar/NavBarAdmin";
import Footer from "../components/Footer/Footer";
import TitleMural from "../components/Title/TitleMural";
import MainTitle from "../components/Title/MainTitle";
import CardEmpresaAceitar from "../components/CardEmpresa/CardEmpresaAceitar";
import VagasCard from "../components/Vagas/VagasCard/VagasCard";
import { getTodasVagas } from "../services/ApiVaga";

const Admin = ({ theme, setTheme }) => {
  const [vagas, setVagas] = useState([]);

  // Função para buscar as vagas
  const fetchVagas = async () => {
    try {
      const response = await getTodasVagas();
      if (response && response.content) {
        setVagas(response.content.map(item => item.vaga)); // Extraindo somente o objeto `vaga`
      } else {
        setVagas([]); // Caso o retorno não contenha o campo `content`, define como vazio.
      }
    } catch (error) {
      console.error("Erro ao obter as vagas:", error);
      setVagas([]); // Define como vazio caso haja erro na requisição.
    }
  };

  useEffect(() => {
    fetchVagas();
  }, []);

  return (
    <div>
      {/* Navbar do administrador */}
      <NavBarAdmin theme={theme} setTheme={setTheme} />

      {/* Títulos */}
      <TitleMural text="Mural de aprovação" />
      <MainTitle title="Últimas solicitações" />

      {/* Card para empresas aguardando aprovação */}
      <CardEmpresaAceitar />

      {/* Seção de vagas publicadas */}
      <MainTitle title="Vagas publicadas" />
      <div className={`vagas-content ${vagas.length > 3 ? "tres-vagas" : ""}`}>
        {vagas.length === 0 ? (
          <div className="sem-vagas">
            <h2>Sem vagas publicadas</h2>
          </div>
        ) : (
          vagas.map((vaga) => (
            <VagasCard
              key={vaga.vagaId}
              criadorId={item.criadorId} 
              vagaid={vaga.vagaId}
              vagasExist={vagas.length}
              nomeVaga={vaga.nomeVaga || "Título não informado"}
              dataPublicacao={
                vaga.dataPublicacao
                  ? new Date(vaga.dataPublicacao).toLocaleDateString("pt-BR")
                  : "Data não disponível"
              }
            />
          ))
        )}
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default Admin;

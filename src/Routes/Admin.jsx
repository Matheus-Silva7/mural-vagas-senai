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
    <div>
      {/* Navbar do administrador */}
      <NavBar theme={theme} setTheme={setTheme} />

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
            ) : null // Garante que apenas itens válidos sejam renderizados
          )
        )}
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default Admin;

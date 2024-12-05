import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { getTodasVagas } from '../services/ApiVaga';
import VagasCard from '../components/Vagas/VagasCard/VagasCard';
import TitleMural from '../components/Title/TitleMural';
import MainTitle from '../components/Title/MainTitle';
import FiltroVagas from '../components/FiltroVagas/FiltroVagas';

const VagasUser = ({ theme, setTheme }) => {
  const [vagas, setVagas] = useState([]);

  // Função para buscar as vagas
  const fetchVagas = async () => {
    try {
      const response = await getTodasVagas();
      console.log('Dados recebidos da API:', response); // Verifique a estrutura recebida
      setVagas(response.content || []); // Garante que "content" seja um array válido
    } catch (error) {
      console.error('Erro ao obter as vagas:', error);
    }
  };

  // Chamada da API quando o componente é montado
  useEffect(() => {
    fetchVagas();
  }, []);

  return (
    <>

      <NavBar theme={theme} setTheme={setTheme} />
      <TitleMural text="MURAL DE VAGAS - Comunidade" />
      <FiltroVagas />
      <MainTitle title="Vagas publicadas" />
      <div
        className={`vagas-content user-vagas ${
          vagas.length > 3 ? 'tres-vagas' : ''
        }`}
      >
        {vagas.length === 0 ? (
          <div className="sem-vagas">
            <h2>Sem vagas</h2>
          </div>
        ) : (
          // Mapeamento das vagas para os cartões
          vagas.map((vaga) =>
            vaga.vaga ? (
              <VagasCard
                key={vaga.vaga.vagaId}
                criadorId={vaga.criadorId} // Passando o ID do criador
                vagaid={vaga.vaga.vagaId}
                vagasExist={vagas.length}
                nomeVaga={vaga.vaga.nomeVaga}
                dataPublicacao={new Date(vaga.vaga.dataPublicacao).toLocaleDateString('pt-BR')}
              />
            ) : (
              // Fallback para vagas sem dados
              <div key={Math.random()}>Erro ao carregar vaga</div>
            )
          )
        )}
      </div>

      {/* Rodapé */}
      <Footer />
    </>
  );
};

export default VagasUser;

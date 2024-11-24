import React, { useEffect, useState } from 'react';
import NavBarAdmin from '../components/NavBar/NavBarAdmin';
import Footer from '../components/Footer/Footer';
import TitleMural from '../components/Title/TitleMural';
import MainTitle from '../components/Title/MainTitle';
import CardEmpresaAceitar from '../components/CardEmpresa/CardEmpresaAceitar';
import VagasCard from '../components/Vagas/VagasCard/VagasCard';
import { getTodasVagas } from '../services/ApiVaga';

const Admin = ({ theme, setTheme }) => {
  const [vagas, setVagas] = useState([]);

  const fetchVagas = async () => {
    try {
      const response = await getTodasVagas();
      setVagas(response.content || []); // Garante que "content" seja um array, mesmo se for indefinido.
    } catch (error) {
      console.error('Erro ao obter as vagas:', error);
    }
  };

  useEffect(() => {
    fetchVagas();
  }, []);

  return (
    <div>
      <NavBarAdmin theme={theme} setTheme={setTheme} />
      <TitleMural text="Mural de aprovação" />
      <MainTitle title="Últimas solicitações" />
      <CardEmpresaAceitar />
      <MainTitle title="Vagas publicadas" />
      <div
        className={`vagas-content ${
          vagas.length > 3 ? 'tres-vagas' : ''
        }`}
      >
        {vagas.length === 0 ? (
                   <div className='sem-vagas'><h2>Sem vagas</h2></div>
        ) : (
          vagas.map((vaga) => (
            <VagasCard
              key={vaga.vagaId}
              vagaid={vaga.vagaId}
              vagasExist={vagas.length}
              nomeVaga={vaga.nomeVaga}
              dataPublicacao={new Date(vaga.dataPublicacao).toLocaleDateString('pt-BR')}
            />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Admin;

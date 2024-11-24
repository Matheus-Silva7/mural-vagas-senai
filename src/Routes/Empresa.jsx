import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import NavBarEmpresa from '../components/NavBar/NavBarEmpresa';
import MainTitle from '../components/Title/MainTitle';
import VagasCard from '../components/Vagas/VagasCard/VagasCard';
import ButtonMain from '../components/Buttons/ButtonMain/ButtonMain';
import { Link } from 'react-router-dom';
import { getTodasVagas } from '../services/ApiVaga';

const Empresa = ({ theme, setTheme }) => {
  const [vagas, setVagas] = useState([]);

  const fetchVagas = async () => {
    try {
      const response = await getTodasVagas();
      setVagas(response.content || []); // Garante que o content será um array, mesmo se for indefinido.
    } catch (error) {
      console.error('Erro ao obter as vagas:', error);
    }
  };

  useEffect(() => {
    fetchVagas();
  }, []);

  return (
    <>
      <NavBarEmpresa theme={theme} setTheme={setTheme} />
      <MainTitle title="Minhas Vagas" />
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
      <ButtonMain
        text={<Link to="/empresa/criarVaga">Criar vaga</Link>}
        classname="button-center"
      />
      <Footer />
    </>
  );
};

export default Empresa;

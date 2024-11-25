import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import { getTodasVagas } from '../services/ApiVaga';
import VagasCard from '../components/Vagas/VagasCard/VagasCard';
import TitleMural from '../components/Title/TitleMural';
import MainTitle from '../components/Title/MainTitle';
import FiltroVagas from '../components/FiltroVagas/FiltroVagas';


const VagasUser = ({theme, setTheme}) => {
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
    <>
     <NavBar theme={theme} setTheme={setTheme} /> 
     <TitleMural text="MURAL DE VAGAS  - Comunidade" />
     <FiltroVagas/>
     <MainTitle title="Vagas publicadas" />
     <div
        className={`vagas-content user-vagas ${
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
     <Footer/>
    </>
  )
}

export default VagasUser

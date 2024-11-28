import React, { useEffect, useState } from 'react'
import NavBarAdmin from '../components/NavBar/NavBarAdmin'
import Footer from '../components/Footer/Footer'
import MainTitle from '../components/Title/MainTitle';
import VagasCard from '../components/Vagas/VagasCard/VagasCard';
import { getTodasVagas } from '../services/ApiVaga';

const AdminVaga = ({ theme, setTheme }) => {

  const [vagas, setVagas] = useState([]);

  const fetchVagas = async () => {
    try {
      const response = await getTodasVagas();
      if (response && response.content) {
        setVagas(response.content.map(item => item.vaga)); 
      } else {
        setVagas([]); 
      }
    } catch (error) {
      console.error("Erro ao obter as vagas:", error);
      setVagas([]); 
    }
  };

  useEffect(() => {
    fetchVagas();
  }, [])

  return (
    <>
      <NavBarAdmin theme={theme} setTheme={setTheme} />
      <MainTitle title={"Vagas publicadas"} />
      <div className={`vagas-content ${vagas.length > 3 ? "tres-vagas" : "" || vagas.length === 0? "zero-vagas":""}`}>

        {vagas.length > 0 ? (
          vagas.map((vaga) => (
            <VagasCard
              key={vaga.vagaId}
              criadorId={item.criadorId} 
              vagaid={vaga.vagaId}
              vagasExist={vagas.length}
              nomeVaga={vaga.nomeVaga}
              dataPublicacao={vaga.dataPublicacao}
            />
          ))
        ) : (
          <div className='sem-vagas'><h2>Sem vagas</h2></div>
        )}
        
      </div>
      <Footer />
    </>
  );
}

export default AdminVaga;

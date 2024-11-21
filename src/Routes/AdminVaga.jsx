import React, { useEffect, useState } from 'react'
import NavBarAdmin from '../components/NavBar/NavBarAdmin'
import Footer from '../components/Footer/Footer'
import MainTitle from '../components/Title/MainTitle';
import VagasCard from '../components/Vagas/VagasCard/VagasCard';
import { getTodasVagas } from '../services/ApiVaga';

const AdminVaga = ({theme, setTheme}) => {

  const [vagas, setVagas] = useState([]);

  const fetchVagas = async () => {
    try {
      const vagas = await getTodasVagas();
      setVagas(vagas);
   
    } catch (error) {
      console.error("Erro ao obter as vagas:", error);
    }
  };

  useEffect(() => {
    fetchVagas();
  }, []);

  return (
    <>
    <NavBarAdmin theme={theme} setTheme={setTheme} />
    <MainTitle title={"Vagas públicadas"} />
      <div className={`vagas-content ${vagas.length > 3? ("tres-vagas"):("")}`}>

        {vagas.map((vaga) => (
          <VagasCard
            key={vaga.vagaId}
            vagaid={vaga.vagaId}
            vagasExist={vagas.length}
            nomeVaga={vaga.nomeVaga}
            dataPublicacao={vaga.dataPublicacao}
          />
        ))}
      </div>
    <Footer/>
    </>
  )
}

export default AdminVaga

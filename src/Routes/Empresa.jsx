import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import NavBarEmpresa from '../components/NavBar/NavBarEmpresa'
import MainTitle from '../components/Title/MainTitle'
import VagasCard from '../components/Vagas/VagasCard/VagasCard'
import ButtonMain from '../components/Buttons/ButtonMain/ButtonMain'
import { Link } from 'react-router-dom'
import { getTodasVagas } from '../services/ApiVaga'

const Empresa = ({ theme, setTheme }) => {

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
      <NavBarEmpresa theme={theme} setTheme={setTheme} />
      <MainTitle title={"Minhas Vagas"} />
      <div className='vagas-content'>

        {vagas.map((vaga) => (
          <VagasCard
            key={vaga.vagaId}
            nomeVaga={vaga.nomeVaga}
            dataPublicacao={vaga.dataPublicacao}
          />
        ))}
      </div>
      <ButtonMain text={<Link to={"/empresa/criarVaga"}>Criar vaga</Link>} classname={"button-center"} />
      <Footer />
    </>
  )
}

export default Empresa

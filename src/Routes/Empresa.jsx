import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBarEmpresa from '../components/NavBar/NavBarEmpresa'
import MainTitle from '../components/Title/MainTitle'
import VagasCard from '../components/Vagas/VagasCard/VagasCard'
import ButtonMain from '../components/Buttons/ButtonMain/ButtonMain'

const Empresa = ({ theme, setTheme }) => {
  return (
    <>
      <NavBarEmpresa theme={theme} setTheme={setTheme} />
      <MainTitle title={"Minhas Vagas"} />
      <VagasCard />
      <ButtonMain text={"Criar vaga"} classname={"button-center"}/>
      <Footer />
    </>
  )
}

export default Empresa

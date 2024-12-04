import React from 'react'
import Footer from '../components/Footer/Footer'
import MainTitle from '../components/Title/MainTitle'
import DadosEmpresa from '../components/DadosEmpresa/DadosEmpresa'
import NavBar from '../components/NavBar/NavBar'

const EmpresaDados = ({ theme, setTheme }) => {
  return (
    <>
    <NavBar theme={theme} setTheme={setTheme} />
    <MainTitle title={"Meus Dados"}/>
    <DadosEmpresa/>
    <Footer/>
    </>
  )
}

export default EmpresaDados

import React from 'react'
import NavBarEmpresa from '../components/NavBar/NavBarEmpresa'
import Footer from '../components/Footer/Footer'
import MainTitle from '../components/Title/MainTitle'
import DadosEmpresa from '../components/DadosEmpresa/DadosEmpresa'
import ButtonMain from '../components/Buttons/ButtonMain/ButtonMain'

const EmpresaDados = ({ theme, setTheme }) => {
  return (
    <>
    <NavBarEmpresa theme={theme} setTheme={setTheme} />
    <MainTitle title={"Meus Dados"}/>
    <DadosEmpresa/>
    <ButtonMain text={"Salvar"} classname={"button-center"}/>
    <Footer/>
    </>
  )
}

export default EmpresaDados

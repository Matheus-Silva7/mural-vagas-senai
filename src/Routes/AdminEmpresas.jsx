import React from 'react'
import NavBarAdmin from '../components/NavBar/NavBarAdmin'
import Footer from '../components/Footer/Footer'
import CardEmpresaAceitar from '../components/CardEmpresa/CardEmpresaAceitar'
import CardEmpresaAceitas from '../components/CardEmpresa/CardEmpresaAceitas'
import MainTitle from '../components/Title/MainTitle'
import TitleMural from '../components/Title/TitleMural'

const AdminEmpresas = ({theme, setTheme}) => {
  return (
    <>
      <NavBarAdmin theme={theme} setTheme={setTheme}/>
      <TitleMural text={"Empresas"}/>
      <MainTitle title={"Ultimas solicitações"}/>
      <CardEmpresaAceitar/>
      <MainTitle title={"Empresas aceitas"}/>
      <CardEmpresaAceitas/>
      <Footer/>
    </>
  )
}

export default AdminEmpresas

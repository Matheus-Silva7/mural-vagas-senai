import React from 'react'
import Footer from '../components/Footer/Footer'
import CardEmpresaAceitar from '../components/CardEmpresa/CardEmpresaAceitar'
import CardEmpresaAceitas from '../components/CardEmpresa/CardEmpresaAceitas'
import MainTitle from '../components/Title/MainTitle'
import TitleMural from '../components/Title/TitleMural'
import NavBar from '../components/NavBar/NavBar'

const AdminEmpresas = ({theme, setTheme}) => {
  return (
    <>
      <NavBar theme={theme} setTheme={setTheme}/>
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

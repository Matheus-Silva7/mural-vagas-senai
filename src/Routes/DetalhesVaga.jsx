import React from 'react'
import NavBarEmpresa from '../components/NavBar/NavBarEmpresa'
import Footer from '../components/Footer/Footer'
import VagaDetalhe from '../components/detalhesVagas/VagaDetalhe'

const DetalhesVaga = ({ theme, setTheme }) => {
  return (
    <>
      <NavBarEmpresa theme={theme} setTheme={setTheme}/>
      <VagaDetalhe/>
      <Footer/>
    </>
  )
}

export default DetalhesVaga

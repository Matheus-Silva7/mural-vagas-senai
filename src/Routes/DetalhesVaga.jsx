import React from 'react'

import Footer from '../components/Footer/Footer'
import VagaDetalhe from '../components/detalhesVagas/VagaDetalhe'
import NavBar from '../components/NavBar/NavBar'

const DetalhesVaga = ({ theme, setTheme }) => {
  return (
    <>
      <NavBar theme={theme} setTheme={setTheme}/>
      <VagaDetalhe/>
      <Footer/>
    </>
  )
}

export default DetalhesVaga

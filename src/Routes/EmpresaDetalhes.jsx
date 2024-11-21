import React from 'react'
import NavBarAdmin from '../components/NavBar/NavBarAdmin'
import Footer from '../components/Footer/Footer'

const EmpresaDetalhes = ({ theme, setTheme }) => {
  return (
    <>
     <NavBarAdmin theme={theme} setTheme={setTheme} />
     <EmpresaDetalhes/>
     <Footer/>
    </>
  )
}

export default EmpresaDetalhes

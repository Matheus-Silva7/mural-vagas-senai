import React from 'react'
import DetalheEmpresa from '../components/EmpresaDetalhe/DetalheEmpresa'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

const EmpresaDetalhes = ({ theme, setTheme }) => {
  return (
    <>
     <NavBar theme={theme} setTheme={setTheme} />
     <DetalheEmpresa/>
     <Footer/>
    </>
  )
}

export default EmpresaDetalhes

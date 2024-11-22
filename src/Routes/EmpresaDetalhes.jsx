import React from 'react'
import NavBarAdmin from '../components/NavBar/NavBarAdmin'
import DetalheEmpresa from '../components/EmpresaDetalhe/DetalheEmpresa'
import Footer from '../components/Footer/Footer'

const EmpresaDetalhes = ({ theme, setTheme }) => {
  return (
    <>
     <NavBarAdmin theme={theme} setTheme={setTheme} />
     <DetalheEmpresa/>
     <Footer/>
    </>
  )
}

export default EmpresaDetalhes

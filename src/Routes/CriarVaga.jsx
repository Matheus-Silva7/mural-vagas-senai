import React from 'react'
import NavBarEmpresa from '../components/NavBar/NavBarEmpresa'
import Footer from '../components/Footer/Footer'
import FormCriarVaga from '../components/Forms/criarVaga/FormCriarVaga'


const CriarVaga = ({ theme, setTheme }) => {
  return (
    <>
      <NavBarEmpresa theme={theme} setTheme={setTheme}/>
      <FormCriarVaga/>
      <Footer/>
    </>
  )
}

export default CriarVaga

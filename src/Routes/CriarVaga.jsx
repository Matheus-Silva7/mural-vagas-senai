import React from 'react'
import NavBarEmpresa from '../components/NavBar/NavBarEmpresa'
import Footer from '../components/Footer/Footer'
import FormCriarVaga from '../components/Forms/criarVaga/FormCriarVaga'
import NavBar from '../components/NavBar/NavBar'


const CriarVaga = ({ theme, setTheme }) => {
  return (
    <>
      <NavBar theme={theme} setTheme={setTheme}/>
      <FormCriarVaga/>
      <Footer/>
    </>
  )
}

export default CriarVaga

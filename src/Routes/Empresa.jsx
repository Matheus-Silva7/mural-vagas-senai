import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

const Empresa = ({theme, setTheme}) => {
  return (
    <div>
      <NavBar theme={theme} setTheme={setTheme}/>
      <Footer/>
    </div>
  )
}

export default Empresa

import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Unauthorized from '../components/Messages/Unauthorized/Unauthorized'

const UnauthorizedPage = ({ theme, setTheme }) => {
  return (
    <>
    <NavBar theme={theme} setTheme={setTheme} />
    <Unauthorized/>
       <Footer/>
    </>
  )
}

export default UnauthorizedPage

import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Forbidden from '../components/Messages/Forbidden/Forbidden'

const ForbiddenPage = ({ theme, setTheme }) => {
  return (
    <>
    <NavBar theme={theme} setTheme={setTheme} />
    <Forbidden/>
       <Footer/>
    </>
  )
}

export default ForbiddenPage

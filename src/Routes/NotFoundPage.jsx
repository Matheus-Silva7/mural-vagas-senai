import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import NotFound from '../components/Messages/NotFound/NotFound'
import Footer from '../components/Footer/Footer'

const NotFoundPage = ({ theme, setTheme }) => { 
    return (
        <>
        <NavBar theme={theme} setTheme={setTheme} />
        <NotFound/>
        <Footer/>
        </>
      )
  
}

export default NotFoundPage

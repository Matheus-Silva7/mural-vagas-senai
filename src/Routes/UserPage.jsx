import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

const UserPage = ({theme, setTheme}) => {
  return (
    <>
     <NavBar theme={theme} setTheme={setTheme} /> 
     <Footer/>
    </>
  )
}

export default UserPage

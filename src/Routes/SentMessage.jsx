import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import FormSent from '../components/Messages/formSent/FormSent'
import Footer from '../components/Footer/Footer'

const SentMessage = ({theme, setTheme}) => {
  return (
    <>
      <NavBar theme={theme} setTheme={setTheme}/>
      <FormSent/>
      <Footer/>
    </>
  )
}

export default SentMessage

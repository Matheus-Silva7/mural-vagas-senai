import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import FormSent from '../components/Forms/formSent/FormSent'
import Footer from '../components/Footer/Footer'

const SentMessage = ({theme, setTheme}) => {
  return (
    <div>
      <NavBar theme={theme} setTheme={setTheme}/>
      <FormSent/>
      <Footer/>
    </div>
  )
}

export default SentMessage

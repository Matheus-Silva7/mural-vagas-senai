import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import FormsSingin from '../components/Forms/FormsSingin'

const Signin = ({theme, setTheme}) => {
  return (
    <div>
      <NavBar theme={theme} setTheme={setTheme}/>
      <FormsSingin/>
    </div>
  )
}

export default Signin

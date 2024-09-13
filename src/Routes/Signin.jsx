import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import FormsSingin from '../components/Forms/FormsSingin'
import Footer from '../components/Footer/Footer'
import ParticlesBackground from '../components/Particles/ParticlesBackground'

const Signin = ({theme, setTheme}) => {
  return (
    <div className=''>
      <ParticlesBackground/>
      <NavBar theme={theme} setTheme={setTheme}/>
      <FormsSingin/>
      <Footer/>
    </div>
  )
}

export default Signin

import React from 'react'
import NavBarAdmin from '../components/NavBar/NavBarAdmin'
import Footer from "../components/Footer/Footer"
import TitleMural from '../components/Title/TitleMural'
import MainTitle from '../components/Title/MainTitle'

const Admin = ({theme, setTheme}) => {
  return (
    <div>
      <NavBarAdmin theme={theme} setTheme={setTheme}/>
      <TitleMural text={"mural de aprovação"}/>
      <MainTitle title={"Ultimas solicitações"}/>
      <Footer/>
    </div>
  )
}

export default Admin

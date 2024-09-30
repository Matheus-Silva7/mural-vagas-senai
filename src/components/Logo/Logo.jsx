import React from 'react'
import logo from "../../assets/logo-senai.png";
import "./Logo.css"

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo senai" />
      <p className="line">|</p>
      <p className="text">Portal de Vagas</p>
    </div>
  )
}

export default Logo

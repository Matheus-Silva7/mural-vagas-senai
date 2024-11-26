import React from 'react'
import logo from "../../assets/logo-senai.png";
import "./Logo.css"
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <img src={logo} alt="logo senai" />
        <p className="line">|</p>
        <p className="text">Portal de Vagas</p>
      </Link>
    </div>
  )
}

export default Logo

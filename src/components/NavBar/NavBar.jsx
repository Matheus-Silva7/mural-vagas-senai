import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo-senai.png";
import { FaMoon, FaSun } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo senai" />
        <p className="line">|</p>
        <p className="text">Portal de Vagas</p>
      </div>
      <div className="theme-button">
        <FaSun />
      </div>
    </nav>
  );
};

export default NavBar;

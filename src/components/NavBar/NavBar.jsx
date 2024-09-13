import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo-senai.png";
import { FaMoon, FaSun } from "react-icons/fa";

const NavBar = ({theme, setTheme}) => {

const toggle_mode = () =>{
  theme == 'dark' ? setTheme('light') : setTheme('dark')
}

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo senai" />
        <p className="line">|</p>
        <p className="text">Portal de Vagas</p>
      </div>
      <div className="right-side">
      <ul>
        <li>Vagas</li>
        <li>Dúvidas</li>
      </ul>
      <div className="theme-button" onClick={()=>toggle_mode()}>
        {/* {theme == "dark"? <FaSun size={30}/> : <FaMoon size={30}/>} */}
        <FaSun size={30} className={`iconSun ${theme}`}/>
        <FaMoon size={30} className={`iconMoon ${theme}`}/>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;

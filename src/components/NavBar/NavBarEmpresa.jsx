import React from 'react'
import "./NavBar.css";
import ToogleMode from "../Buttons/ToogleMode/ToggleMode"
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';

const NavBarEmpresa = ({ theme, setTheme }) => {
  return (
    <nav className="navbar">
      <Logo />
      <div className="right-side">
        <ul>
          <li><Link to={"/empresa"}>Minhas vagas</Link></li>
          <li><Link to={"/empresa/dados"}>Meus Dados</Link></li>
          <li>Olá, Trela</li>
        </ul>
        <ToogleMode setTheme={setTheme} theme={theme} />
      </div>
    </nav>
  );
}

export default NavBarEmpresa

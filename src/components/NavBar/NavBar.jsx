import React from "react";
import "./NavBar.css";
import ToogleMode from "../Buttons/ToogleMode/ToggleMode"
import Logo from "../Logo/Logo";


const NavBar = ({ theme, setTheme }) => {

  return (
    <nav className="navbar">
      <Logo />
      <div className="right-side">
        <ul>
          <li>Vagas</li>
          <li>Dúvidas</li>
        </ul>
        <ToogleMode setTheme={setTheme} theme={theme} />
      </div>
    </nav>
  );
};

export default NavBar;

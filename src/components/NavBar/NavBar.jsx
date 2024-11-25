import React, { useState, useEffect } from "react";
import "./NavBar.css";
import ToogleMode from "../Buttons/ToogleMode/ToggleMode";
import Logo from "../Logo/Logo";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = ({ theme, setTheme }) => {
  const [active, setActive] = useState(false);

  const clickMenu = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (active) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [active]);

  return (
    <nav className="navbar">
      <Logo />
      <div className={`right-side ${active ? "active" : ""}`}>
        <ul>
        <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/vagas"}>Vagas</Link></li>
          <li><Link to={"/duvidas"}>Dúvidas</Link></li>
        </ul>
        <ToogleMode setTheme={setTheme} theme={theme} />
      </div>
      <div className="menu">
        {active ? (
          <IoMdClose size={40} onClick={clickMenu} />
        ) : (
          <IoMenu size={40} onClick={clickMenu} />
        )}
      </div>
    </nav>
  );
};

export default NavBar;

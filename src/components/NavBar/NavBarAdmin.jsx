import React, { useState, useEffect } from 'react';
import "./NavBar.css";
import ToogleMode from "../Buttons/ToogleMode/ToggleMode";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import { IoMdClose } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';

const NavBarAdmin = ({ theme, setTheme }) => {
  const navigate = useNavigate(); // Hook para navegação

  const [active, setActive] = useState(false);

  const handleLogout = () => {
    localStorage.clear(); // Limpa os dados do localStorage
    navigate("/login"); // Redireciona para a página inicial
  };

  const clickMenu = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (active) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [active]);

  return (
    <nav className="navbar">
      <Logo />
      <div className={`right-side ${active ? "active" : ""}`}>
        <ul>
          <li><Link to={"/admin"}>Home</Link></li>
          <li><Link to={"/admin/empresas"}>Empresas</Link></li>
          <li><Link to={"/admin/vagas"}>Vagas</Link></li>
          <li><button onClick={handleLogout}>Sair</button></li>
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

export default NavBarAdmin;

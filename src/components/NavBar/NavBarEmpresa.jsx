import React, { useState, useEffect } from 'react';
import "./NavBar.css";
import ToogleMode from "../Buttons/ToogleMode/ToggleMode";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';
import { getDadosEmpresa } from '../../services/Api';

const NavBarEmpresa = ({ theme, setTheme }) => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  console.log("ID da empresa:", id);

  const [empresa, setEmpresa] = useState({ nomeEmpresa: "" });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fetchDadosEmpresa = async () => {
      try {
        const response = await getDadosEmpresa(id);
        if (response) {
          setEmpresa(response);
        }
      } catch (error) {
        console.error("Erro ao obter os dados da empresa:", error);
      }
    };

    fetchDadosEmpresa();
  }, [id]);

  const clickMenu = () => {
    setActive(!active);
  };

  const handleLogout = () => {
    localStorage.clear(); 
    navigate("/login"); 
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
          <li><Link to={"/empresa"}>Minhas vagas</Link></li>
          <li><Link to={"/empresa/dados"}>Meus Dados</Link></li>
          <li className="dropdown">
            Olá, {empresa.nomeEmpresa || "Visitante"}
            <div className="dropdown-menu">
              <button onClick={handleLogout}>Sair</button>
            </div>
          </li>
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

export default NavBarEmpresa;

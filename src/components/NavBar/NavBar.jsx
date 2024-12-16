import React, { useState, useEffect } from "react";
import "./NavBar.css";
import ToogleMode from "../Buttons/ToogleMode/ToggleMode";
import Logo from "../Logo/Logo";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { getDadosEmpresa } from "../../services/Api"; // Importe a função

const NavBar = ({ theme, setTheme }) => {
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


  const roles = JSON.parse(localStorage.getItem("roles") || "[]");
  const primaryRole = roles[0] || null;

  return (
    <nav className="navbar">
      <Logo />
      <div className={`right-side ${active ? "active" : ""}`}>
        <ul>
          {primaryRole === "ROLE_ADMIN" && (
            <>
              <li><Link to="/admin">Home</Link></li>
              <li><Link to="/admin/empresas">Empresas</Link></li>
              <li><Link to="/admin/vagas">Vagas</Link></li>
              <li><button onClick={handleLogout}>Sair</button></li>
            </>
          )}

          {primaryRole === "ROLE_EMPRESA" && (
            <>
              <li><Link to="/empresa">Minhas Vagas</Link></li>
              <li><Link to="/empresa/dados">Meus Dados</Link></li>
              <li className="dropdown">
                Olá, {empresa?.nomeEmpresa || "Visitante"}
                <div className="dropdown-menu">
                  <button onClick={handleLogout}>Sair</button>
                </div>
              </li>
            </>
          )}

          {!primaryRole && (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/vagas">Vagas</Link></li>
            </>
          )}
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

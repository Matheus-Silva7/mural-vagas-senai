import React, { useState } from "react";
import "./FormsSingin.css";
import InputText from "../../Inputs/InputText";
import { Link, useNavigate } from "react-router-dom";
import { getDadosEmpresa, loginSubmit } from "../../../services/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonSubmit from "../../Buttons/ButtonSubmit/ButtonSubmit";

const FormsSingin = () => {
  const navigate = useNavigate();
  const notifyErr = (message) => toast.error(message);



  const [loginData, setLoginData] = useState({
    email: "",
    senha: "",
  });

  const loginClick = async () => {
    try {
      const response = await loginSubmit(loginData); 
  
      if (response.roles[0] === "ROLE_ADMIN") {
        navigate("/admin"); 
      } else if (response.roles[0] === "ROLE_EMPRESA") {
    
        const dadosEmpresa = await getDadosEmpresa(); 
        console.log("Dados da empresa:", dadosEmpresa);
        navigate("/empresa"); 
      
      } else {
        notifyErr(); 
      }
    } catch (error) {
    
      if (error.response && error.response.status === 403) {
        navigate("/formularioenviado"); 
      } else if(error.response && error.response.status === 404) {
        notifyErr("Usuario não encontrado, realize o cadastro ou verifique as credênciais digitadas."); 
      } else if(error.response && error.response.status === 401){
        notifyErr("Email e/ou senha incorretos!"); 
      } else{
        notifyErr("Erro no login, verifique as credênciais digitadas."); 
      }
      console.error("Erro no login:", error); 
    }
  };
  

  return (
    <div className="content-forms">
      <form>
        <div>
          <h2>Login</h2>
          <p>Bem-vindo ao portal de vagas do Senai Cotia!</p>
        </div>

        <InputText
          label="Email"
          type="email"
          placeholder="Insira seu email..."
          onChange={(event) =>
            setLoginData({ ...loginData, email: event.target.value })
          }
        />

        <InputText
          label="Senha"
          type="password"
          placeholder="Insira sua senha..."
          onChange={(event) =>
            setLoginData({ ...loginData, senha: event.target.value })
          }
        />
        <a className="forgot-password">Esqueci minha senha</a>

        <p className="not-acess">
          Não tenho acesso? <Link to="/cadastro">Cadastre-se</Link>
        </p>

        <ButtonSubmit
          text={"Entrar"}
          click={(e) => {
            e.preventDefault();
            loginClick();
          }}
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormsSingin;

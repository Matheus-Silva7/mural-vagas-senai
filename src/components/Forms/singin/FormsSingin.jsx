import React, { useState } from "react";
import "./FormsSingin.css";
import InputText from "../../Inputs/InputText";
import { Link, useNavigate } from "react-router-dom";
import { loginSubmit } from "../../../services/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonSubmit from "../../Buttons/ButtonSubmit/ButtonSubmit";

const FormsSingin = () => {
  const navigate = useNavigate();
  const notifyErr = () => toast.error("Erro no login. Verifique suas credenciais.");

  const [loginData, setLoginData] = useState({
    email: "",
    senha: "",
  });

  const loginClick = async () => {
    try {
      const response = await loginSubmit(loginData);
      if (response) {
        navigate("/empresa");
      } else {
        notifyErr();
      }
    } catch (error) {
      notifyErr();
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
        <p className="not-access">
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

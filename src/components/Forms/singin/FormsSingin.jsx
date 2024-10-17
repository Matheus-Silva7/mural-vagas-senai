import React, { useState } from 'react';
import "./FormsSingin.css";
import ButtonSubmit from "../../Buttons/ButtonSubmit/ButtonSubmit"
import InputText from '../../Inputs/InputText';
import { Link, useNavigate } from 'react-router-dom';
import { loginSubmit } from '../../../services/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormsSingin = () => {
  const navigate = useNavigate();
  const notifyErr = () => toast.error("Erro no login. Verifique suas credenciais.");

  const [loginData, setLoginData] = useState({
    email: "",
    senha: ""
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
    <div className='content-forms'>
      <form>
        <div>
          <h2>Login</h2>
          <p>Bem-vindo ao portal de vagas do Senai Cotia!</p>
        </div>

        {/* Campo de Email */}
        <InputText
          label="Email"
          type="email"
          placeholder="Insira seu email..."
          onChange={(event) =>
            setLoginData({ ...loginData, email: event.target.value })
          }
        />

        {/* Campo de Senha */}
        <InputText
          label="Senha"
          type="password"
          placeholder="Insira sua senha..."
          onChange={(event) =>
            setLoginData({ ...loginData, senha: event.target.value })
          }
        />

        <a className='forgot-password'>Esqueci minha senha</a>
        <p className='not-access'>
          Não tenho acesso? <Link to="/cadastro">Cadastre-se</Link>
        </p>

        {/* Botão de Submissão */}
        <button
          type="button"
          className='buttonSubmit'  // Certifique-se de que esta classe está no CSS
          onClick={(e) => {
            e.preventDefault(); // Prevenção padrão
            loginClick();
          }}
        >
          Entrar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormsSingin;

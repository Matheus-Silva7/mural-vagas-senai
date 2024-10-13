import React, { useState } from 'react'
import "./FormsSingin.css"
import ButtonSubmit from '../../Buttons/ButtonSubmit/ButtonSubmit'
import InputText from '../../Inputs/InputText'
import { Link, useNavigate } from 'react-router-dom'
import { loginSubmit } from '../../../services/Api'
const FormsSingin = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    senha: ""
  })
  const navigate = useNavigate();
  const loginClick = async () => {
    try {
      const response = await loginSubmit(loginData);
      if (response) {
        navigate("/empresa");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Ocorreu um erro ao tentar fazer login.");
    }
  };


  return (
    <div className='content-forms'>
      <form>
        <div>
          <h2>Login</h2>
          <p>Bem vindo ao portal de vagas do Senai Cotia!</p>
        </div>
        <InputText label={"Email"} type={"email"} placeholder={"Insira seu email..."} onChange={(event) =>
          setLoginData({ ...loginData, email: event.target.value })
        } />
        <InputText label={"Senha"} type={"password"} placeholder={"Insira sua Senha..."} onChange={(event) => setLoginData({ ...loginData, senha: event.target.value })} />
        <a className='forgot-password'>Esqueci minha senha</a>
        <p className='not-acess'>Não tenho acesso? <Link to={"/cadastro"}>Cadastre-se</Link></p>
        {/*   <ButtonSubmit text={<Link to={"/empresa"}>Entrar</Link>} /> */}
        <button
          className='buttonSubmit'
          onClick={(e) => {
            e.preventDefault();
            loginClick()
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default FormsSingin

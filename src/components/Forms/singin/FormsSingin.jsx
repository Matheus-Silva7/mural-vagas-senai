import React from 'react'
import "../Forms.css"
import InputButton from '../../Inputs/InputButton'
import InputText from '../../Inputs/InputText'
const FormsSingin = () => {
  return (
    <div className='content-forms'>
      <form>
        <div>
          <h2>Login</h2>
          <p>Bem vindo ao portal de vagas do Senai Cotia!</p>
        </div>
        <InputText label={"Email"} type={"email"} placeholder={"Insira seu email..."} />
        <InputText label={"Senha"} type={"password"} placeholder={"Insira sua Senha..."} />
        <a className='forgot-password'>Esqueci minha senha</a>
        <p className='not-acess'>Não tenho acesso? <a>O que fazer?</a></p>
        <InputButton text={"Entrar"} />
      </form>
    </div>
  )
}

export default FormsSingin

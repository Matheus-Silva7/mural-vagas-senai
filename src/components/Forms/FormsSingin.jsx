import React from 'react'
import "./FormsSingin.css"
const FormsSingin = () => {
  return (
    <div className='content-forms'>
    <form>
      <h2>Login</h2>
      <p>Bem vindo ao portal de vagas do Senai Cotia!</p>
      <input type="email" placeholder='Insira seu email...'/>
      <input type="password" placeholder='Insira sua senha...'/>
      <a className='forgot-password'>Esqueci minha senha</a>
      <p className='not-acess'>Não tenho acesso? <a>O que fazer?</a></p>
      <input type="submit" value={"Entrar"}/>
    </form>
    </div>
  )
}

export default FormsSingin

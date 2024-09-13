import React from 'react'
import "./FormsSingin.css"
const FormsSingin = () => {
  return (
    <div className='content-forms'>
      <form>
        <div>
          <h2>Login</h2>
          <p>Bem vindo ao portal de vagas do Senai Cotia!</p>
        </div>
        <div className='input-content'>
          <label>Email:</label>
          <input type="email" placeholder='Insira seu email...' />
        </div>
        <div className='input-content'>
          <label >Senha:</label>
          <input type="password" placeholder='Insira sua senha...' />
        </div>
        <a className='forgot-password'>Esqueci minha senha</a>
        <p className='not-acess'>Não tenho acesso? <a>O que fazer?</a></p>
        <input type="submit" value={"Entrar"} />
      </form>
    </div>
  )
}

export default FormsSingin

import React from 'react'
import "./FormsSingin.css"
import ButtonSubmit from '../../Buttons/ButtonSubmit/ButtonSubmit'
import InputText from '../../Inputs/InputText'
import { Link } from 'react-router-dom'
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
        <p className='not-acess'>Não tenho acesso? <Link to={"/cadastro"}>Cadastre-se</Link></p>
      {/*   <ButtonSubmit text={<Link to={"/empresa"}>Entrar</Link>} /> */}
        <button className='buttonSubmit' /* onClick={} */><Link to={"/empresa"}>Entrar</Link></button>
      </form>
    </div>
  )
}

export default FormsSingin

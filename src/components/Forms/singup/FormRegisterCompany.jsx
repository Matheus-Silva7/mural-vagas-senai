import React from 'react'
import InputText from '../../Inputs/InputText'
import "./FormsSingup.css"

const FormRegisterCompany = () => {
  return (
    <div className='input-container'>  
      <InputText label={"Telefone"} type={"text"} placeholder={"Informe o telefone ..."} />
      <InputText label={"Email"} type={"email"} placeholder={"Informe o email..."} />
      <InputText label={"Senha"} type={"password"} placeholder={"Crie uma senha de 8 caracteres ..."} />
      <InputText label={"Confirmar senha"} type={"password"} placeholder={"Confirmar senha ..."} />
    </div>
  )
}

export default FormRegisterCompany
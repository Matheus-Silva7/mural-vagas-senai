import React from 'react'
import "./Forms.css"
import InputButton from '../Inputs/InputButton'
import InputText from '../Inputs/InputText'

const FormsSingup = () => {
  return (
    <div className='content-forms formsingup'>
    <form>
      <div>
        <h2>Cadastro Empresa</h2>
        <p>Somente empresas podem enviar candidaturas</p>
      </div>
      <InputText label={"Nome Empresa "} type={"text"} placeholder={"Informe o nome..."} />
      <InputText label={"CNPJ"} type={"text"} placeholder={"Informe o CNPJ ..."} />
      <InputText label={"Ramo"} type={"text"} placeholder={"Informe o ramo ..."} />
      <InputText label={"Site"} type={"text"} placeholder={"Informe o CNPJ ..."} />
      <InputText label={"Quantidade de  funcionários"} type={"text"} placeholder={"Informe a quantidade de funcionários..."} />
      <InputText label={"Telefone"} type={"text"} placeholder={"Informe o telefone ..."} />
      <InputText label={"Email"} type={"email"} placeholder={"Informe o email..."} />
      <InputText label={"Senha"} type={"password"} placeholder={"Crie uma senha de 8 caracteres ..."} />
      <InputText label={"Confirmar senha"} type={"password"} placeholder={"Confirmar senha ..."} />

      <InputButton text={"Enviar solicitação"} />
    </form>
  </div>
  )
}

export default FormsSingup

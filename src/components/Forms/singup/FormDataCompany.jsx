import React from 'react'
import InputText from '../../Inputs/InputText'
import "./FormsSingup.css"

const FormDataCompany = () => {
  return (  
      <div className='input-container'>
      <InputText label={"Nome Empresa "} type={"text"} placeholder={"Informe o nome..."} />
      <InputText label={"CNPJ"} type={"text"} placeholder={"Informe o CNPJ ..."} />
      <InputText label={"Ramo"} type={"text"} placeholder={"Informe o ramo ..."} />
      <InputText label={"Site"} type={"text"} placeholder={"Informe o CNPJ ..."} />
      <InputText label={"Quantidade de  funcionários"} type={"text"} placeholder={"Informe a quantidade de funcionários..."} />
      </div>
  )
}

export default FormDataCompany
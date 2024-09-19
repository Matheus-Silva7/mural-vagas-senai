import React from 'react'
import InputText from '../../Inputs/InputText'
import "./FormsSingup.css"

const FormAdressCompany = () => {
  return (
    <div className='input-container'>
    <InputText label={"CEP "} type={"text"} placeholder={"Informe o CEP..."} />
    <InputText label={"Logradouro"} type={"text"} placeholder={"Informe a Rua ..."} />
    <InputText label={"Bairro"} type={"text"} placeholder={"Informe o Bairro ..."} />
    <InputText label={"Número"} type={"number"} placeholder={"Informe o nº ..."} />
    <InputText label={"Complemento"} type={"text"} placeholder={"Informe o Complemento..."} />
    </div>
  )
}

export default FormAdressCompany
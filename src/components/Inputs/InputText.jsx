import React from 'react'
import "./Inputs.css"

function InputText({type, label, placeholder, onChange}) {
  return (
    <div className='input-content'>
    <label>{label}</label>
    <input  className='inputText' type={type} placeholder={placeholder} onChange={onChange}/>
  </div>
  )
}

export default InputText

import React from 'react'
import "./Inputs.css"

function InputText({type, label, placeholder}) {
  return (
    <div className='input-content'>
    <label>{label}</label>
    <input  className='inputText' type={type} placeholder={placeholder}/>
  </div>
  )
}

export default InputText

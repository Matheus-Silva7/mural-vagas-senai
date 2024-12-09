import React from 'react'
import "./Inputs.css"

function InputText({type, label, placeholder, onChange, value}) {
  return (
    <div className='input-content'>
    <label>{label}</label>
    <input  className={`inputText ${label}`} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
  </div>
  )
}

export default InputText

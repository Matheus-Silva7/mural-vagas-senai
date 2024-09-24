import React from 'react'
import "./Inputs.css"

const inputTextSingup = ({label, type, placeholder, onChange, value}) => {
  return (
    <div className='input-content'>
    <label>{label}</label>
    <input  className={`inputText ${label}`} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
  </div>
  )
}

export default inputTextSingup

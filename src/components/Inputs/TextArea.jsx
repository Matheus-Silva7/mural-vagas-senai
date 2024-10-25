import React from 'react'
import "./Inputs.css"

const TextArea = ({ label, placeholder, onChange, value}) => {
  return (
    <div className='input-content'>
    <label>{label}</label>
    <textarea  className={`textarea ${label}`} placeholder={placeholder} onChange={onChange} value={value}/>
  </div>
  )
}

export default TextArea

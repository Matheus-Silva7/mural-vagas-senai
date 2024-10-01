import React from 'react'
import "./Inputs.css"

const TextArea = ({ label, placeholder}) => {
  return (
    <div className='input-content'>
    <label>{label}</label>
    <textarea  className='textarea' placeholder={placeholder}/>
  </div>
  )
}

export default TextArea

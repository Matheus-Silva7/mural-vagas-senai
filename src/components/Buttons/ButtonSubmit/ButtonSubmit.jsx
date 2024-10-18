import React from 'react'
import "./ButtonSubmit.css"

const ButtonSubmit = ({ text, click }) => {
  return (
    <button  className='buttonSubmit' type='submit' onClick={click}>{text}</button>
  )
}

export default ButtonSubmit

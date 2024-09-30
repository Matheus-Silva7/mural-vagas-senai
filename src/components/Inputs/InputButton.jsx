import React from 'react'
import "./Inputs.css"

const InputButton = ({ text }) => {
  return (
    <button  className='buttonSubmit' type='submit'>{text}</button>
  )
}

export default InputButton

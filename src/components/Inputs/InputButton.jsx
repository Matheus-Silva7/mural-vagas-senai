import React from 'react'
import "./Inputs.css"

const InputButton = ({ text }) => {
  return (
    <input  className='buttonMain' type='submit' value={text}></input>
  )
}

export default InputButton

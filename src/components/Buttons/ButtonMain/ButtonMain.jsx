import React from 'react'
import "./ButtonMain.css"

const ButtonMain = ({ text, classname, click }) => {
  return (
    <>
      <button
        className={`ButtonMain ${classname}`}
        variant={classname === "Salvar" ? "contained" : ""}
        onClick={click}
      >
        {text}
      </button>

    </>
  )
}

export default ButtonMain

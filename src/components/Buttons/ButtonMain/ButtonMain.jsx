import React from 'react'
import "./ButtonMain.css"

const ButtonMain = ({text, classname}) => {
  return (
    <>
      <button className={`ButtonMain ${classname}`}>{text}</button>
    </>
  )
}

export default ButtonMain

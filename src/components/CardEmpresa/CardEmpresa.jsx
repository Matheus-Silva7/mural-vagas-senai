import React from 'react'
import "./CardEmpresa.css"
import ButtonMain from "../Buttons/ButtonMain/ButtonMain"

const CardEmpresa = () => {
  return (
    <div className='card-empresa'>
      <div className="left-card">
        <img src="" alt="" />
        <div className="text-left">
            <h2>Trela</h2>
            <p>Ramo: Automobilística</p>
            <p>São Paulo - SP</p>
        </div>
      </div>
      <ButtonMain text={"Mais detalhes"}/>
      <div className="right-card">
        <p>Data solicitação:</p>
        <p>16/07/2024</p>
        <div className="buttons-aprovar">
            <p>x</p> <p>/</p>
        </div>
      </div>
    </div>
  )
}

export default CardEmpresa

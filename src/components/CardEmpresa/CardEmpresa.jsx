import React from 'react'
import "./CardEmpresa.css"
import ButtonMain from "../Buttons/ButtonMain/ButtonMain"
import Logo from "../../../src/assets/logo-empresa.png"
import { IoCheckmark } from 'react-icons/io5'
import { HiXMark } from 'react-icons/hi2'

const CardEmpresa = () => {
  return (
    <>
    <div className='card-empresa'>
      <div className="left-card">
        <img src={Logo} alt="" />
        <div className="text-left">
          <h2>Liora</h2>
          <p className='b-text'>Ramo: Automobilística</p>
          <p>São Paulo - SP</p>
        </div>
      </div>
      <ButtonMain text={"Mais detalhes"} />
      <div className="right-card">
        <p>Data solicitação:</p>
        <p>16/07/2024</p>
        <div className="buttons-aprovar">
          <button className='check'><IoCheckmark /></button>
          <button className='recuse'> <HiXMark /></button>
        </div>
      </div>
    </div><div className='card-empresa'>
        <div className="left-card">
          <img src={Logo} alt="" />
          <div className="text-left">
            <h2>Trela</h2>
            <p className='b-text'>Ramo: Automobilística</p>
            <p>São Paulo - SP</p>
          </div>
        </div>
        <ButtonMain text={"Mais detalhes"} />
        <div className="right-card">
          <p>Data solicitação:</p>
          <p>16/07/2024</p>
          <div className="buttons-aprovar">
            <button className='check'><IoCheckmark /></button>
            <button className='recuse'> <HiXMark /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardEmpresa

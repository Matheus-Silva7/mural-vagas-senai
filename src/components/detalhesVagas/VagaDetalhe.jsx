import React from 'react'
import "./VagaDetalhe.css"
import LogoEmpresa from "../../assets/logo-empresa.png"
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'

const VagaDetalhe = () => {
  return (
    <div className='vaga-content'>
      <button className='button-back'><Link to={"/empresa"}><MdKeyboardArrowLeft/></Link> </button>
      <div className="vaga">
        <div className="top-vaga">
          <img src={LogoEmpresa} alt="logo empresa" />
          <div className="right-top">
            <div className="titles">
              <h1 className='title-vaga'>Estágio em Engenharia de Software</h1>
              <h2 className='n-empresa'>Liora</h2>
            </div>
            <div className="data-vaga">
              <p>Publicado em 15/08/2024</p>
              <p>Expira em 22/08/2024 </p>
            </div>
          </div>
        </div>
        <div className="infos-vaga">
          <div className="info">
            <span>Posição</span>
            <p>Estágio</p>
          </div>
          <div className="info">
            <span>Modelo de trabalho</span>
            <p>Híbrido</p>
          </div>
          <div className="info">
            <span>Remuneração</span>
            <p>À combinar</p>
          </div>
          <div className="info">
            <span>Carga Horária</span>
            <p>30h semanais</p>
          </div>
          <div className="info">
            <span>Localização</span>
            <p>São Paulo, SP</p>
          </div>
        </div>
        <div className="desc-vaga">
          <div className="desc">
            <h3>Sobre a empresa</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          </div>
          <div className="desc">
            <h3>Sobre a empresa</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          </div>
          <div className="desc">
            <h3>Sobre a empresa</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VagaDetalhe

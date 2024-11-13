import React from 'react'
import "./VagaDetalhe.css"
import LogoEmpresa from "../../assets/logo-empresa.png"
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { useNavigate } from 'react-router-dom' 

const VagaDetalhe = () => {
  const navigate = useNavigate(); 

  return (
    <div className='vaga-content'>
      <button className='button-back' onClick={() => navigate(-1)}> 
        <MdKeyboardArrowLeft />
      </button>
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
            <h3>Contatos da empresa</h3>
            <ul>
              <li><strong>email:</strong> lioracontatorh@gmail.com</li>
              <li><strong>telefone:</strong> (11) 99999-8888</li>
              <li><strong>endereço:</strong> It has survived not only five centuries, but also the leap into electronic typesetting</li>
            </ul>
          </div>
          <div className="desc">
            <h3>Descrição da vaga</h3>
            <p>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          </div>
          <div className="desc">
            <h3>Requisitos</h3>
            <ul>
              <li>Cursar engenharia de software</li>
              <li>Vaga também abrange recém formados  </li>
            </ul>
          </div>
          <div className="desc">
            <h3>Benefícios</h3>
            <ul>
              <li>VT</li>
              <li>VR</li>
              <li>Convênio Odontológico</li>
              <li>Cesta básica</li>
            </ul>
          </div>
          <div className="desc">
            <h3>Informações adicionais</h3>
            <ul>
              <li><strong>Remuneração</strong> À combinar</li>
              <li><strong>Horário de trabalho:</strong> 7:30 á 17:18</li>
              <li><strong>Quantidade de vagas:</strong> 1</li>
            </ul>
          </div>
          <div className="desc">
            <h3>Candidatura</h3>
            <p>A candidatura deve ser feito diretamente com a empresa por <span>email</span> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VagaDetalhe

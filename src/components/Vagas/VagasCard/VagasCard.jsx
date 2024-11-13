import React from 'react'
import "./VagasCard.css"
import ImgEmpresa from "../../../assets/empresa-img.png"
import ButtonMain from '../../Buttons/ButtonMain/ButtonMain'
import { Link } from 'react-router-dom'

const VagasCard = () => {
  return (
    <div className='vagas-content'>
      <div className="vagas-card">
        <div className="top-card">
          <img src={ImgEmpresa} alt="" />
          <div className="right-top">
            <div className="info-vaga">
              <h2>Auxiliar de Eletricista</h2>
              <span>Tempos Brasil</span>
            </div>
            <div className='info-local'>
              <p>Presencial</p>
              <p>São Paulo</p>
            </div>
          </div>
        </div>
        <div className="bottom-card">
          <span>Data de postagem: <p>02/08/2024</p></span>
          <ButtonMain text={<Link to={"/vagaDetalhe"}>Vaga</Link>}/>
        </div>
      </div>
      <div className="vagas-card">
        <div className="top-card">
          <img src={ImgEmpresa} alt="" />
          <div className="right-top">
            <div className="info-vaga">
              <h2>Auxiliar de Eletricista</h2>
              <span>Tempos Brasil</span>
            </div>
            <div className='info-local'>
              <p>Presencial</p>
              <p>São Paulo</p>
            </div>
          </div>
        </div>
        <div className="bottom-card">
          <span>Data de postagem: <p>02/08/2024</p></span>
          <ButtonMain text={<Link to={"/vagaDetalhe"}>Vaga</Link>}/>
        </div>
      </div>
      <div className="vagas-card">
        <div className="top-card">
          <img src={ImgEmpresa} alt="" />
          <div className="right-top">
            <div className="info-vaga">
              <h2>Auxiliar de Eletricista</h2>
              <span>Tempos Brasil</span>
            </div>
            <div className='info-local'>
              <p>Presencial</p>
              <p>São Paulo</p>
            </div>
          </div>
        </div>
        <div className="bottom-card">
          <span>Data de postagem: <p>02/08/2024</p></span>
         <ButtonMain text={<Link to={"/vagaDetalhe"}>Vaga</Link>}/>
        </div>
      </div>
      <div className="vagas-card">
        <div className="top-card">
          <img src={ImgEmpresa} alt="" />
          <div className="right-top">
            <div className="info-vaga">
              <h2>Auxiliar de Eletricista</h2>
              <span>Tempos Brasil</span>
            </div>
            <div className='info-local'>
              <p>Presencial</p>
              <p>São Paulo</p>
            </div>
          </div>
        </div>
        <div className="bottom-card">
          <span>Data de postagem: <p>02/08/2024</p></span>
          <ButtonMain text={<Link to={"/vagaDetalhe"}>Vaga</Link>}/>
        </div>
      </div>
      <div className="vagas-card">
        <div className="top-card">
          <img src={ImgEmpresa} alt="" />
          <div className="right-top">
            <div className="info-vaga">
              <h2>Auxiliar de Eletricista</h2>
              <span>Tempos Brasil</span>
            </div>
            <div className='info-local'>
              <p>Presencial</p>
              <p>São Paulo</p>
            </div>
          </div>
        </div>
        <div className="bottom-card">
          <span>Data de postagem: <p>02/08/2024</p></span>
          <ButtonMain text={<Link to={"/vagaDetalhe"}>Vaga</Link>}/>
        </div>
      </div>
    </div>
  )
}

export default VagasCard

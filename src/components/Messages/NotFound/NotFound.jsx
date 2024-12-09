import React from 'react'
import "../Message.css"
import ButtonMain from '../../Buttons/ButtonMain/ButtonMain'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
    return (
      <div className='message'>
        <h1>404</h1>
        <h2>Não encontrado!</h2>
        <p>A pagina não foi encontrada ou não existe.</p>
        <ButtonMain text={"Voltar para onde estava"} click={() => navigate(-1)} />
      </div>
    )
}

export default NotFound

import React from 'react'
import "../Message.css"
import ButtonMain from '../../Buttons/ButtonMain/ButtonMain'
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className='message'>
      <h1>401</h1>
      <h2>Acesso Negado!</h2>
      <p>Você não tem permissão para acessar esta pagina.</p>
      <ButtonMain text={"Voltar para onde estava"} click={() => navigate(-1)} />
    </div>
  )
}

export default Unauthorized

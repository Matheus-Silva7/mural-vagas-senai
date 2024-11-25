import React from 'react'
import "./FiltroVagas.css"
import InputText from '../Inputs/InputText'
import ButtonMain from '../Buttons/ButtonMain/ButtonMain'
const FiltroVagas = () => {
  return (
    <div className='filtro-vaga'>
      <h2>Filtrar vagas</h2>
      <div className="input-vaga">
        <InputText type={"text"} placeholder={"Informe o nome da vaga"} /> <ButtonMain text={"Buscar"}/>
      </div>
      <div className="select-filtro">
        <select name="modeloTrabalho">
          <option value="presencial">Presencial</option>
          <option value="hibrido">Híbrido</option>
          <option value="home-office">Home-Office</option>
        </select>
        <select name="dataPublicacao">
          <option value="hoje">Hoje</option>
          <option value="ontem">Ontem</option>
          <option value="ultimos-3-dias">últimos 3 dias</option>
          <option value="ultima-semana">última semana</option>
        </select>
        <select name="tipoContrato">
          <option value="clt">CLT</option>
          <option value="pj">PJ</option>
          <option value="estagio">Estágio</option>
          <option value="aprendiz">Aprediz</option>
        </select>
        <select name="salario">
          <option value="ate-mil">Até R$ 1.000,00</option>
          <option value="entre-mil-dois-mil">Entre R$ 1.000,00 e R$ 2.000,00</option>
          <option value="entre-dois-mil-3-mil">Entre R$ 2.000,00 e R$ 3.000,00</option>
          <option value="acima-tres-mil">Acima R$ 3.000,00</option>
        </select>
        <ButtonMain text={"Limpar filtros"}/>
      </div>
    </div>

  )
}

export default FiltroVagas

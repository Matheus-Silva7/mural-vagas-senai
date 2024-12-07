import React, { useState } from "react";
import InputText from "../Inputs/InputText"
import ButtonMain from "../Buttons/ButtonMain/ButtonMain"
import "./FiltroVagas.css"

const FiltroVagas = ({ onBuscar }) => {
  const [nomeVaga, setNomeVaga] = useState("");
  const [modeloTrabalho, setModeloTrabalho] = useState("");
  const [dataPublicacao, setDataPublicacao] = useState("");
  const [tipoContrato, setTipoContrato] = useState("");
  const [salario, setSalario] = useState("");


  const salarioMap = {
    "ate-mil": { salarioMin: 0, salarioMax: 1000 },
    "entre-mil-dois-mil": { salarioMin: 1000, salarioMax: 2000 },
    "entre-dois-mil-3-mil": { salarioMin: 2000, salarioMax: 3000 },
    "acima-tres-mil": { salarioMin: 3000 },
  };

 
  const handleBuscar = () => {
    const filtros = {
      nomeVaga,
      modeloTrabalho,
      tipoContrato,
      salarioMin: salarioMap[salario]?.salarioMin || null,
      salarioMax: salarioMap[salario]?.salarioMax || null,
      dataPublicacao,
    };

    onBuscar(filtros); 
  };


  const handleLimpar = () => {
    setNomeVaga("");
    setModeloTrabalho("");
    setDataPublicacao("");
    setTipoContrato("");
    setSalario("");
  };

  return (
    <div className="filtro-vaga">
      <h2>Filtrar vagas</h2>
      

      <div className="input-vaga">
        <InputText
          type="text"
          placeholder="Informe o nome da vaga"
          value={nomeVaga}
          onChange={(e) => setNomeVaga(e.target.value)}
        />
        <ButtonMain text="Buscar" click={handleBuscar} />
      </div>

      <div className="select-filtro">
        <select
          name="modeloTrabalho"
          value={modeloTrabalho}
          onChange={(e) => setModeloTrabalho(e.target.value)}
        >
          <option value="">Todos os modelos</option>
          <option value="presencial">Presencial</option>
          <option value="hibrido">Híbrido</option>
          <option value="home-office">Home Office</option>
        </select>

        <select
          name="dataPublicacao"
          value={dataPublicacao}
          onChange={(e) => setDataPublicacao(e.target.value)}
        >
          <option value="">Qualquer data</option>
          <option value="hoje">Hoje</option>
          <option value="ontem">Ontem</option>
          <option value="ultimos-3-dias">Últimos 3 dias</option>
          <option value="ultima-semana">Última semana</option>
        </select>

        <select
          name="tipoContrato"
          value={tipoContrato}
          onChange={(e) => setTipoContrato(e.target.value)}
        >
          <option value="">Todos os contratos</option>
          <option value="clt">CLT</option>
          <option value="pj">PJ</option>
          <option value="estagio">Estágio</option>
          <option value="aprendiz">Aprendiz</option>
        </select>

        <select
          name="salario"
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
        >
          <option value="">Qualquer salário</option>
          <option value="ate-mil">Até R$ 1.000,00</option>
          <option value="entre-mil-dois-mil">Entre R$ 1.000,00 e R$ 2.000,00</option>
          <option value="entre-dois-mil-3-mil">Entre R$ 2.000,00 e R$ 3.000,00</option>
          <option value="acima-tres-mil">Acima de R$ 3.000,00</option>
        </select>

        <ButtonMain text="Limpar filtros" click={handleLimpar} />
      </div>
    </div>
  );
};

export default FiltroVagas;

import React, { useState } from "react";
import InputText from "../Inputs/InputText";
import ButtonMain from "../Buttons/ButtonMain/ButtonMain";
import "./FiltroVagas.css";

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
    "acima-tres-mil": { salarioMin: 3000, salarioMax:100000 },
  };

  // Função para calcular a data de acordo com o filtro selecionado
  const calcularDataFiltro = () => {
    const hoje = new Date();
    const hojeFormatted = hoje.toISOString().split("T")[0]; // yyyy-MM-dd

    switch (dataPublicacao) {
      case "hoje":
        return hojeFormatted; // Retorna a data de hoje
      case "ontem":
        hoje.setDate(hoje.getDate() - 1);
        return hoje.toISOString().split("T")[0]; // Retorna a data de ontem
      case "ultimos-3-dias":
        hoje.setDate(hoje.getDate() - 3);
        return hoje.toISOString().split("T")[0]; // Retorna a data de 3 dias atrás
      case "ultima-semana":
        hoje.setDate(hoje.getDate() - 7);
        return hoje.toISOString().split("T")[0]; // Retorna a data de 7 dias atrás
      default:
        return hojeFormatted; // Quando não houver filtro de data, retorna a data de hoje
    }
  };

  // Função de busca que chama onBuscar passando os filtros
  const handleBuscar = () => {
    const filtros = {
      nomeVaga: nomeVaga.trim() || "",  // Garantir que o nomeVaga não seja vazio
      modeloTrabalho,
      tipoContrato,
      salarioMin: salarioMap[salario]?.salarioMin || null,
      salarioMax: salarioMap[salario]?.salarioMax || null,
      dataPublicacao: calcularDataFiltro(), // Usa a função para calcular a data
    };

    console.log("Filtros enviados:", filtros); // Para depuração
    onBuscar(filtros);
  };

  // Função para limpar os filtros
  const handleLimpar = () => {
    setNomeVaga("");
    setModeloTrabalho("");
    setDataPublicacao("");
    setTipoContrato("");
    setSalario("");

    // Chama onBuscar com um objeto vazio para buscar todas as vagas
    onBuscar({});
  };

  return (
    <div className="filtro-vaga">
      <h2>Filtrar vagas</h2>

      <div className="input-vaga">
        <InputText
          type="text"
          placeholder="Informe o nome da vaga"
          value={nomeVaga}
          onChange={(e) => setNomeVaga(e.target.value)} // Atualiza o nome da vaga
        />
        <ButtonMain text="Buscar" click={handleBuscar} />
      </div>

      <div className="select-filtro">
        <select
          name="modeloTrabalho"
          value={modeloTrabalho}
          onChange={(e) => setModeloTrabalho(e.target.value)} // Atualiza o modelo de trabalho
        >
          <option value="">Todos os modelos</option>
          <option value="presencial">Presencial</option>
          <option value="hibrido">Híbrido</option>
          <option value="home-office">Home Office</option>
        </select>

        <select
          name="dataPublicacao"
          value={dataPublicacao}
          onChange={(e) => setDataPublicacao(e.target.value)} // Atualiza a data de publicação
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
          onChange={(e) => setTipoContrato(e.target.value)} // Atualiza o tipo de contrato
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
          onChange={(e) => setSalario(e.target.value)} // Atualiza o salário
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

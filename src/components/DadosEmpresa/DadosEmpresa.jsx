import React, { useState } from 'react';
import InputDadosEmpresa from '../Inputs/InputDadosEmpresa';
import "./DadosEmpresa.css"

const DadosEmpresa = () => {

/*   const [nomeEmpresa, setNomeEmpresa] = useState("Senai Ricardo Lerner") */;

  return (
    <div className='content-dados'>
      <InputDadosEmpresa
        label={"Nome"}
        type={"text"}
        value={"Trela"}
        onValueChange={(newValue) => setNomeEmpresa(newValue)}
      />
      <InputDadosEmpresa
        label={"Cnpj"}
        type={"text"}
        value={"321.31233.412/0001-23"}
        onValueChange={(newValue) => setNomeEmpresa(newValue)}
      />
      <InputDadosEmpresa
        label={"Endereço"}
        type={"text"}
        value={"Rua ali perto, nº30, jardim cotia, São Paulo"}
        onValueChange={(newValue) => setNomeEmpresa(newValue)}
      />
      <InputDadosEmpresa
        label={"Ramo"}
        type={"text"}
        value={"Tecnologia"}
        onValueChange={(newValue) => setNomeEmpresa(newValue)}
      />
      <InputDadosEmpresa
        label={"Site"}
        type={"text"}
        value={"www.trela.com.br"}
        onValueChange={(newValue) => setNomeEmpresa(newValue)}
      />
        <InputDadosEmpresa
          label={"Telefone"}
          type={"text"}
          value={"(11) 99999-8888"}
          onValueChange={(newValue) => setNomeEmpresa(newValue)}
        />
      <InputDadosEmpresa
        label={"Email"}
        type={"text"}
        value={"trela@email.com"}
        onValueChange={(newValue) => setNomeEmpresa(newValue)}
      />
      <InputDadosEmpresa
        label={"Senha atual"}
        type={"password"}
        value={"Trela"}
        onValueChange={(newValue) => setNomeEmpresa(newValue)}
      />
    </div>
  );
};

export default DadosEmpresa;

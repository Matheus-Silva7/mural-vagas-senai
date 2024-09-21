import React, { useState } from 'react';
import FormDataCompany from "./FormDataCompany";
import FormAdressCompany from "./FormAdressCompany";
import FormRegisterCompany from "./FormRegisterCompany";
import "./FormsSingup.css";
import InputButton from "../../Inputs/InputButton"; 

const FormsSignup = () => { 

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    cnpj: "",
    ramo: "",
    site: "",
    quantidadeFuncionarios: "",
    cep: "",
    logradouro: "",
    bairro: "",
    numero: "",
    complemento: "",
    telefone: "",
    email: "",
    senha: "",
    confirmSenha: ""
  });

  const formTitles = ["Dados da empresa", "Endereço da empresa", "Cadastro da empresa"];

 /*  const bodyLight = document.body.className("light") */

  const PageDisplay = () => {
    if (page === 0) {
      return <FormDataCompany formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <FormAdressCompany formData={formData} setFormData={setFormData} />;
    } else {
      return <FormRegisterCompany formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className='form-progress'>
      <div className="form-container">
        <div className="progressbar">
          <div
            className='progress'
            style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}
          ></div>
        </div>
        <div className="header">
          <h1>{formTitles[page]}</h1>
          <p>Somente empresas podem enviar candidaturas</p>
        </div>
        <div className="body">
          {PageDisplay()}
        </div>
        <div className="footer">
          <button
            className='buttonMain buttonLight'
            style={{ backgroundColor: page === 0 ? "#162E36" : "#072029", cursor: page === 0 ? "not-allowed" : "pointer" }}
            disabled={page === 0}
            onClick={() => setPage((currPage) => currPage - 1)}
          >
            Anterior
          </button>
          {page === 2 ? (
            <InputButton text={"enviar"}/> 
          ) : (
            <button
              className='buttonMain'
              disabled={page === formTitles.length - 1}
              onClick={() => setPage((currPage) => currPage + 1)}
            >
              Próximo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormsSignup;

// Componente FormsSignup
import React, { useState } from "react";
import FormDataCompany from "./FormDataCompany";
import FormAdressCompany from "./FormAdressCompany";
import FormRegisterCompany from "./FormRegisterCompany";
import FormDescriptionCompany from "./FormDescriptionCompany";
import "./FormsSingup.css";
import { handleSubmit as apiSubmit } from "../../../services/Api"; // Renomeie para evitar conflitos
import { Link } from "react-router-dom";

const FormsSignup = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    cnpj: "",
    ramo: "",
    logo: "",
    site: "",
    quantidadeFuncionarios: "",
    descricao: "",
    cep: "",
    rua: "",
    bairro: "",
    numero: "",
    cidade: "",
    estado: "",
    pais: "",
    telefone: "",
    email: "",
    senha: "",
    confirmSenha: "",
  });

  const formTitles = [
    "Dados da empresa",
    "Descrição empresa",
    "Endereço da empresa",
    "Cadastro da empresa",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <FormDataCompany formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <FormDescriptionCompany formData={formData} setFormData={setFormData} />
      );
    } else if (page === 2) {
      return (
        <FormAdressCompany formData={formData} setFormData={setFormData} />
      );
    } else {
      return (
        <FormRegisterCompany formData={formData} setFormData={setFormData} />
      );
    }
  };

  return (
    <div className="form-progress">
      <div className="form-container">
        <div className="progressbar">
          <div
            className="progress"
            style={{
              width:
                page === 0
                  ? "25%"
                  : page === 1
                  ? "50%"
                  : page === 2
                  ? "75%"
                  : "100%",
            }}
          ></div>
        </div>
        <div className="header">
          <h1>{formTitles[page]}</h1>
          <p>Somente empresas podem enviar candidaturas</p>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            className="buttonSubmit buttonLight"
            style={{ cursor: page === 0 ? "not-allowed" : "pointer" }}
            disabled={page === 0}
            onClick={() => setPage((currPage) => currPage - 1)}
          >
            Anterior
          </button>
          {page === 3 ? (
            <button
              className="buttonSubmit"
              onClick={() => apiSubmit(formData)} 
            >
              <Link to={"/formularioenviado"}>Enviar</Link>
            </button>
          ) : (
            <button
              className="buttonSubmit"
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
};

export default FormsSignup;
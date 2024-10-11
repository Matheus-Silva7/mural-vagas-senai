import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormDataCompany from "./FormDataCompany";
import FormAdressCompany from "./FormAdressCompany";
import FormRegisterCompany from "./FormRegisterCompany";
import FormDescriptionCompany from "./FormDescriptionCompany";
import "./FormsSingup.css";
import { handleSubmit as apiSubmit } from "../../../services/Api";

const FormsSignup = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    senha: "",
    logo: "",
    cnpj: "",
    cep: "",
    rua: "",
    bairro: "",
    numero: "",
    cidade: "",
    estado: "",
    pais: "",
    ramo: "",
    site: "",
    quantidadeFuncionarios: 0,
    descricao: "",
    email: "",
    telefone: "",
    confirmSenha: "",
  });

  console.log(formData)

  const formTitles = [
    "Dados da empresa",
    "Descrição empresa",
    "Endereço da empresa",
    "Cadastro da empresa",
  ];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <FormDataCompany formData={formData} setFormData={setFormData} />;
      case 1:
        return <FormDescriptionCompany formData={formData} setFormData={setFormData} />;
      case 2:
        return <FormAdressCompany formData={formData} setFormData={setFormData} />;
      case 3:
        return <FormRegisterCompany formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  const handleFormSubmit = async () => {
    const response = await apiSubmit(formData);
    if (response) {
      navigate("/formularioenviado"); // Redireciona após o envio
    }
  };

  return (
    <div className="form-progress">
      <div className="form-container">
        <div className="progressbar">
          <div
            className="progress"
            style={{
              width: `${(page + 1) * 25}%`,
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
            <button className="buttonSubmit" onClick={handleFormSubmit}>
              Enviar
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

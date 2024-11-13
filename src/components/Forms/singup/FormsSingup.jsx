import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormDataCompany from "./FormDataCompany";
import FormAdressCompany from "./FormAdressCompany";
import FormRegisterCompany from "./FormRegisterCompany";
import FormDescriptionCompany from "./FormDescriptionCompany";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FormsSingup.css";
import { cadastroSubmit } from "../../../services/Api";
import axios from "axios";
import { MdKeyboardArrowLeft } from "react-icons/md";

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
    pais: "Brasil",
    ramo: "",
    site: "",
    quantidadeFuncionarios: "",
    descricao: "",
    email: "",
    telefone: "",
    confirmSenha: "",
  });

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

  const uploadLogoToCloudinary = async (file) => {
    const cloudinaryUrl = "https://api.cloudinary.com/v1_1/djrz51uc0/image/upload";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mural-vagas");

    try {
      const response = await axios.post(cloudinaryUrl, formData);
      return response.data.secure_url;
    } catch (error) {
      console.error("Erro ao fazer upload da imagem:", error);
      throw error;
    }
  };

  const handleFormSubmit = async () => {
    try {
      // Primeiro faz o upload do logo, caso ele tenha sido selecionado
      let logoLink = "";
      if (formData.logo) {
        logoLink = await uploadLogoToCloudinary(formData.logo);
      }

      if (formData.senha.length < 8) {
        toast.error("A senha deve conter 8 caracteres!");
        return
      }

      if (formData.senha !== formData.confirmSenha) {
        toast.error("A confimação da senha deve ser igual a senha!");
        return
      }

      const dataToSend = { ...formData, logo: { linkLogo: logoLink } };

      // Envia os dados de cadastro para o backend
      const response = await cadastroSubmit(dataToSend);
      if (response) {
        navigate("/formularioenviado");
      }
    } catch (error) {
      console.log("Erro ao enviar o formulário:", error);


      const errorData = error.response?.data;
      if (errorData && typeof errorData === "object") {
        const [campo, mensagem] = Object.entries(errorData)[0];
        toast.error(`${campo}: ${mensagem}`);
      } else {
        toast.error("Erro desconhecido ao enviar o formulário.");
      }
    }
  };

  return (
    <div className="form-progress">
      <button className='button-back' onClick={() => navigate(-1)}>
        <MdKeyboardArrowLeft />
      </button>
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
      <ToastContainer />
    </div>
  );
};

export default FormsSignup;

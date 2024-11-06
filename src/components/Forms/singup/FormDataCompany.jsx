import React from "react";
import InputTextSingup from "../../Inputs/inputTextSingup";
import "./FormsSingup.css";

const FormDataCompany = ({ formData, setFormData }) => {
  return (
    <form className="input-container">
      <InputTextSingup
        label={"Nome Empresa"}
        type={"text"}
        placeholder={"Informe o nome..."}
        value={formData.nomeEmpresa || ""}
        onChange={(event) =>
          setFormData({ ...formData, nomeEmpresa: event.target.value })
        }
      />
      <InputTextSingup
        label={"CNPJ"}
        type={"text"}
        placeholder={"Informe o CNPJ ..."}
        value={formData.cnpj || ""}
        onChange={(event) =>
          setFormData({ ...formData, cnpj: event.target.value || "" })
        }
      />
      <InputTextSingup
        label={"Ramo"}
        type={"text"}
        placeholder={"Informe o ramo ..."}
        value={formData.ramo || ""}
        onChange={(event) =>
          setFormData({ ...formData, ramo: event.target.value })
        }
      />
      <InputTextSingup
        label={"Logo"}
        type={"file"} // Altere para "file" para permitir o envio de imagens
        onChange={(event) =>
          setFormData({ ...formData, logo: event.target.files[0] })
        }
      />
    </form>
  );
};

export default FormDataCompany;

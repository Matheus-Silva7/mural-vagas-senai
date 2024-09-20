import React from "react";
import InputText from "../../Inputs/InputText";
import "./FormsSingup.css";

const FormDataCompany = ({ formData, setFormData }) => {
  return (
    <div className="input-container">
      <InputText
        label={"Nome Empresa"}
        type={"text"}
        placeholder={"Informe o nome..."}
        value={formData.nomeEmpresa}
        onChange={(event) =>
          setFormData({ ...formData, nomeEmpresa: event.target.value })
        }
      />
      <InputText
        label={"CNPJ"}
        type={"text"}
        placeholder={"Informe o CNPJ ..."}
        value={formData.cnpj}
        onChange={(event) =>
          setFormData({ ...formData, cnpj: event.target.value })
        }
      />
      <InputText
        label={"Ramo"}
        type={"text"}
        placeholder={"Informe o ramo ..."}
        value={formData.ramo}
        onChange={(event) =>
          setFormData({ ...formData, ramo: event.target.value })
        }
      />
      <InputText
        label={"Site"}
        type={"text"}
        placeholder={"Informe o site ..."}
        value={formData.site}
        onChange={(event) =>
          setFormData({ ...formData, site: event.target.value })
        }
      />
      <InputText
        label={"Quantidade de funcionários"}
        type={"text"}
        placeholder={"Informe a quantidade de funcionários..."}
        value={formData.quantidadeFuncionarios}
        onChange={(event) =>
          setFormData({
            ...formData,
            quantidadeFuncionarios: event.target.value,
          })
        }
      />
    </div>
  );
};

export default FormDataCompany;

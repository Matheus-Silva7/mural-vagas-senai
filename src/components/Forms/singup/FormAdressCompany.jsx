import React from "react";
import InputTextSingup from "../../Inputs/inputTextSingup";
import "./FormsSingup.css";

const FormAdressCompany = ({ formData, setFormData }) => {
  return (
    <div className="input-container">
      <InputTextSingup
        label={"CEP "}
        type={"text"}
        placeholder={"Informe o CEP..."}
        value={formData.cep}
        onChange={(event) =>
          setFormData({ ...formData, cep: event.target.value })
        }
      />
      <InputTextSingup
        label={"Logradouro"}
        type={"text"}
        placeholder={"Informe a Rua ..."}
        value={formData.logradouro}
        onChange={(event) =>
          setFormData({ ...formData, logradouro: event.target.value })
        }
      />
      <InputTextSingup
        label={"Bairro"}
        type={"text"}
        placeholder={"Informe o Bairro ..."}
        value={formData.bairro}
        onChange={(event) =>
          setFormData({ ...formData, bairro: event.target.value })
        }
      />
      <InputTextSingup
        label={"Número"}
        type={"number"}
        placeholder={"Informe o nº ..."}
        value={formData.numero}
        onChange={(event) =>
          setFormData({ ...formData, numero: event.target.value })
        }
      />
      <InputTextSingup
        label={"Complemento"}
        type={"text"}
        placeholder={"Informe o Complemento..."}
        value={formData.complemento}
        onChange={(event) =>
          setFormData({ ...formData, complemento: event.target.value })
        }
      />
    </div>
  );
};

export default FormAdressCompany;

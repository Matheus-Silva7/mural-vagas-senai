import React from "react";
import InputTextSingup from "../../Inputs/inputTextSingup";
import "./FormsSingup.css";
import TextArea from "../../Inputs/TextArea";

const FormDescriptionCompany = ({ formData, setFormData }) => {
  return (
    <div className="input-container">
      <InputTextSingup
        label={"Site"}
        type={"text"}
        placeholder={"Informe o site ..."}
        value={formData.site}
        onChange={(event) =>
          setFormData({ ...formData, site: event.target.value })
        }
      />
      <InputTextSingup
        label={"Quantidade de funcionários"}
        type={"number"}
        placeholder={"Informe a quantidade de funcionários..."}
        value={formData.quantidadeFuncionarios}
        onChange={(event) =>
          setFormData({
            ...formData,
            quantidadeFuncionarios: event.target.value,
          })
        }
      />
      <TextArea
        label={"Descrição"}
        placeholder={"Informe a Descrição..."}
        value={formData.descricao}
        onChange={(event) =>
          setFormData({
            ...formData,
            descricao: event.target.value,
          })
        }
      />
    </div>
  );
};

export default FormDescriptionCompany;

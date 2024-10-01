import React from "react";
import InputTextSingup from "../../Inputs/inputTextSingup";
import "./FormsSingup.css";
import { FaSearch } from "react-icons/fa";

const FormAdressCompany = ({ formData, setFormData }) => {
  return (
    <div className="input-container">
     <div className="search-cep">
     <InputTextSingup
        label={"CEP "}
        type={"text"}
        placeholder={"Informe o CEP..."}
        value={formData.cep}
        onChange={(event) =>
          setFormData({ ...formData, cep: event.target.value })
        }
      />
      <button className="buttonSubmit buttonCep"><FaSearch />
      </button>
     </div>
      <InputTextSingup
        label={"Rua"}
        type={"text"}
        placeholder={"Informe a Rua ..."}
        value={formData.rua}
        onChange={(event) =>
          setFormData({ ...formData, rua: event.target.value })
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
        label={"cidade"}
        type={"text"}
        placeholder={"Informe o cidade..."}
        value={formData.cidade}
        onChange={(event) =>
          setFormData({ ...formData, cidade: event.target.value })
        }
      />
      <InputTextSingup
        label={"estado"}
        type={"text"}
        placeholder={"Informe o estado..."}
        value={formData.estado}
        onChange={(event) =>
          setFormData({ ...formData, estado: event.target.value })
        }
      />
      <InputTextSingup
        label={"pais"}
        type={"text"}
        placeholder={"Informe o pais..."}
        value={formData.pais}
        onChange={(event) =>
          setFormData({ ...formData, pais: event.target.value })
        }
      />
    </div>
  );
};

export default FormAdressCompany;

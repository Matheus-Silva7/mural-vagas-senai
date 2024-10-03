import React from "react";
import InputTextSingup from "../../Inputs/inputTextSingup";
import "./FormsSingup.css";
import { FaSearch } from "react-icons/fa";
import { searchCep } from "../../../services/ApiCep";

const FormAdressCompany = ({ formData, setFormData }) => {
  return (
    <form className="input-container">
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
        <button
          onClick={async (event) => {
            event.preventDefault();
            try {
              const response = await searchCep(formData.cep);

              if (response && response.data) {
                const { logradouro, bairro, localidade, uf } = response.data;

                setFormData({
                  ...formData,
                  rua: logradouro || "",
                  bairro: bairro || "",
                  cidade: localidade || "",
                  estado: uf || "",
                });
              } else {
                console.log("Dados do CEP não encontrados.");
              }
            } catch (error) {
              console.error("Erro ao buscar CEP:", error);
            }
          }}
          className="buttonSubmit buttonCep"
        >
          <FaSearch />
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
        type={"text"}
        placeholder={"Informe o nº ..."}
        value={formData.numero}
        onChange={(event) =>
          setFormData({ ...formData, numero: event.target.value })
        }
      />
      <InputTextSingup
        label={"cidade"}
        type={"text"}
        placeholder={"Informe a cidade..."}
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
    </form>
  );
};

export default FormAdressCompany;

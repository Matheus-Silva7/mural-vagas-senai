import React from "react";
import InputTextSingup from "../../Inputs/inputTextSingup";
import "./FormsSingup.css";

const FormRegisterCompany = ({ formData, setFormData }) => {
  return (
    <form className="input-container">
      <InputTextSingup
        label={"Telefone"}
        type={"text"}
        placeholder={"Informe o telefone ..."}
        value={formData.telefone}
        onChange={(event) =>
          setFormData({ ...formData, telefone: event.target.value })
        }
      />
      <InputTextSingup
        label={"Email"}
        type={"email"}
        placeholder={"Informe o email..."}
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <InputTextSingup
        label={"Senha"}
        type={"password"}
        placeholder={"Crie uma senha de 8 caracteres ..."}
        value={formData.senha}
        onChange={(event) =>
          setFormData({ ...formData, senha: event.target.value })
        }
      />
      <InputTextSingup
        label={"Confirmar senha"}
        type={"password"}
        placeholder={"Confirmar senha ..."}
        value={formData.confirmSenha}
        onChange={(event) =>
          setFormData({ ...formData, confirmSenha: event.target.value })
        }
      />
    </form>
  );
};

export default FormRegisterCompany;

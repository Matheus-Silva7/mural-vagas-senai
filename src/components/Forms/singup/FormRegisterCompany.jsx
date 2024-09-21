import React from "react";
import InputText from "../../Inputs/InputText";
import "./FormsSingup.css";

const FormRegisterCompany = ({ formData, setFormData }) => {
  return (
    <div className="input-container">
      <InputText
        label={"Telefone"}
        type={"text"}
        placeholder={"Informe o telefone ..."}
        value={formData.telefone}
        onChange={(event) =>
          setFormData({ ...formData, telefone: event.target.value })
        }
      />
      <InputText
        label={"Email"}
        type={"email"}
        placeholder={"Informe o email..."}
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <InputText
        label={"Senha"}
        type={"password"}
        placeholder={"Crie uma senha de 8 caracteres ..."}
        value={formData.senha}
        onChange={(event) =>
          setFormData({ ...formData, senha: event.target.value })
        }
      />
      <InputText
        label={"Confirmar senha"}
        type={"password"}
        placeholder={"Confirmar senha ..."}
        value={formData.confirmSenha}
        onChange={(event) =>
          setFormData({ ...formData, confirmSenha: event.target.value })
        }
      />
    </div>
  );
};

export default FormRegisterCompany;

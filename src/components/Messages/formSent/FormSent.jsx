import React from "react";
import { Link } from "react-router-dom";
import "./FormSent.css"
import { FaCheck } from "react-icons/fa";

const FormSent = () => {
  return (
    <div className="content-forms">
      <div className="form-sent">
      <FaCheck className="icon"/>
        <h1>Formulário Enviado!</h1>
        <h2>Aguardando algum admin aceitar sua solicitação!</h2>
        <p>Aguarde ou tente realizar o <Link to={"/"}>Login</Link> novamente. </p>
      </div>
    </div>
  );
};

export default FormSent;

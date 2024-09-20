import React, { useState } from 'react'
import FormDataCompany from "./FormDataCompany"
import FormAdressCompany from "./FormAdressCompany"
import FormRegisterCompany from "./FormRegisterCompany"
import "./FormsSingup.css"

const FormsSingup = () => {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      nomeEmpresa: "",
      cnpj: "",
      ramo: "",
      site: "",
      quantidadeFuncionarios: "",
      cep: "",
      logradouro: "",
      bairro: "",
      numero: "",
      complemento: "",
      telefone: "",
      email: "",
      senha: "",
      confirmSenha: ""
    });
  
    console.log(formData.nomeEmpresa);
  

  const FormTitles = ["Dados da empresa", "Endereço da empresa", "Cadastro da empresa"]

  const PageDisplay = () => {
    if (page === 0) {
      return <FormDataCompany formData={formData} setFormData={setFormData}/>
    } else if (page === 1) {
      return <FormAdressCompany />
    } else {
      return <FormRegisterCompany />
    }
  }
  return (
    <div className='form-progress'>
      <div className="form-container">
      <div className="progressbar">
        <div className='progress' style={{width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%"}}></div>
      </div>
        <div className="header">
          <h1>{FormTitles[page]}</h1>
          <p>Somente empresas podem enviar candidaturas</p>
        </div>
        <div className="body">
          {PageDisplay()}
        </div>
        <div className="footer">
          <button className='buttonMain'
          style={{backgroundColor: page === 0 ? "#162E36" : "#072029", cursor: page === 0 ? "not-allowed" : "pointer"}}
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1)
            }}>Anterior</button>
          <button
          className={`buttonMain`}
            disabled={page == FormTitles.length - 1}
            onClick={() => {
              setPage((currPage) => currPage + 1)
            }}>Próximo</button>
        </div>
      </div>

    </div>
  )
}

export default FormsSingup
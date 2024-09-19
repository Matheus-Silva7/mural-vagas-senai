import React, { useState } from 'react'
import FormDataCompany from "./FormDataCompany"
import FormAdressCompany from "./FormAdressCompany"
import FormRegisterCompany from "./FormRegisterCompany"
import "./FormsSingup.css"

const FormsSingup = () => {

  const [page, setPage] = useState(0)

  const FormTitles = ["Dados da empresa", "Endereço da empresa", "Cadastro da empresa"]

  const PageDisplay = () => {
    if (page === 0) {
      return <FormDataCompany />
    } else if (page === 1) {
      return <FormAdressCompany />
    } else {
      return <FormRegisterCompany />
    }
  }
  return (
    <div className='form-progress'>
      <div className="progressbar"></div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">
          {PageDisplay()}
        </div>
        <div className="footer">
          <button className='buttonMain'
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
import React, { useState } from 'react'

const FormsSingup = () => {

  const [page, setPage] = useState(0)

  const FormTitles = ["Dados da empresa", "Endereço da empresa", "Cadastro da empresa"]
  
  const PageDisplay = () =>{
    return <h1>Hello</h1>
  }
  return (
    <div className='form-progress'>
      <div className="progressbar"></div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body"></div>
        <div className="footer">
          <button
            disabled={page == 0} 
            onClick={() => {
              setPage((currPage) => currPage - 1)
            }}>Prev</button>
          <button
            disabled={page == FormTitles.length - 1}
            onClick={() => {
              setPage((currPage) => currPage + 1)
            }}>Next</button>
        </div>
      </div>

    </div>
  )
}

export default FormsSingup
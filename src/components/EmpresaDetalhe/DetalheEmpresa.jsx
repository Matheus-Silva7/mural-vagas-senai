import React from 'react'
import "./DetalheEmpresa.css"
import LogoEmpresa from "../../assets/logo-empresa.png";
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom';

const EmpresaDetalhes = () => {
  const navigate = useNavigate();

  const location = useLocation(); // Hook para acessar os dados passados na navegação

  // Pegando os dados da vaga a partir do state
  const empresa = location.state?.empresa; 

console.log(empresa)
  return (
    <div className='empresa-content'>
      <button className="button-back" onClick={() => navigate(-1)}>
        <MdKeyboardArrowLeft />
      </button>
      <div className="empresa">
        <div className="topEmpresa">
        <img src={empresa.logo.linkLogo} alt="logo empresa" />
        <div className="top-right-empresa">
          <div className="texts">
            <h1>Empresa: {empresa.nomeEmpresa}</h1>
            <h2><span>Ramo:</span> {empresa.descricao.ramo}</h2>
            <h2>CNPJ: {empresa.cnpj}</h2>
          </div>
        </div>
        </div>
        <div className="bottomEmpresa">
          <div className="desc-empresa">
            <h3>Contatos da empresa</h3>
            <ul>
              <li><b>email:</b> {empresa.email}</li>
              <li><b>telefone:</b> {empresa.telefone}</li>
              <li><b>endereço:</b> {empresa.endereco.rua}, {empresa.endereco.numero}, {empresa.endereco.bairro}, {empresa.endereco.cidade} - {empresa.endereco.estado}, {empresa.endereco.pais} {empresa.endereco.cep}</li>
              <li><b>site:</b> {empresa.descricao.site}</li>
            </ul>
          </div>
          <div className="desc-empresa">
            <h3>Descrição da empresa</h3>
            <p> {empresa.descricao.descricao}</p>
            <ul>
              <li><b>Quantidade de funcionários:</b> {empresa.descricao.qntdFuncionarios} funcionários</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmpresaDetalhes

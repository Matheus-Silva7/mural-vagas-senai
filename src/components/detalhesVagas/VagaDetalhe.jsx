import React, { useState, useEffect } from "react";
import "./VagaDetalhe.css";
import LogoEmpresa from "../../assets/logo-empresa.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonMain from "../Buttons/ButtonMain/ButtonMain";
import { deleteVaga } from "../../services/ApiVaga";
import { toast, ToastContainer } from "react-toastify";

const VagaDetalhe = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const vaga = location.state?.vaga?.vaga;
  const empresaDetalhe = location.state?.empresa || {};
  const roles = JSON.parse(localStorage.getItem("roles")) || [];

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (vaga) {
      setPageLoading(false);
    }
  }, [vaga]);

  const formatarData = (data) => {
    if (!data) return "Data não disponível";
    const date = new Date(data);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const deletarVaga = async (id) => {
    try {
      setLoading(true);
      const response = await deleteVaga(id);
      if (response) {
        toast.success("Vaga excluída com sucesso!");
        navigate(-1);
      }
    } catch (error) {
      toast.error("Erro ao excluir a vaga!");
    } finally {
      setLoading(false);
    }
  };

  const handleEditVaga = () => {
    navigate("/empresa/criarVaga", { state: { vaga } });
  };

  if (!vaga) {
    return <div className="sem-vaga">Vaga não encontrada.</div>;
  }

  if (pageLoading) {
    return <div className="loading">Carregando detalhes da vaga...</div>;
  }

  return (
    <>
      <ToastContainer />
      <div className="vaga-content">
        <button className="button-back" onClick={() => navigate(-1)}>
          <MdKeyboardArrowLeft />
        </button>
        <div className="vaga">
          <div className="top-vaga">
            <img
              src={empresaDetalhe?.logo?.linkLogo || LogoEmpresa}
              alt="Logo da empresa"
            />
            <div className="right-top">
              <div className="titles">
                <h1 className="title-vaga">{vaga.nomeVaga || "Título não disponível"}</h1>
                <h2 className="n-empresa">{empresaDetalhe.nomeEmpresa || "Empresa desconhecida"}</h2>
              </div>
              <div className="data-vaga">
                <p>Publicado em {formatarData(vaga.dataPublicacao)}</p>
                <p>Expira em {formatarData(vaga.dataExpiracao)}</p>
              </div>
            </div>
          </div>
          <div className="infos-vaga">
            <div className="info">
              <span>Contratação</span>
              <p>{vaga.tipoContratacao?.tipo || "Não informado"}</p>
            </div>
            <div className="info">
              <span>Modelo de trabalho</span>
              <p>Presencial</p>
            </div>
            <div className="info">
              <span>Remuneração</span>
              <p>R$ {vaga.salario || "Não informado"}</p>
            </div>
            <div className="info">
              <span>Carga Horária</span>
              <p>{vaga.cargaSemanal || "Não informada"} horas semanais</p>
            </div>
            <div className="info">
              <span>Localização</span>
              <p>{empresaDetalhe?.endereco?.cidade || "Localização não informada"}, {empresaDetalhe?.endereco?.estado || "Localização não informada"}</p>
            </div>
          </div>
          <div className="desc-vaga">
            <div className="desc">
              <h3>Sobre a empresa</h3>
              <p>{empresaDetalhe.descricao.descricao}</p>
            </div>
            <div className="desc">
              <h3>Contatos empresa</h3>
              <ul>
                <li><b>Email:</b> {empresaDetalhe.email || "Não informado"}</li>
                <li><b>Telefone:</b> {empresaDetalhe.telefone || "Não informada"}</li>
                <li><b>Endereço:</b> {empresaDetalhe?.endereco ? `${empresaDetalhe.endereco.rua}, nº ${empresaDetalhe.endereco.numero}, ${empresaDetalhe.endereco.cidade} - ${empresaDetalhe.endereco.estado}, CEP: ${empresaDetalhe.endereco.cep}` : "Endereço não informado"}</li>
              </ul>
            </div>
            <div className="desc">
              <h3>Descrição da vaga</h3>
              <p>{vaga.descricao || "Descrição não disponível"}</p>
            </div>
            <div className="desc">
              <h3>Requisitos</h3>
              <p>{vaga.requisitos || "Não informado"}</p>
            </div>
            <div className="desc">
              <h3>Benefícios</h3>
              <p>{vaga.beneficios?.beneficio || "Não informado"}</p>
            </div>
            <div className="desc">
              <h3>Informações adicionais</h3>
              <ul>
                <li><b>Remuneração:</b> R$ {vaga.salario || "Não informado"}</li>
                <li><b>Carga horária semanal:</b> {vaga.cargaSemanal || "Não informada"} horas</li>
                <li><b>Quantidade de vagas:</b> {vaga.qtdVagasDisponiveis || "Não informado"} vagas</li>
              </ul>
            </div>
            <div className="desc">
              <h3>Como se candidatar</h3>
              <p>A candidatura deve ser feita {vaga.formaCandidatura?.formaCandidatura || "Não informado"}</p>
            </div>
          </div>
          </div>
      </div>
      <div className="botoes">
        {roles.includes("ROLE_ADMIN") && (
          <ButtonMain
            text={loading ? "Excluindo..." : "Excluir"}
            click={() => deletarVaga(vaga.vagaId)}
            disabled={loading}
          />
        )}
        {roles.includes("ROLE_EMPRESA") && !roles.includes("ROLE_ADMIN") && (
          <>
            <ButtonMain text="Editar" click={handleEditVaga} />
            <ButtonMain
              text={loading ? "Excluindo..." : "Excluir"}
              click={() => deletarVaga(vaga.vagaId)}
              disabled={loading}
            />
          </>
        )}
      </div>
    </>
  );
};

export default VagaDetalhe;

     
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

  // Pegando os dados da vaga a partir do state
  const vaga = location.state?.vaga?.vaga;

  // Recupera os roles do localStorage
  const roles = JSON.parse(localStorage.getItem("roles")) || []; // Garante que seja um array

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
      console.log("Resposta da API:", response);
      if (response) {
        toast.success("Vaga excluída com sucesso!");
        navigate(-1);
      }
    } catch (error) {
      console.error("Erro ao excluir a vaga:", error);
      toast.error("Erro ao excluir a vaga!");
    } finally {
      setLoading(false);
    }
  };

  console.log(vaga)

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
            <img src={LogoEmpresa} alt="logo empresa" />
            <div className="right-top">
              <div className="titles">
                <h1 className="title-vaga">{vaga.nomeVaga || "Título não disponível"}</h1>
                <h2 className="n-empresa">Liora</h2>
              </div>
              <div className="data-vaga">
                <p>Publicado em {formatarData(vaga.dataPublicacao)}</p>
                <p>Expira em {formatarData(vaga.dataExpiracao)}</p>
              </div>
            </div>
          </div>
          <div className="infos-vaga">
            <div className="info">
              <span>Posição</span>
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
              <p>{vaga.cargaSemanal || "Não informada"}</p>
            </div>
            <div className="info">
              <span>Localização</span>
              <p>São Paulo</p>
            </div>
          </div>
          <div className="desc-vaga">
            <div className="desc">
              <h3>Sobre a empresa</h3>
              <p>Lorem Ipsum is simply dummy text...</p>
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
                <li>
                  <b>Remuneração:</b> R$ {vaga.salario || "Não informado"}
                </li>
                <li>
                  <b>Carga horária semanal:</b> {vaga.cargaSemanal || "Não informada"} horas
                </li>
                <li>
                  <b>Quantidade de vagas:</b> {vaga.qtdVagasDisponiveis || "Não informado"} vagas
                </li>
              </ul>
            </div>
            <div className="desc">
              <h3>Como se candidatar</h3>
              <p>
                A candidatura deve ser feita{" "}
                {vaga.formaCandidatura?.formaCandidatura || "Não informado"}
              </p>
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
            <ButtonMain text="Editar" />
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



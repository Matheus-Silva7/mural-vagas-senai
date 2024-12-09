import React, { useState, useEffect } from "react";
import "./FormCriarVaga.css";
import InputText from "../../Inputs/InputText";
import ButtonSubmit from "../../Buttons/ButtonSubmit/ButtonSubmit";
import TextArea from "../../Inputs/TextArea";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { criarVaga, atualizarVaga } from "../../../services/ApiVaga";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormCriarVaga = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const vagaRecebida = location.state?.vaga;
  console.log("vaga recebida",vagaRecebida)

  const [formData, setFormData] = useState({
    nomeVaga: "",
    tipoContratacao: "",
    formaCandidatura: "",
    modeloTrabalho: "",
    descricao: "",
    requisitos: "",
    cargaSemanal: "",
    beneficios: "",
    salario: "",
    qtdVagasDisponiveis: "",
    dataExpiracao: "",
  });

  useEffect(() => {
    if (vagaRecebida) {
      setFormData({
        nomeVaga: vagaRecebida.nomeVaga || "",
        tipoContratacao: vagaRecebida.tipoContratacao?.tipo || "",
        formaCandidatura: vagaRecebida.formaCandidatura?.formaCandidatura || "",
        modeloTrabalho: vagaRecebida.modeloTrabalho || "",
        descricao: vagaRecebida.descricao || "",
        requisitos: vagaRecebida.requisitos || "",
        cargaSemanal: vagaRecebida.cargaSemanal || "",
        beneficios: vagaRecebida.beneficios?.beneficio || "", // Corrigido
        salario: vagaRecebida.salario || "",
        qtdVagasDisponiveis: vagaRecebida.qtdVagasDisponiveis || "",
        dataExpiracao: vagaRecebida.dataExpiracao?.slice(0, 10) || "",
      });
    }
  }, [vagaRecebida]);
  console.log(formData.formaCandidatura)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (vagaRecebida) {
       await atualizarVaga(vagaRecebida.vagaId, formData);
        toast.success("Vaga atualizada com sucesso!");
      } else {
        await criarVaga(formData);
        toast.success("Vaga criada com sucesso!");
        navigate("/empresa");
      }
    } catch (error) {
      toast.error("Erro ao processar a vaga!");
    }
  };

  return (
    <div className="form-criar">
      <button className="button-back">
        <Link to={"/empresa"}>
          <MdKeyboardArrowLeft />
        </Link>
      </button>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>{vagaRecebida ? "Editar Vaga" : "Criar nova vaga"}</h2>
          <p>Somente empresas aprovadas podem cadastrar vagas</p>
        </div>

        <InputText
          label="Vaga"
          type="text"
          placeholder="Informe o nome da vaga..."
          value={formData.nomeVaga}
          onChange={(e) =>
            setFormData({ ...formData, nomeVaga: e.target.value })
          }
        />

        <div className="double-input">
          <div className="input-select">
            <p>Tipo de contratação</p>
            <select
              name="tipoContratacao"
              value={formData.tipoContratacao}
              onChange={(e) =>
                setFormData({ ...formData, tipoContratacao: e.target.value })
              }
            >
              <option value="CLT">Efetivo</option>
              <option value="ESTAGIO">Estágio</option>
              <option value="PJ">PJ</option>
            </select>
          </div>

          <div className="input-select">
            <p>Modelo de trabalho</p>
            <select
              name="modeloTrabalho"
              value={formData.modeloTrabalho || ""}
              onChange={(e) =>
                setFormData({ ...formData, modeloTrabalho: e.target.value })
              }
            >
              <option value="presencial">Presencial</option>
              <option value="hibrido">Híbrido</option>
              <option value="home-office">Home-Office</option>
            </select>
          </div>
        </div>

        <div className="double-input">
          <InputText
            label="Forma de Candidatura"
            type="text"
            placeholder="Informe a candidatura..."
            value={formData.formaCandidatura}
            onChange={(e) =>
              setFormData({ ...formData, formaCandidatura: e.target.value })
            }
          />
          <InputText
            label="Carga Horária semanal"
            type="number"
            placeholder="Informe a carga horária..."
            value={formData.cargaSemanal}
            onChange={(e) =>
              setFormData({ ...formData, cargaSemanal: e.target.value })
            }
          />
        </div>

        <TextArea
          label={"Descrição da vaga"}
          placeholder={"Informe descrição da vaga..."}
          value={formData.descricao}
          onChange={(e) =>
            setFormData({ ...formData, descricao: e.target.value })
          }
        />

        <TextArea
          label={"Requisitos da vaga"}
          placeholder={"Informe requisitos da vaga..."}
          value={formData.requisitos}
          onChange={(e) =>
            setFormData({ ...formData, requisitos: e.target.value })
          }
        />

        <TextArea
          label={"Benefícios da vaga"}
          placeholder={"Informe benefícios da vaga..."}
          value={formData.beneficios}
          onChange={(e) =>
            setFormData({ ...formData, beneficios: e.target.value })
          }
        />

        <div className="double-input">
          <InputText
            label="Salário"
            type="number"
            placeholder="Informe o salário..."
            value={formData.salario}
            onChange={(e) =>
              setFormData({ ...formData, salario: e.target.value })
            }
          />
          <InputText
            label="Vagas disponíveis"
            type="number"
            placeholder="Nº de vagas disponíveis..."
            value={formData.qtdVagasDisponiveis}
            onChange={(e) =>
              setFormData({ ...formData, qtdVagasDisponiveis: e.target.value })
            }
          />
        </div>

        <InputText
          label="Data de expiração da vaga"
          type="date"
          value={formData.dataExpiracao}
          onChange={(e) =>
            setFormData({ ...formData, dataExpiracao: e.target.value })
          }
        />

        <ButtonSubmit text={vagaRecebida ? "Salvar Alterações" : "Enviar"} />
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormCriarVaga;

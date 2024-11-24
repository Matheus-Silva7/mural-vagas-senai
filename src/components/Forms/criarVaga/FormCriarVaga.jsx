import React, { useState } from "react";
import "./FormCriarVaga.css";
import InputText from "../../Inputs/InputText";
import ButtonSubmit from "../../Buttons/ButtonSubmit/ButtonSubmit";
import TextArea from "../../Inputs/TextArea";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { criarVaga, getTodasVagas } from "../../../services/ApiVaga";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const FormCriarVaga = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nomeVaga: "",
    tipoContratacao: "Efetivo",
    formaCandidatura: "",
    descricao: "",
    requisitos: "",
    cargaSemanal: "",
    beneficios: "", 
    salario: "",
    qtdVagasDisponiveis: "",
    dataExpiracao: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const vagaCriada = await criarVaga(formData);
      console.log("Vaga criada:", vagaCriada);
      toast.success("Vaga criada com sucesso!");
      const vagas = await getTodasVagas();
      navigate(-1)
      console.log(vagas)
    } catch (error) {
      console.error("Erro ao criar a vaga:", error);
      toast.error("Erro ao criar a vaga!");
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
          <h2>Criar nova vaga</h2>
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
              <option value="efetivo">Efetivo</option>
              <option value="estagio">Estágio</option>
              <option value="pj">PJ</option>
            </select>
          </div>

          <div className="input-select">
            <p>Modelo de trabalho</p>
            <select
              name="modeloTrabalho"
              value={formData.modeloTrabalho}
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
          placeholder="Informe a data de expiração..."
          value={formData.dataExpiracao}
          onChange={(e) =>
            setFormData({ ...formData, dataExpiracao: e.target.value })
          }
        />

        <ButtonSubmit text="Enviar" />
      </form>
      <ToastContainer/>
    </div>
  );
};

export default FormCriarVaga;

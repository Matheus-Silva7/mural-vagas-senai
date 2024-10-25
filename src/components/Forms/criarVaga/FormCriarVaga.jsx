import React from 'react';
import "./FormCriarVaga.css";
import InputText from '../../Inputs/InputText';
import ButtonSubmit from '../../Buttons/ButtonSubmit/ButtonSubmit';
import TextArea from '../../Inputs/TextArea';

const FormCriarVaga = () => {
  return (
    <div className="form-criar">
      <form>   
          <div>
          <h2>Criar nova vaga</h2>    
          <p>Somente empresas aprovadas podem cadastrar vagas</p>
          </div>

        <InputText
          label="Vaga"
          type="text"
          placeholder="Informe o nome da vaga..."
        />

        <div className="input-radio">
          <p>Tipo de contratação</p>
          <label>
            <input type="radio" name="tipoContratacao" value="efetivo" />
            Efetivo
          </label>
          <label>
            <input type="radio" name="tipoContratacao" value="estagio" />
            estagio
          </label>
          <label>
            <input type="radio" name="tipoContratacao" value="pj" />
            PJ
          </label>
        </div>

        <div className="double-input">
          <InputText
            label="Forma de Candidatura"
            type="text"
            placeholder="Informe a candidatura..."
          />
          <InputText
            label="Carga Horaria semanal"
            type="text"
            placeholder="Informe a carga horaria..."
          />
        </div>

        <TextArea label={"Descrição da vaga"} placeholder={"Informe descrição da vaga..."}/>

        <TextArea label={"Requisitos da vaga"} placeholder={"Informe requisitos da vaga..."}/>

        <div className="double-input">
          <InputText
            label="Salário"
            type="text"
            placeholder="Informe o salário..."
          />
          <InputText
            label="Vagas disponíveis"
            type="text"
            placeholder="Nº de vagas disponíveis..."
          />
        </div>

        <div className="input-radio">
          <p>Benefícios</p>
          <label>
            <input type="radio" name="tipoContratacao" value="vt" />
            Vale Transporte
          </label>
          <label>
            <input type="radio" name="tipoContratacao" value="vr" />
            Vale Refeição
          </label>
          <label>
            <input type="radio" name="tipoContratacao" value="convenio" />
            Convênio
          </label>
        </div>

        <InputText
          label="Data de expiração da vaga "
          type="date"
          placeholder="Informe a data de expiração..."
        />

        <ButtonSubmit text="Enviar" />
      </form>
    </div>
  );
};

export default FormCriarVaga;

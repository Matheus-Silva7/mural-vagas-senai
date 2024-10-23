import React from 'react'
import "./FormCriarVaga.css"
import InputText from '../../Inputs/InputText';
import ButtonSubmit from '../../Buttons/ButtonSubmit/ButtonSubmit';

const FormCriarVaga = () => {
  return (
    <div className="form-criar">
      <form>
        <div>
          <h2>Criar nova vaga</h2>
        </div>

        <InputText
          label="Vaga"
          type="text"
          placeholder="Informe o nome da vaga..."
        />

        <div className="double-input">
          <InputText
            label="Senha"
            type="password"
            placeholder="Insira sua senha..."
          />
        </div>


        <ButtonSubmit
          text={"Entrar"}
        />
      </form>
    </div>
  )
}

export default FormCriarVaga

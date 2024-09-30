import React, { useState, useEffect } from 'react';
import "./Inputs.css";

const InputDadosEmpresa = ({ label, type, value, onValueChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  useEffect(() => {
    setTempValue(value); // Sincroniza tempValue com o valor inicial ao abrir o modal
  }, [value]);

  const handleInputClick = () => {
    setIsModalOpen(true); // Abre o modal quando clica no input
  };

  const handleSave = () => {
    onValueChange(tempValue); // Atualiza o valor quando salva
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <div className="input-content color-text">
      <label>{label}</label>
      <input
        className="input-dados"
        type={type}
        value={value}
        disabled
        onClick={handleInputClick} // Modal é aberto ao clicar no input
      />

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Editar {label}</h3>
            <input
              type={type}
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
            />
            <button onClick={handleSave}>Salvar</button>
            <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputDadosEmpresa;

import React, { useState, useEffect } from "react";
import { Modal, Box, Button } from "@mui/material";
import "./Inputs.css";
import { FaEdit } from "react-icons/fa";

const InputDadosEmpresa = ({ label, type, value, onValueChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  const handleInputClick = () => {
    setIsModalOpen(true);
    console.log("clicouu");
  };

  const handleSave = () => {
    onValueChange(tempValue);
    setIsModalOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.tras",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="inputEdit">
      <div className="input-content color-text">
        <label>{label}</label>
        <input className="input-dados" type={type} value={value} disabled />

        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={style} > 
           <div className="modal-box">
           <h3 id="modal-title">Editar {label}</h3>
            <input
              type={type}
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              style={{ width: "100%", marginBottom: "20px" }}
            />
            <Button variant="contained" onClick={handleSave} sx={{ mr: 2 }}>
              Salvar
            </Button>
            <Button variant="outlined" onClick={() => setIsModalOpen(false)}>
              Cancelar
            </Button>
           </div>
          </Box>
        </Modal>
      </div>
      <button
        className="ButtonMain editButton"
        style={{ cursor: label === "Cnpj" ? "not-allowed" : "pointer" }}
        onClick={label === "Cnpj" ? null : handleInputClick}
      >
        <FaEdit />
      </button>
    </div>
  );
};

export default InputDadosEmpresa;

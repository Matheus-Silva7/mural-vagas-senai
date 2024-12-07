import React, { useState, useEffect } from "react";
import { Modal, Box, Button } from "@mui/material";

const ModalEditVaga = ({ vaga, open, onClose, onSave }) => {
  const [tempVaga, setTempVaga] = useState(vaga);

  useEffect(() => {
    setTempVaga(vaga); // Reseta os dados da vaga quando o modal for reaberto
  }, [vaga]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempVaga((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(tempVaga); // Passa os dados atualizados para o componente pai
    onClose(); // Fecha o modal
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.transparent",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <div className="modal-box">
          <h3>Editar Vaga</h3>
          <div>
            <label>Nome da Vaga</label>
            <input
              type="text"
              name="nomeVaga"
              value={tempVaga?.nomeVaga || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Remuneração</label>
            <input
              type="text"
              name="salario"
              value={tempVaga?.salario || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Descrição</label>
            <textarea
              name="descricao"
              value={tempVaga?.descricao || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Requisitos</label>
            <textarea
              name="requisitos"
              value={tempVaga?.requisitos || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Button variant="contained" onClick={handleSave}>Salvar</Button>
            <Button variant="outlined" onClick={onClose}>Cancelar</Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalEditVaga;

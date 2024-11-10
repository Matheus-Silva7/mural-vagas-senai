import axios from "axios";

const ip = "192.168.0.100";
const API_URL = `http://${ip}:8080`;

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const criarVaga = async (formData) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token não encontrado. Por favor, faça login.");
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

   
    const dataToSend = {
      nomeVaga: formData.nomeVaga,
      tipoContratacao: {
        tipo: formData.tipoContratacao,
      },
      formaCandidatura: {
        formaCandidatura: formData.formaCandidatura,
      },
      descricao: formData.descricao,
      requisitos: formData.requisitos,
      cargaSemanal: Number(formData.cargaSemanal),
      beneficios: {
        beneficio: formData.beneficios, 
      },
      salario: Number(formData.salario),
      qtdVagasDisponiveis: Number(formData.qtdVagasDisponiveis),
      dataExpiracao: `${formData.dataExpiracao}T22:47:24.903Z`,
    };

  
    const response = await api.post(`/vagas`, dataToSend, config);
    console.log("Vaga criada com sucesso:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar o formulário:", error);
    const errorData = error.response?.data || { message: "Erro desconhecido. Tente novamente mais tarde." };
    console.log("Detalhes do erro:", errorData);
    throw error;
  }
};

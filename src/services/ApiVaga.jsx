import axios from "axios";

const ip = "172.29.160.1";
const API_URL = `http://${ip}:8080`;

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

 const criarVaga = async (formData) => {
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

const getTodasVagas= async () => {
  try {
    const response = await api.get(`/vagas`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter as vagas:", error);
    const errorData = error.response?.data || { message: "Erro desconhecido. Tente novamente mais tarde." };
    console.log("Detalhes do erro:", errorData);
    throw error;
  }
};

const getOneVaga = async (vagaid) =>{
  try {
    const response = await api.get(`/vagas/${vagaid}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter a vaga:", error);
    const errorData = error.response?.data || { message: "Erro desconhecido. Tente novamente mais tarde." };
    console.log("Detalhes do erro:", errorData);
    throw error;
  }
}


export  {criarVaga, getTodasVagas, getOneVaga}
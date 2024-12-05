import axios from "axios";

const ip = "localhost";
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

const deleteVaga = async (vagaid) => {
  try {
    const token = localStorage.getItem("token");
    console.log("Token utilizado:", token); // Log do token
    if (!token) {
      throw new Error("Token não encontrado. Por favor, faça login.");
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.delete(`/vagas/${vagaid}`, config);
    
    return response;
  } catch (error) {
    console.error("Erro ao deletar a vaga:", error);
    const errorData = error.response?.data || { message: "Erro desconhecido. Tente novamente mais tarde." };
    console.log("Detalhes do erro:", errorData);
    throw error;
  }
};

const getVagasEmpresa = async (empresaId) =>{
  try {
    const response = await api.get(`/empresa/${empresaId}/vagas`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter a vaga:", error);
    const errorData = error.response?.data || { message: "Erro desconhecido. Tente novamente mais tarde." };
    console.log("Detalhes do erro:", errorData);
    throw error;
  }
}

const filtrarVagas = async (filtros) => {
  try {
 
    const params = new URLSearchParams();

    
    if (filtros.nomeVaga) params.append("nomeVaga", filtros.nomeVaga);
    if (filtros.salarioMin) params.append("salarioMin", filtros.salarioMin);
    if (filtros.salarioMax) params.append("salarioMax", filtros.salarioMax);
    if (filtros.dataPublicacao) params.append("dataPublicacao", filtros.dataPublicacao);
    if (filtros.page) params.append("page", filtros.page);
    if (filtros.size) params.append("size", filtros.size);

    const response = await api.get(`/vagas/filter?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao filtrar vagas:", error);
    const errorData = error.response?.data || { message: "Erro desconhecido. Tente novamente mais tarde." };
    console.log("Detalhes do erro:", errorData);
    throw error;
  }
};


export  {criarVaga, getTodasVagas, getOneVaga, deleteVaga, getVagasEmpresa, filtrarVagas}
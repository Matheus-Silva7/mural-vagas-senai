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
    if (!token) throw new Error("Token não encontrado. Por favor, faça login.");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const dataToSend = {
      nomeVaga: formData.nomeVaga,
      tipoContratacao: { tipo: formData.tipoContratacao },
      formaCandidatura: { formaCandidatura: formData.formaCandidatura },
     /*  modeloTrabalho: formData.modeloTrabalho, */
      descricao: formData.descricao,
      requisitos: formData.requisitos,
      cargaSemanal: Number(formData.cargaSemanal),
      beneficios: { beneficio: formData.beneficios },
      salario: Number(formData.salario),
      qtdVagasDisponiveis: Number(formData.qtdVagasDisponiveis),
      dataExpiracao: `${formData.dataExpiracao}T22:47:24.903Z`,
    };

    const response = await api.post(`/vagas`, dataToSend, config);
    console.log("Vaga criada com sucesso:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar vaga:", error);
    throw error.response?.data || { message: "Erro desconhecido." };
  }
};


const getTodasVagas = async () => {
  try {
    const response = await api.get(`/vagas`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar todas as vagas:", error);
    throw error.response?.data || { message: "Erro desconhecido." };
  }
};


const getOneVaga = async (vagaId) => {
  try {
    const response = await api.get(`/vagas/${vagaId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar vaga:", error);
    throw error.response?.data || { message: "Erro desconhecido." };
  }
};


const deleteVaga = async (vagaId) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token não encontrado. Por favor, faça login.");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await api.delete(`/vagas/${vagaId}`, config);
    console.log("Vaga deletada com sucesso!");
    return response;
  } catch (error) {
    console.error("Erro ao deletar vaga:", error);
    throw error.response?.data || { message: "Erro desconhecido." };
  }
};


const getVagasEmpresa = async (empresaId) => {
  try {
    const response = await api.get(`/empresa/${empresaId}/vagas`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar vagas da empresa:", error);
    throw error.response?.data || { message: "Erro desconhecido." };
  }
};


const filtrarVagas = async (filtros) => {
  try {
    const params = new URLSearchParams();

    if (filtros.nomeVaga) params.append("nomeVaga", filtros.nomeVaga);
    if (filtros.salarioMin) params.append("salarioMin", filtros.salarioMin);
    if (filtros.salarioMax) params.append("salarioMax", filtros.salarioMax);
    if (filtros.dataPublicacao) params.append("dataPublicacao", `${filtros.dataPublicacao}T00:00:00`);
    params.append("page", filtros.page || 0); // Valor padrão: 0
    params.append("size", filtros.size || 20); // Valor padrão: 20

    const response = await api.get(`/vagas/filter?${params.toString()}`);
    console.log("Filtros aplicados com sucesso:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao filtrar vagas:", error);
    throw error.response?.data || { message: "Erro desconhecido." };
  }
};

const atualizarVaga = async (vagaId, formData) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token não encontrado. Por favor, faça login.");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    console.log(formData  )


    const dataToSend = {
      vagaId,
      nomeVaga: formData.nomeVaga,
      tipoContratacao: {
        tipoContratacaoId: formData.tipoContratacao.tipoContratacaoId, 
        tipo: "CLT",
      },
      formaCandidatura: {
        formaCandidaturaId: vagaId, 
        formaCandidatura:  formData.formaCandidatura,
      },
      descricao: formData.descricao,
      requisitos: formData.requisitos,
      cargaSemanal: Number(formData.cargaSemanal),
      beneficios: {
        beneficioId: vagaId,
        beneficio: formData.beneficios,
      },
      salario: Number(formData.salario),
      qtdVagasDisponiveis: Number(formData.qtdVagasDisponiveis),
      dataExpiracao: `${formData.dataExpiracao}T22:47:24.903Z`, 
    };

    const response = await api.patch(`/vagas/${vagaId}`, dataToSend, config);
    console.log("Vaga atualizada com sucesso:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar vaga:", error);
    throw error.response?.data || { message: "Erro desconhecido." };
  }
};



export { criarVaga, getTodasVagas, getOneVaga, deleteVaga, getVagasEmpresa, filtrarVagas, atualizarVaga };

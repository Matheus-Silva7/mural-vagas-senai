import axios from "axios";
/* import jwt_decode from 'jwt-decode';
 */


const ip = "172.31.16.1";
const API_URL = `http://${ip}:8080`;

// Configuração base do Axios
const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

// Função para cadastro de empresa
const cadastroSubmit = async (formData) => {
  try {
    const dataToSend = {
      nomeEmpresa: formData.nomeEmpresa,
      senha: formData.senha,
      logo: { linkLogo: formData.logo.linkLogo },
      cnpj: formData.cnpj,
      endereco: {
        cep: formData.cep,
        rua: formData.rua,
        bairro: formData.bairro,
        numero: formData.numero,
        cidade: formData.cidade,
        estado: formData.estado,
        pais: formData.pais,
      },
      descricao: {
        ramo: formData.ramo,
        site: formData.site,
        qntdFuncionarios: Number(formData.quantidadeFuncionarios),
        descricao: formData.descricao,
      },
      email: formData.email,
      telefone: formData.telefone,
    };

    const response = await api.post(`/auth/cadastro/empresa`, dataToSend);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar o formulário:", error);
    const errorData = error.response?.data || { message: "Erro desconhecido. Tente novamente mais tarde." };
    console.log("Detalhes do erro:", errorData);
    throw error;
  }
};

// Função para login de empresa
const loginSubmit = async (loginForm) => {
  try {
    const responseLogin = await api.post(`/auth/login`, loginForm);
    const token = responseLogin.data;

    // Armazenamento do token no localStorage (ou sessionStorage)
    localStorage.setItem("token", token.token);

    console.log("Token recebido:", token.token);
    return token;
  } catch (error) {
    console.error("Erro ao enviar o formulário de login:", error);
    console.log("Detalhes do erro:", error.response?.data);
    throw error;
  }
};

// Função para obter dados da empresa usando o ID extraído do token
const getDadosEmpresa = async () => {
  try {
  
    const empresaId = 10


    const response = await api.get(`/empresa/${empresaId}`);
    console.log("Dados da empresa:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter os dados da empresa:", error);
    const errorData = error.response?.data || { message: "Erro desconhecido. Tente novamente mais tarde." };
    console.log("Detalhes do erro:", errorData);
    throw error;
  }
};

const updateEmpresa = async (updatedData) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token não encontrado");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const empresaId = 10;  // Certifique-se de que o ID está correto

    const response = await api.patch(`/empresa/${empresaId}`, updatedData, config);
    console.log("Dados atualizados com sucesso:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar os dados da empresa:", error);
    if (error.response) {
      console.log("Erro detalhado da resposta:", error.response.data);
    } else {
      console.log("Erro sem resposta:", error.message);
    }
    const errorData = error.response?.data || { message: "Erro desconhecido. Tente novamente mais tarde." };
    throw new Error(errorData.message);
  }
};


export { cadastroSubmit, loginSubmit, getDadosEmpresa,updateEmpresa };

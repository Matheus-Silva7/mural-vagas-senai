import axios from "axios";



const ip = "localhost";
const API_URL = `http://${ip}:8080`;


const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

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

const loginSubmit = async (loginForm) => {
  try {
    const responseLogin = await api.post(`/auth/login`, loginForm);
    const data = responseLogin.data; 

 
    localStorage.setItem("token", data.token);
    localStorage.setItem("id", data.userId);
    localStorage.setItem("roles", JSON.stringify(data.roles)); 

    console.log("Token recebido:", data.token);
    console.log("ID do usuário:", data.userId);
    console.log("Roles:", data.roles);

    return data; 
  } catch (error) {
    console.error("Erro ao enviar o formulário de login:", error);
    console.log("Detalhes do erro:", error.response?.data);
    throw error;
  }
};


const getDadosEmpresa = async (empresaId) => {
  try {
  

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

const updateEmpresa = async (updatedData, empresaId) => {
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


    const response = await api.patch(`/empresa/${empresaId}`, updatedData, config);
    

    console.log("Resposta da API:", response.data);
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

import axios from "axios";
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
    console.log(formData);
    const dataToSend = {
      nomeEmpresa: formData.nomeEmpresa,
      senha: formData.senha,
      logo: { linkLogo: formData.logo },
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
      autorizacao: null,
    };

    const response = await api.post(`/auth/cadastro/empresa`, dataToSend);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar o formulário", error);
    console.log("Detalhes do erro:", error.response?.data);
    alert("Ocorreu um erro ao enviar o formulário.");
    throw error;
  }
};

// Função para login de empresa
const loginSubmit = async (loginForm) => {
  try {
    const responseLogin = await api.post(`/auth/login`, loginForm);
    const token = responseLogin.data;

    // Armazenamento do token no localStorage (ou sessionStorage)
    localStorage.setItem("token", token);

    console.log("Token recebido:", token);
    return token;
  } catch (error) {
    console.error("Erro ao enviar o formulário de login:", error);
    console.log("Detalhes do erro:", error.response?.data);
    throw error;
  }
};

export { cadastroSubmit, loginSubmit };

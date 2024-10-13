import axios from "axios";
const ip = "192.168.100.126";

const API_URL = `http://${ip}:8080`;

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

    const response = await axios.post(
      `${API_URL}/auth/cadastro/empresa`,
      dataToSend,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao enviar o formulário", error);
    console.log("Detalhes do erro:", error.response?.data); 
    alert("Ocorreu um erro ao enviar o formulário.");
    throw error;
  }
};

const loginSubmit = async (loginForm) => {

  
  try {
    const responseLogin = await axios.post(`${API_URL}/auth/login`, loginForm, {
      headers: { "Content-Type": "application/json" },
    });

    const token = responseLogin.data

    console.log(token)
    return token
  } catch (error) {
    console.error("Erro ao enviar o formulário", error);
    console.log("Detalhes do erro:", error.response?.data); 
    alert(error.response?.data.toString());
    throw error;

  }
};

export { cadastroSubmit, loginSubmit };

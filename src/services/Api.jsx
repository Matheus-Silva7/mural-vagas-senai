import axios from "axios";
const ip = "192.168.0.105";

const API_URL = `http://${ip}:8080`;

const handleSubmit = async (formData) => {
  try {
    console.log(formData)
    const dataToSend = {
      nomeEmpresa: formData.nomeEmpresa,
      senha: formData.senha,
      logo: { linkLogo: formData.logo },
      cnpj: formData.cnpj, // Remove formatação, deixando apenas números
      endereco: {
        cep: formData.cep,
        rua: formData.rua,
        bairro: formData.bairro,
        numero: formData.numero,
        cidade: formData.cidade,
        estado: formData.estado,
        pais: formData.pais
      },
      descricao: {
        ramo: formData.ramo,
        site: formData.site,
        qntdFuncionarios: Number(formData.quantidadeFuncionarios), 
        descricao: formData.descricao
      },
      email: formData.email,
      telefone: formData.telefone,
      autorizacao: null 
    };

    const response = await axios.post(`${API_URL}/auth/cadastro/empresa`, dataToSend, {
      headers: { "Content-Type": "application/json" },
    });

    alert("Formulário enviado com sucesso!");
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar o formulário", error);
    console.log("Detalhes do erro:", error.response?.data); // Detalhes do erro, se houver
    alert("Ocorreu um erro ao enviar o formulário.");
    throw error;
  }
};

export { handleSubmit };

import axios from "axios";

const API_URL = "http://172.29.160.1:8080";

const handleSubmit = async (formData) => {
  try {
    // Construa o objeto de dados a ser enviado
    const dataToSend = {
      nomeEmpresa: formData.nomeEmpresa,
      senha: formData.senha,
      logo: {
        linkLogo: formData.logo
      },
      cnpj: formData.cnpj,
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

    // Faça a requisição POST
    const response = await axios.post(`${API_URL}/auth/cadastro/empresa`, dataToSend, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("Formulário enviado com sucesso!");
    return response.data; // Retorne os dados da resposta
  } catch (error) {
    console.error("Erro ao enviar o formulário", error);
    alert("Ocorreu um erro ao enviar o formulário.");
    // Você pode lançar o erro novamente se precisar manipulá-lo mais tarde
    throw error; 
  }
};

export { handleSubmit };

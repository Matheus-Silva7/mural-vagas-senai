  import axios from "axios";

  const ip = "192.168.0.100";
  const API_URL = `http://${ip}:8080`;

  // Configuração base do Axios
  const api = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type": "application/json" },
  });

  // Função para obter empresas
  const getEmpresas = async () => {
    try {
      const response = await api.get("/empresa");
      return response.data;
    } catch (error) {
      console.error("Erro ao obter empresas:", error);
      throw error;
    }
  };

  // Função para autorizar empresa
  const autorizarEmpresa = async (idEmpresa) => {
    try {
      const token = localStorage.getItem("token");  // Obtém o token de autorização
      if (!token) {
        throw new Error("Token não encontrado");
      }

      const config = {
        headers: {
          "Authorization": `Bearer ${token}`,  // Envia o token no cabeçalho Authorization
          "Content-Type": "application/json",
        },
      };

      // Requisição PATCH para autorizar a empresa
      const response = await api.patch(`/admin/autorizar/${idEmpresa}`, {}, config);
      console.log("Empresa autorizada com sucesso!", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao autorizar a empresa:", error);
      throw error;
    }
  };

  // Função para excluir empresa
  const excluirEmpresa = async (idEmpresa) => {
    try {
      const token = localStorage.getItem("token");  
      if (!token) {
        throw new Error("Token não encontrado");
      }
  
      const config = {
        headers: {
          "Authorization": `Bearer ${token}`,  
          "Content-Type": "application/json",
        },
      };
  
      // Requisição DELETE para excluir a empresa
      const response = await api.delete(`/empresa/${idEmpresa}`, config);
      console.log("Empresa excluída com sucesso!", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao excluir a empresa:", error);
      throw error;
    }
  };
  

  export { getEmpresas, autorizarEmpresa, excluirEmpresa };

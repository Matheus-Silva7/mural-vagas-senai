  import axios from "axios";

  const ip = "localhost";
  const API_URL = `http://${ip}:8080`;

  const api = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type": "application/json" },
  });


  const getEmpresasAceitar = async () => {
    try {
      const response = await api.get("/empresa/false");
      return response.data;
    } catch (error) {
      console.error("Erro ao obter empresas:", error);
      throw error;
    }
  };
  const getEmpresasAceitas = async () => {
    try {
      const response = await api.get("/empresa/true");
      return response.data;
    } catch (error) {
      console.error("Erro ao obter empresas:", error);
      throw error;
    }
  };

 
  const autorizarEmpresa = async (idEmpresa) => {
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

     
      const response = await api.patch(`/admin/autorizar/${idEmpresa}`, {}, config);
      console.log("Empresa autorizada com sucesso!", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao autorizar a empresa:", error);
      throw error;
    }
  };

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
  
      const response = await api.delete(`/empresa/${idEmpresa}`, config);
      console.log("Empresa excluída com sucesso!", response.data);
      return response;
    } catch (error) {
      console.error("Erro ao excluir a empresa:", error);
      throw error;
    }
  };
  

  export { getEmpresasAceitar, getEmpresasAceitas, autorizarEmpresa, excluirEmpresa };

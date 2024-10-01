import axios from "axios";

const API_URL = "http://192.168.0.102:8080"; //http://ip:port/

const handleSubmit = async () => {
  try {
    const response = await axios.post(`http://${API_URL}/empresa`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Formulário enviado com sucesso!");
    // Limpar ou redirecionar conforme necessário
  } catch (error) {
    console.error("Erro ao enviar o formulário", error);
    alert("Ocorreu um erro ao enviar o formulário.");
  }
};


export { handleSubmit };

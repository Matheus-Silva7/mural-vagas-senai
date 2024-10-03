import axios from "axios"

const searchCep = async (cep)=>{
try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    console.log(response)
    return response;
} catch (error) {
    console.log("erro:"+error)
}
}

export {searchCep}
import React, { useEffect, useState } from "react";
import InputDadosEmpresa from "../Inputs/InputDadosEmpresa";
import "./DadosEmpresa.css";
import { getDadosEmpresa } from "../../services/Api";

const DadosEmpresa = () => {
  const [empresa, setEmpresa] = useState({
    nome: "",
    cnpj: "",
    endereco: {
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
    },
    ramo: "",
    site: "",
    telefone: "",
    email: "",
    senhaAtual: "",
  });

  const fetchDadosEmpresas = async () => {
    try {
      const dadosEmpresa = await getDadosEmpresa(); // Chamada para obter os dados
      setEmpresa({
        nome: dadosEmpresa.nomeEmpresa || "",
        cnpj: dadosEmpresa.cnpj || "",
        endereco: {
          rua: dadosEmpresa.endereco?.rua || "",
          numero: dadosEmpresa.endereco?.numero || "",
          bairro: dadosEmpresa.endereco?.bairro || "",
          cidade: dadosEmpresa.endereco?.cidade || "",
          estado: dadosEmpresa.endereco?.estado || "",
        },
        ramo: dadosEmpresa.descricao?.ramo || "",
        site: dadosEmpresa.descricao?.site || "Não informado",
        telefone: dadosEmpresa.telefone || "",
        email: dadosEmpresa.email || "",
        senhaAtual: "", // Nunca preencha a senha atual diretamente por segurança
      });
    } catch (error) {
      console.error("Erro ao obter os dados da empresa:", error);
    }
  };

  useEffect(() => {
    fetchDadosEmpresas();
  }, []);

  // Função para atualizar os campos dinamicamente, inclusive para objetos aninhados
  const handleInputChange = (field, value, nestedField) => {
    if (nestedField) {
      setEmpresa((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
          [nestedField]: value,
        },
      }));
    } else {
      setEmpresa((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  return (
    <div className="content-dados">
      <InputDadosEmpresa
        label={"Nome"}
        type={"text"}
        value={empresa.nome}
        onValueChange={(newValue) => handleInputChange("nome", newValue)}
      />
      <InputDadosEmpresa
        label={"CNPJ"}
        type={"text"}
        value={empresa.cnpj}
        onValueChange={(newValue) => handleInputChange("cnpj", newValue)}
      />
      <InputDadosEmpresa
        label={"Rua"}
        type={"text"}
        value={empresa.endereco.rua}
        onValueChange={(newValue) => handleInputChange("endereco", newValue, "rua")}
      />
      <InputDadosEmpresa
        label={"Número"}
        type={"text"}
        value={empresa.endereco.numero}
        onValueChange={(newValue) => handleInputChange("endereco", newValue, "numero")}
      />
      <InputDadosEmpresa
        label={"Bairro"}
        type={"text"}
        value={empresa.endereco.bairro}
        onValueChange={(newValue) => handleInputChange("endereco", newValue, "bairro")}
      />
      <InputDadosEmpresa
        label={"Cidade"}
        type={"text"}
        value={empresa.endereco.cidade}
        onValueChange={(newValue) => handleInputChange("endereco", newValue, "cidade")}
      />
      <InputDadosEmpresa
        label={"Estado"}
        type={"text"}
        value={empresa.endereco.estado}
        onValueChange={(newValue) => handleInputChange("endereco", newValue, "estado")}
      />
      <InputDadosEmpresa
        label={"Ramo"}
        type={"text"}
        value={empresa.ramo}
        onValueChange={(newValue) => handleInputChange("ramo", newValue)}
      />
      <InputDadosEmpresa
        label={"Site"}
        type={"text"}
        value={empresa.site}
        onValueChange={(newValue) => handleInputChange("site", newValue)}
      />
      <InputDadosEmpresa
        label={"Telefone"}
        type={"text"}
        value={empresa.telefone}
        onValueChange={(newValue) => handleInputChange("telefone", newValue)}
      />
      <InputDadosEmpresa
        label={"Email"}
        type={"text"}
        value={empresa.email}
        onValueChange={(newValue) => handleInputChange("email", newValue)}
      />
      <InputDadosEmpresa
        label={"Senha Atual"}
        type={"password"}
        value={empresa.senhaAtual}
        onValueChange={(newValue) => handleInputChange("senhaAtual", newValue)}
      />
    </div>
  );
};

export default DadosEmpresa;

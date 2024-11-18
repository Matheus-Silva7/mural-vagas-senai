import React, { useEffect, useState } from "react";
import InputDadosEmpresa from "../Inputs/InputDadosEmpresa";
import { Button } from "@mui/material"; // Importando o componente Button do Material UI
import "./DadosEmpresa.css";
import { getDadosEmpresa, updateEmpresa } from "../../services/Api"; // Importando as funções necessárias

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
      cep: "",
      pais: "",
    },
    ramo: "",
    site: "",
    telefone: "",
    email: "",
    descricao: "",
    senhaAtual: "",
    logo: { linkLogo: "" }, // Adicionando logo
  });

  const fetchDadosEmpresas = async () => {
    try {
      const dadosEmpresa = await getDadosEmpresa();
      setEmpresa({
        nome: dadosEmpresa.nomeEmpresa || "",
        cnpj: dadosEmpresa.cnpj || "",
        endereco: {
          rua: dadosEmpresa.endereco?.rua || "",
          numero: dadosEmpresa.endereco?.numero || "",
          bairro: dadosEmpresa.endereco?.bairro || "",
          cidade: dadosEmpresa.endereco?.cidade || "",
          estado: dadosEmpresa.endereco?.estado || "",
          cep: dadosEmpresa.endereco?.cep || "",
          pais: dadosEmpresa.endereco?.pais || "",
        },
        descricao: dadosEmpresa.descricao?.descricao || "",
        ramo: dadosEmpresa.descricao?.ramo || "",
        site: dadosEmpresa.descricao?.site || "Não informado",
        qntdFuncionarios: dadosEmpresa.descricao?.qntdFuncionarios,
        telefone: dadosEmpresa.telefone || "",
        email: dadosEmpresa.email || "",
        senhaAtual: "", // Senha atual, que pode ser alterada no futuro
        logo: { linkLogo: dadosEmpresa.logo?.linkLogo || "" }, // Adicionando logo
      });
    } catch (error) {
      console.error("Erro ao obter os dados da empresa:", error);
    }
  };

  useEffect(() => {
    fetchDadosEmpresas();
  }, []);

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

 // Função para formatar os dados antes de enviar para a API
const handleSave = async () => {
  try {
    const updatedData = {
      nomeEmpresa: empresa.nome,
      senha: empresa.senhaAtual, // Senha atual
      logo: empresa.logo,
      cnpj: empresa.cnpj,
      endereco: {
        cep: empresa.endereco.cep,
        rua: empresa.endereco.rua,
        bairro: empresa.endereco.bairro,
        pais: empresa.endereco.pais,
        numero: empresa.endereco.numero,
        cidade: empresa.endereco.cidade,
        estado: empresa.endereco.estado,
      },
      descricao: {
        descricao: empresa.descricao,
        qntdFuncionarios: empresa.qntdFuncionarios,
        ramo: empresa.ramo,
        site: empresa.site,
      },
      email: empresa.email,
      telefone: empresa.telefone,
    };

    // Verificar os dados enviados
    console.log("Dados enviados para a API:", updatedData);

    // Enviar os dados para a API
    await updateEmpresa(updatedData); // Envia os dados formatados para a API
    alert("Dados atualizados com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar os dados:", error);
    alert("Falha ao atualizar os dados. Tente novamente.");
  }
};


  return (
    <div className="content-dados">
      {/* Campos de input para editar os dados da empresa */}
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
        label={"Descrição"}
        type={"text"}
        value={empresa.descricao}
        onValueChange={(newValue) => handleInputChange("descricao", newValue)}
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
        label={"Quantidade Funcionarios"}
        type={"number"}
        value={empresa.qntdFuncionarios}
        onValueChange={(newValue) => handleInputChange("qntdFuncionarios", newValue)}
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

      {/* Botão para salvar as alterações */}
      <Button variant="contained" onClick={handleSave}>
        Salvar Alterações
      </Button>
    </div>
  );
};

export default DadosEmpresa;

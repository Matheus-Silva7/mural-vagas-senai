// App.js
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./Routes/Signin";
import Singup from "./Routes/Singup";
import "./App.css";
import SentMessage from "./Routes/SentMessage";
import Empresa from "./Routes/Empresa";
import EmpresaDados from "./Routes/EmpresaDados";
import DetalhesVaga from "./Routes/DetalhesVaga";
import CriarVaga from "./Routes/CriarVaga";
import Admin from "./Routes/Admin";
import AdminEmpresas from "./Routes/AdminEmpresas";
import AdminVaga from "./Routes/AdminVaga";
import EmpresaDetalhes from "./Routes/EmpresaDetalhes";
import UserPage from "./Routes/UserPage";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`container ${theme}`}>
      <Routes>
        <Route path="/login" element={<Signin theme={theme} setTheme={setTheme} />} />
        <Route path="/" element={<UserPage theme={theme} setTheme={setTheme} />}/> 
        <Route path="/cadastro" element={<Singup theme={theme} setTheme={setTheme} />} />
        <Route path="/formularioenviado" element={<SentMessage theme={theme} setTheme={setTheme} />} />
        <Route path="/empresa" element={<Empresa theme={theme} setTheme={setTheme} />}/>
        <Route path="/vagaDetalhe" element={<DetalhesVaga theme={theme} setTheme={setTheme} />}/>
        <Route path="/empresa/dados" element={<EmpresaDados theme={theme} setTheme={setTheme} />}/>
        <Route path="/empresa/criarVaga" element={<CriarVaga theme={theme} setTheme={setTheme} />}/> 
        <Route path="/admin" element={<Admin theme={theme} setTheme={setTheme} />}/> 
        <Route path="/admin/empresas" element={<AdminEmpresas theme={theme} setTheme={setTheme} />}/> 
        <Route path="/admin/empresaDetalhe" element={<EmpresaDetalhes theme={theme} setTheme={setTheme} />}/> 
        <Route path="/admin/vagas" element={<AdminVaga theme={theme} setTheme={setTheme} />}/> 
       
      </Routes>
    </div>
  );
}

export default App;

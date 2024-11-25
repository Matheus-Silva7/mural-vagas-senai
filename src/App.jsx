import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Signin from "./Routes/Signin";
import Singup from "./Routes/Singup";
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
import VagasUser from "./Routes/VagasUser";
import ForbiddenPage from "./Routes/ForbiddenPage";
import UnauthorizedPage from "./Routes/UnauthorizedPage";

function ProtectedRoute({ children, roleRequired }) {
  const roles = JSON.parse(localStorage.getItem("roles") || "[]");
  const primaryRole = roles[0] || null; // Garante um valor padrão

  if (!roles.length) {
    // Se o usuário não está logado, redireciona para UnauthorizedPage
    return <Navigate to="/unauthorized" replace />;
  }

  if (roleRequired && primaryRole !== roleRequired) {
    // Logado, mas sem a role necessária, redireciona para ForbiddenPage
    return <Navigate to="/forbidden" replace />;
  }

  return children;
}

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`container ${theme}`}>
      <Routes>
        {/* Rotas para usuários com a role "ROLE_ADMIN" */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute roleRequired="ROLE_ADMIN">
              <Admin theme={theme} setTheme={setTheme} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/empresas"
          element={
            <ProtectedRoute roleRequired="ROLE_ADMIN">
              <AdminEmpresas theme={theme} setTheme={setTheme} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/empresaDetalhe"
          element={
            <ProtectedRoute roleRequired="ROLE_ADMIN">
              <EmpresaDetalhes theme={theme} setTheme={setTheme} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/vagas"
          element={
            <ProtectedRoute roleRequired="ROLE_ADMIN">
              <AdminVaga theme={theme} setTheme={setTheme} />
            </ProtectedRoute>
          }
        />

        {/* Rotas para usuários com a role "ROLE_EMPRESA" */}
        <Route
          path="/empresa"
          element={
            <ProtectedRoute roleRequired="ROLE_EMPRESA">
              <Empresa theme={theme} setTheme={setTheme} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/empresa/dados"
          element={
            <ProtectedRoute roleRequired="ROLE_EMPRESA">
              <EmpresaDados theme={theme} setTheme={setTheme} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/empresa/criarVaga"
          element={
            <ProtectedRoute roleRequired="ROLE_EMPRESA">
              <CriarVaga theme={theme} setTheme={setTheme} />
            </ProtectedRoute>
          }
        />

        {/* Rotas acessíveis a todos os usuários */}
        <Route path="/" element={<UserPage theme={theme} setTheme={setTheme} />} />
        <Route path="/forbidden" element={<ForbiddenPage theme={theme} setTheme={setTheme} />} />
        <Route path="/unauthorized" element={<UnauthorizedPage theme={theme} setTheme={setTheme} />} />
        <Route path="/vagas" element={<VagasUser theme={theme} setTheme={setTheme} />} />
        <Route path="/login" element={<Signin theme={theme} setTheme={setTheme} />} />
        <Route path="/cadastro" element={<Singup theme={theme} setTheme={setTheme} />} />
        <Route path="/formularioenviado" element={<SentMessage theme={theme} setTheme={setTheme} />} />
        <Route path="/vagaDetalhe" element={<DetalhesVaga theme={theme} setTheme={setTheme} />} />
      </Routes>
    </div>
  );
}

export default App;

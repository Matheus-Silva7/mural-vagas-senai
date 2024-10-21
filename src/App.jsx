// App.js
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./Routes/Signin";
import Singup from "./Routes/Singup";
import "./App.css";
import SentMessage from "./Routes/SentMessage";
import Empresa from "./Routes/Empresa";
import EmpresaDados from "./Routes/EmpresaDados";
import DetalhesVaga from "./Routes/detalhesVaga";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`container ${theme}`}>
      <Routes>
        <Route path="/" element={<Signin theme={theme} setTheme={setTheme} />} />
        <Route path="/cadastro" element={<Singup theme={theme} setTheme={setTheme} />} />
        <Route path="/formularioenviado" element={<SentMessage theme={theme} setTheme={setTheme} />} />
        <Route path="/empresa" element={<Empresa theme={theme} setTheme={setTheme} />}/>
        <Route path="/empresa/vaga" element={<DetalhesVaga theme={theme} setTheme={setTheme} />}/>
        <Route path="/empresa/dados" element={<EmpresaDados theme={theme} setTheme={setTheme} />}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;

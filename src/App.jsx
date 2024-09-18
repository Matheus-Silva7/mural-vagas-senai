// App.js
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./Routes/Signin";
import Singup from "./Routes/Singup";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`container ${theme}`}>
      <Routes>
        <Route path="/" element={<Signin theme={theme} setTheme={setTheme} />} />
        <Route path="/cadastro" element={<Singup theme={theme} setTheme={setTheme} />} />
      </Routes>
    </div>
  );
}

export default App;

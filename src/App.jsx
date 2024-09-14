// App.js
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./Routes/Signin";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`container ${theme}`}>
      <Routes>
        <Route path="/" element={<Signin theme={theme} setTheme={setTheme} />} />
      </Routes>
    </div>
  );
}

export default App;

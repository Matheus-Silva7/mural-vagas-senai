import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Singin from "./Routes/Signin"


function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`container ${theme}`}>
      <Routes>
        <Route path="/" element={<Singin theme={theme} setTheme={setTheme}/>}/>
      </Routes>
    </div>
  );
}

export default App;

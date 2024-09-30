import React from 'react'
import { FaMoon, FaSun } from "react-icons/fa";
import "./ToggleMode.css"

const ToggleMode = ({ theme, setTheme }) => {

  const toggle_mode = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <div className="theme-button" onClick={() => toggle_mode()}>
      <FaSun size={30} className={`iconSun ${theme}`} />
      <FaMoon size={30} className={`iconMoon ${theme}`} />
    </div>
  )
}

export default ToggleMode

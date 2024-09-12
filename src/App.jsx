import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {

  const [theme, setTheme] = useState('dark')

  return (
    <div className={`container ${theme}`}> 

     <NavBar theme={theme} setTheme={setTheme}/>
    </div>
    
  )
}

export default App

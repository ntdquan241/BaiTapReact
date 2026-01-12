import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProDuct from './components/ProDuctCard.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ProDuct></ProDuct>
  )
}

export default App

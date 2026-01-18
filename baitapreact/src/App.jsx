import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProDuct from './components/ProDuctCard.jsx'
import Button from './components/Button.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{justifyContent:'center', display:'flex', marginTop:'50px', gap:'20px'}}>
      <ProDuct></ProDuct>
      <ProDuct></ProDuct>
      <ProDuct></ProDuct>
      <div>
      <Button type="primary">Primary Button</Button>
      <Button type="secondary">Secondary Button</Button>
      <Button type="danger">Danger Button</Button>
      </div>
    </div>

    // <Button></Button>
    
  )
}

export default App

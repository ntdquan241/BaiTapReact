import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProDuct from './components/ProDuctCard.jsx'
import Button from './components/Button.jsx'
import Alert from './components/Alert.jsx'
import LoginForm from './components/LoginForm.jsx'
import ProductList from './components/ProductList.jsx'
function App() {
  const [count, setCount] = useState(0)
  const [showAlert, setShowAlert] = useState("success");
  const [showLogin, setShowLogin] = useState(false);
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
      <div>
      <button onClick={() => setShowAlert("success")}>success</button>
      <button onClick={() => setShowAlert("error")}>error</button>
      <button onClick={() => setShowAlert("warning")}>warning</button>
      <Alert 
       
        text={`This is a ${showAlert} alert message.`}
         type={showAlert}>
      </Alert>
      </div>
      <div className="app-container" style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Trang chủ React</h1>
      <p>Bấm nút bên dưới để đăng nhập</p>

      <button 
        style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer' }}
        onClick={() => setShowLogin(true)} // 1. Bấm nút -> set thành true
      >
        Mở Form Đăng Nhập
      </button>

      {/* 2. Logic điều kiện: Nếu showLogin là true thì mới vẽ Form */}
      {showLogin === true && (
        <LoginForm onClose={() => setShowLogin(false)} /> 
      )}

    </div>
    <div>
    <ProductList></ProductList>
    </div>
    </div>

    // <Button></Button>
    
  )
}

export default App

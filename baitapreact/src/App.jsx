import { useState } from 'react';
import './App.css';

// --- IMPORT CÁC COMPONENT CỦA BẠN ---
// Lưu ý: Đảm bảo tên file và đường dẫn chính xác
import ProDuct from './components/ProDuctCard.jsx'; 
import Button from './components/Button.jsx';
import Alert from './components/Alert.jsx';
import LoginForm from './components/LoginForm.jsx';
import ProductList from './components/ProductList.jsx';

// =================================================================
// 1. TẠO CÁC BÀI TẬP NHỎ (SUB-COMPONENTS)
// =================================================================

// Bài 1: Hiển thị 3 sản phẩm
function Bai1_ProductCard() {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <ProDuct />
      <ProDuct />
      <ProDuct />
    </div>
  );
}

// Bài 2: Các loại Button
function Bai2_Button() {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <Button type="primary">Primary Button</Button>
      <Button type="secondary">Secondary Button</Button> {/* Lưu ý: Bạn chưa CSS cho secondary */}
      <Button type="danger">Danger Button</Button>
      <Button type="success">Success Button</Button>
    </div>
  );
}

// Bài 3: Alert (Mang logic state vào đây cho gọn App chính)
function Bai3_Alert() {
  const [showAlert, setShowAlert] = useState("success");
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setShowAlert("success")}>Success</button>
        <button onClick={() => setShowAlert("error")}>Error</button>
        <button onClick={() => setShowAlert("warning")}>Warning</button>
      </div>
      
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <Alert 
          type={showAlert} 
          text={`This is a ${showAlert} alert message.`} 
        />
      </div>
    </div>
  );
}

// Bài 4: Login Form (Mang logic state vào đây)
function Bai4_Login() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Trang chủ React</h1>
      <p>Bấm nút bên dưới để đăng nhập</p>

      <button 
        style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer' }}
        onClick={() => setShowLogin(true)}
      >
        Mở Form Đăng Nhập
      </button>

      {/* Hiển thị Form nếu state là true */}
      {showLogin && (
        <LoginForm onClose={() => setShowLogin(false)} /> 
      )}
    </div>
  );
}

// Bài 5: Product List Responsive
function Bai5_Responsive() {
  return <ProductList />;
}

// =================================================================
// 2. COMPONENT CHÍNH (APP)
// =================================================================

function App() {
  // State để lưu bài hiện tại đang chọn (Mặc định là bài 1)
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="app-container" style={{ padding: '20px' }}>
      
      {/* --- MENU ĐIỀU HƯỚNG --- */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => setActiveTab(1)} disabled={activeTab === 1}>Bài 1: Product</button>
        <button onClick={() => setActiveTab(2)} disabled={activeTab === 2}>Bài 2: Button</button>
        <button onClick={() => setActiveTab(3)} disabled={activeTab === 3}>Bài 3: Alert</button>
        <button onClick={() => setActiveTab(4)} disabled={activeTab === 4}>Bài 4: Login</button>
        <button onClick={() => setActiveTab(5)} disabled={activeTab === 5}>Bài 5: Responsive</button>
      </div>

      <hr style={{ marginBottom: '30px', opacity: 0.3 }} />

      {/* --- KHU VỰC HIỂN THỊ NỘI DUNG --- */}
      <div className="content-area">
        {activeTab === 1 && <Bai1_ProductCard />}
        {activeTab === 2 && <Bai2_Button />}
        {activeTab === 3 && <Bai3_Alert />}
        {activeTab === 4 && <Bai4_Login />}
        {activeTab === 5 && <Bai5_Responsive />}
      </div>

    </div>
  );
}

export default App;
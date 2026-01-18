// src/components/LoginForm.jsx
import { useState } from 'react';
import './LoginForm.css';

// Props: onClose là hàm để tắt form khi bấm nút X
function LoginForm({ onClose }) {
  // State lưu dữ liệu người dùng nhập
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Hàm xử lý khi bấm nút Login
  const handleSubmit = (event) => {
    event.preventDefault(); // QUAN TRỌNG: Chặn trang web tải lại (F5)
    console.log("Đăng nhập với:", username, password);
    alert(`Xin chào ${username}!`);
    onClose(); // Đăng nhập xong thì đóng form
  };

  return (
    <div className="modal-overlay">
      <form className="login-form" onSubmit={handleSubmit}>
        
        {/* Nút đóng */}
        <button type="button" className="btn-close" onClick={onClose}>
          &times;
        </button>

        <h2 style={{ textAlign: 'center' }}>Đăng Nhập</h2>

        {/* Input Username */}
        <div className="form-group">
          <label>Username</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Nhập tên..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Input Password */}
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Nhập mật khẩu..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-login">
          LOGIN
        </button>

      </form>
    </div>
  );
}

export default LoginForm;
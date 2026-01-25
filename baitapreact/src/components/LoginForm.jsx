
import { useState } from 'react';
import './LoginForm.css';


function LoginForm({ onClose }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Đăng nhập với:", username, password);
    alert(`Xin chào ${username}!`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <form className="login-form" onSubmit={handleSubmit}>
        
       
        <button type="button" className="btn-close" onClick={onClose}>
          &times;
        </button>

        <h2 style={{ textAlign: 'center' }}>Đăng Nhập</h2>

   
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
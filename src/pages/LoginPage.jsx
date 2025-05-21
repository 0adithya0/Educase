import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/account');
  };

  return (
    <div className="mobile-wrapper">
    <div className="login-container">
      <div className="login-content">
        <h1>Signin to your<br />PopX account</h1>
        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input type="email" placeholder="Enter email address" className="form-input" readOnly />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input type="password" placeholder="Enter password" className="form-input" readOnly />
        </div>

        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;

import { useNavigate } from 'react-router-dom';
import './HomePage.css';
function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="mobile-wrapper">
    <div className="container">
      <div className="content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
        <button className="primary-btn" onClick={() => navigate('/register')}>Create Account</button>
        <button className="secondary-btn" onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
    </div>
  );
}

export default HomePage;

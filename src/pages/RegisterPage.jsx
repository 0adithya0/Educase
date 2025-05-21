import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

function RegisterPage() {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/account');
  };

  return (
    <div className="mobile-wrapper">
    <div className="register-container">
      <h1>Create your<br />PopX account</h1>

      <form className="register-form">
        <div className="form-group">
          <label>Full Name<span>*</span></label>
          <input type="text" value="Marry Doe" readOnly />
        </div>

        <div className="form-group">
          <label>Phone number<span>*</span></label>
          <input type="text" value="Marry Doe" readOnly />
        </div>

        <div className="form-group">
          <label>Email address<span>*</span></label>
          <input type="email" value="Marry Doe" readOnly />
        </div>

        <div className="form-group">
          <label>Password<span>*</span></label>
          <input type="password" value="Marry Doe" readOnly />
        </div>

        <div className="form-group">
          <label>Company name</label>
          <input type="text" value="Marry Doe" readOnly />
        </div>

        <div className="form-group radio-group">
          <label>Are you an Agency?<span>*</span></label>
          <div className="radio-options">
            <label><input type="radio" checked readOnly /> Yes</label>
            <label><input type="radio" readOnly /> No</label>
          </div>
        </div>

        <button type="button" onClick={handleCreateAccount}>Create Account</button>
      </form>
    </div>
    </div>
  );
}

export default RegisterPage;

import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const handleSignUpLink = () => {
    navigate('/register');
  };
  {
    return (
      <div className="login-form-full">
        <form className="login-form">
          <input type="text" placeholder="Username / E-Mail" required />
          <input type="password" placeholder="Password" required />
        </form>
        <div className="login-button-div">
          <button type="submit">Log In</button>
        </div>
        <div className="signup-button-div">
          <a href=""></a>
          <button type="button" onClick={handleSignUpLink}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

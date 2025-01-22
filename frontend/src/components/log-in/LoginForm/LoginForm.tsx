import "@/assets/main.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const handleSignUpLink = (): void => {
    navigate("/user-registration-form-page");
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
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>
        <div className="signup-button-div">
          <a href=""></a>
          <button type="button" onClick={handleSignUpLink}>
            Sign Up
          </button>
          <a href="/user-registration-form-page" className="signup-account">
            Don't have an Account?
          </a>
        </div>
      </div>
    );
  }
}

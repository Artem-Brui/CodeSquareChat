import "@/assets/main.css";

export default function LoginForm() {
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
          <button type="button">Sign Up</button>
          <a href="#" className="signup-account">
            Don't have an Account?
          </a>
        </div>
      </div>
    );
  }
}


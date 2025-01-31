import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserIdFromCookie } from "../../services/getUserId";
import useUserData from "../../customHooks/useUserData";


export default function LoginForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { updateUserData } = useUserData()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // POST
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await fetch(
        "http://localhost:5007/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
          credentials: "include",
        }
      );
      const userData = await loginResponse.json();

      updateUserData(userData);

      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Login failed! Please try again."
      );
    }
  };

  return (
    <div className="login-form-full">
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Username / E-Mail"
          value={formValues.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleInputChange}
          required
        />
        <div className="login-button-div">
          <button type="submit" className="login-button">
            Log In
          </button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <div className="signup-button-div">
        <button
          type="button"
          className="signup-button"
          onClick={() => navigate("/register")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

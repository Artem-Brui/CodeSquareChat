import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserData from "../../customHooks/useUserData";
import { SERVER_HOST } from "../../services/Hosts";

export default function LoginForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { updateUserData, updateTokenVerify, isTokenVerifed } = useUserData();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const DBResponse = await fetch(`${SERVER_HOST}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
        credentials: "include",
      });
      const response = await DBResponse.json();
      const { userData, isTokenVerif } = response;

      if (!DBResponse.ok) {
        console.error(new Error("LogIn wasn't sucessfull!"))
      }
      
      localStorage.setItem("userId", userData._id);

      updateUserData(userData);
      updateTokenVerify(isTokenVerif);

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
          placeholder="E-Mail"
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

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="login-button-div">
          <button type="submit" className="login-button">
            Log In
          </button>
        </div>
        <div className="signup-button-div">
          <button
            type="button"
            className="signup-button"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

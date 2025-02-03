import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from './LoadingSpinner.jsx';
import api from '../../../config/api';

export default function LoginForm() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post('/users/login', formValues);
      const token = response.data.token;
      localStorage.setItem('authToken', token);

      setTimeout(() => {
        setIsLoading(false);
        navigate('/dashboard');
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(
        error.response?.data?.message || 'Login failed! Please try again.'
      );
    }
  };

  return (
    <div className="login-form-full">
      {isLoading ? (
        <div className="loading-container">
          <LoadingSpinner />
          <p className="logging-in-message">Logging in...</p>
        </div>
      ) : (
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
          <div className="login-button-div">
            <button type="submit" className="login-button">
              Log In
            </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      )}
      <div className="signup-button-div">
        <button
          type="button"
          className="signup-button"
          onClick={() => navigate('/register')}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../config/api';

export default function LoginForm() {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

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
            const response = await api.post('/users/login', formValues); // API-Anfrage an das Backend
            const token = response.data.token;
            localStorage.setItem('authToken', token);
            navigate('/dashboard');
        } catch (error) {
            setErrorMessage(
                error.response?.data?.message || 'Login failed! Please try again.'
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
                    <button type="submit" className="login-button">Log In
                    </button>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
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

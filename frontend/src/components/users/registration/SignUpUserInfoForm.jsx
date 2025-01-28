import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpUserInfoForm() {
    const [condition, setConditionChecked] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [birthdate, setBirthdate] = useState('');
    const [isOlderThan18, setIsOlderThan18] = useState(false);
    const [formValues, setFormValues] = useState({
        username: '',
        displayName: '',
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogInLink = (e) => {
        e.preventDefault();
        if (!submitDisabled) {
            navigate('/dashboard');
        }
    };

    // Thsi will chekc if all field are valid
    useEffect(() => {
        const { username, displayName, email, password } = formValues;
        if (
            condition &&
            isOlderThan18 &&
            username &&
            displayName &&
            email &&
            password.length >= 10
        ) {
            setSubmitDisabled(false);
        } else {
            setSubmitDisabled(true);
        }
    }, [condition, isOlderThan18, formValues]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleBirthdateChange = (e) => {
        const inputDOB = e.target.value;
        setBirthdate(inputDOB);
        validateAge(inputDOB);
    };

    const validateAge = (birthdate) => {
        if (!birthdate) return;
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (
            month < 0 ||
            (month === 0 && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }
        if (age >= 18 && age <= 100) {
            setIsOlderThan18(true);
            setErrorMessage('');
        } else {
            setIsOlderThan18(false);
            setErrorMessage('You must be between 18 and 100 years old.');
        }
    };

    return (
        <form className="registration-form">
            <div className="form-group">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="input-field regis"
                    value={formValues.username}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="displayName"
                    placeholder="Display Name"
                    className="input-field regis"
                    value={formValues.displayName}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    className="input-field regis"
                    value={formValues.email}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    placeholder="Password (10+ letters & numbers)"
                    className="input-field regis"
                    value={formValues.password}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form-group">
                <input
                    type="date"
                    placeholder="Birthdate (dd/mm/yyyy)"
                    className="input-field regis"
                    value={birthdate}
                    onChange={handleBirthdateChange}
                    required
                />
                {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                )}
            </div>

            <div className="checkbox-group">
                <label>
                    <input
                        type="checkbox"
                        required
                        checked={condition}
                        onChange={() => setConditionChecked(!condition)}
                    />
                    <div>
                        <a href="/terms-and-conditions">
                            General <u>Terms and Conditions (GTC)</u>
                        </a>
                    </div>
                </label>
            </div>

            <div className="signin-button">
                <button
                    type="submit"
                    className="submit-button"
                    onClick={handleLogInLink}
                    disabled={submitDisabled}
                >
                    Sign in
                </button>
            </div>
        </form>
    );
}

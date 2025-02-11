import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useTheme from "../../../customHooks/useTheme";
import Context from "../../../context/service";
import { SERVER_HOST } from "../../../services/Hosts";
import DatePicker from "./DateElement";
import DateElement from "./DateElement";

export default function SignUpUserInfoForm() {
  const [condition, setConditionChecked] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [isOlderThan18, setIsOlderThan18] = useState(false);
  const [birthdate, setBirthdate] = useState("");
  const [formValues, setFormValues] = useState({
    userName: "",
    userDisplayName: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const context = useContext(Context);
  const { colorMode, avatarId } = context;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateAge = (birthdate) => {
    if (!birthdate) return;
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age >= 18 && age <= 100) {
      setIsOlderThan18(true);
      setErrorMessage("");
    } else {
      setIsOlderThan18(false);
      setErrorMessage("You must be older than 18 years old.");
    }
  };

  useEffect(() => {
    const { userName, userDisplayName, email, password } = formValues;
    if (
      condition &&
      userName &&
      userDisplayName &&
      email &&
      password &&
      avatarId !== "0"
    ) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [condition, formValues, avatarId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const reqBody = {
        ...formValues,
        birthDate: birthdate,
        avatarId,
      };

      const DBresponse = await fetch(`${SERVER_HOST}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
        credentials: "include",
      });

      const responseData = await DBresponse.json();

      if (responseData.status) {
        localStorage.setItem("userId", responseData.userId);

        setTimeout(() => {
          navigate("/");
        }, 0);
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Registration failed! Please try again."
      );
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="userName"
          placeholder="Name"
          className="input-field regis"
          value={formValues.userName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="userDisplayName"
          placeholder="Display Name"
          className="input-field regis"
          value={formValues.userDisplayName}
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
          placeholder="Password"
          className="input-field regis"
          value={formValues.password}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group date-group" data-type="date">
        <p>Birthdate</p>
        <div className="datepicker-container">
          <DateElement updateDate={setBirthdate} validator={validateAge} />
        </div>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            required
            checked={condition}
            onChange={() => setConditionChecked(!condition)}
          />
          <div>
            <a href="/t&cs" className={colorMode}>
              General <u>Terms and Conditions (GTC)</u>
            </a>
          </div>
        </label>
      </div>

      <div className="signin-button">
        <button
          type="submit"
          className="submit-button"
          disabled={submitDisabled}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

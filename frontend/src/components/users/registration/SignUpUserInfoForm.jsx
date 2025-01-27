import { useState, useEffect } from "react";

export default function SignUpUserInfoForm() {
  const [Condition, setConditionChecked] = useState(false);
  const [SubmitDisabled, setSubmitDisabled] = useState(true);
  const [Birthdate, setBirthdate] = useState("");
  const [isOlderThan18, setIsOlderThan18] = useState(false);

  useEffect(() => {
    if (Condition && isOlderThan18) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [Condition, isOlderThan18]);

  const handleBirthdateChange = function (e) {
    const inputDOB = e.target.value;
    setBirthdate(inputDOB);
    checkAge(inputDOB);
  };

  function checkAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age >= 18 && age <= 100) {
      setIsOlderThan18(true);
    } else if (age < 18) {
      setIsOlderThan18(false);
      alert("You must be 18 years or older to register.");
    }
    // ! not working because the user cant finish to insert all the date, using timeout to wait for the user to finish didnt work so far.
    // } else if (age > 100) {
    //   setIsOlderThan18(false);
    //   alert("Please enter a valid birthdate.");
    // }
  }
  return (
    <form className="registration-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          className="input-field regis"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Display Name"
          className="input-field regis"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="E-Mail"
          className="input-field regis"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password (10+ letters & numbers)"
          className="input-field regis"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          placeholder="Birthdate (dd/mm/yyyy)"
          className="input-field regis"
          required
          value={Birthdate}
          onChange={handleBirthdateChange}
        />
      </div>
      {/* Checkbox group for agreement */}
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            required
            checked={Condition}
            onChange={() => setConditionChecked(!Condition)}
          />
          <div>
            <a href="/terms-and-conditions">
              General <u>Terms and Conditions (GTC)</u>
            </a>
          </div>
        </label>
      </div>
      {/* Submit button */}
      <div className="signin-button">
        <button
          type="submit"
          className="submit-button"
          disabled={SubmitDisabled}
        >
          Sign in
        </button>
      </div>
    </form>
  );
}

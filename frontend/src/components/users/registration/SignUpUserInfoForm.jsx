import { useState, useEffect } from "react";

export default function SignUpUserInfoForm() {
  const [FirstCondition, setFirstConditionChecked] = useState(false);
  const [SecondCondition, setSecondCnditionChecked] = useState(false);
  const [SubmitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (FirstCondition && SecondCondition) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [FirstCondition, SecondCondition]);

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
        />
      </div>
      {/* Checkbox group for agreements */}
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            required
            checked={FirstCondition}
            onChange={() => setFirstConditionChecked(!FirstCondition)}
          />
          <div>Yes, I am 18 or older</div>
        </label>

        <label>
          <input
            type="checkbox"
            required
            checked={SecondCondition}
            onChange={() => setSecondCnditionChecked(!SecondCondition)}
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

import "@/assets/main.css";

export default function SignUpUserInfoForm(): JSX.Element {
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
          <input type="checkbox" required />
          <div>Yes, I am 18 or older</div>
        </label>

        <label>
          <input type="checkbox" required />
          <div>General Terms and Conditions (GTC)...</div>
        </label>
      </div>
      {/* Submit button */}
      <div className="signin-button">
        <button type="submit" className="submit-button">
          Sign in
        </button>
      </div>
    </form>
  );
}

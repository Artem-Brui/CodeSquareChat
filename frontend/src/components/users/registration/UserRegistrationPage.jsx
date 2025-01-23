
import SignUpAddImage from "./SignUpAddImage";
import SignUpUserInfoForm from "./SignUpUserInfoForm";
import SignUpTitle from "./SignUpTitle";

export default function UserRegistrationFormPage() {
  return (
    <div className="container">
      <div className="user-registration-container">
        <SignUpTitle />
        <SignUpAddImage />
        <SignUpUserInfoForm />
      </div>
    </div>
  );
}

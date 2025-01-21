import "@/assets/main.css";
import SignUpAddImage from "./SignUpAddImage/SignUpAddImage";
import SignUpUserInfoForm from "./SignUpUserInfoForm/SignUpUserInfoForm";
import SignUpTitle from "./SignUpTitle/SignUpTitle";

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

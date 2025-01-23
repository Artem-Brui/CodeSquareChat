import SignUpTitle from '../components/users/registration/SignUpTitle';
import SignUpAddImage from '../components/users/registration/SignUpAddImage';
import SignUpUserInfoForm from '../components/users/registration/SignUpUserInfoForm';

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

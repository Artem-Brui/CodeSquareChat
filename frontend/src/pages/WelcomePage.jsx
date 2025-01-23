import Logo from "../log-in/Logo";
import WelcomeTitle from "../log-in/WelcomeTitle";
import LoginForm from "../log-in/LoginForm";
import FAQLink from "../log-in/FAQLink";

export default function WelcomePage() {
  {
    return (
      <div className="container">
        <Logo />
        <WelcomeTitle />
        <LoginForm />
        <FAQLink />
      </div>
    );
  }
}

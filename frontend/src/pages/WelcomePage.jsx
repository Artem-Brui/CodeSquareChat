import Logo from '../components/log-in/Logo';
import WelcomeTitle from '../components/log-in/WelcomeTitle';
import LoginForm from '../components/log-in/LoginForm';
import FAQLink from '../components/log-in/FAQLink';

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

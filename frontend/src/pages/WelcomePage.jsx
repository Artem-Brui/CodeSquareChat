import Logo from '../components/log-in/Logo';
import WelcomeTitle from '../components/log-in/WelcomeTitle';
import LoginForm from '../components/log-in/LoginForm';
import FAQLink from '../components/log-in/FAQLink';
import useUserData from '../customHooks/useUserData';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function WelcomePage() {
  const { isTokenVerifed } = useUserData();
  const redirect = useNavigate();


  useEffect(() => {
    if (isTokenVerifed) {
      redirect('/dashboard', { replace: true });
    }
  }, [isTokenVerifed, redirect]);
  
    return (
      <div className="container">
        <Logo />
        <WelcomeTitle />
        <LoginForm />
        <FAQLink />
      </div>
    );
}

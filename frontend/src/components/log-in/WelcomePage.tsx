import { Component } from "react";
import Logo from "./Logo/Logo";
import WelcomeTitle from "./WelcomeTitle/WelcomeTitle";
import LoginForm from "./LoginForm/LoginForm";
import FAQLink from "./FAQLink/FAQLink";
import "@/assets/main.css";

class WelcomePage extends Component {
  render() {
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

export default WelcomePage;

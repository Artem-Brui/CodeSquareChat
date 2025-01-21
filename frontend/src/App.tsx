import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQPage from "./components/log-in/FAQ/FAQPage";
import TermsAndConditions from "./components/log-in/TermsAndConditions/TermsAndConditions";
import WelcomePage from "./components/log-in/WelcomePage";
import UserRegistrationFormPage from "./components/users/registration/UserRegistrationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route
          path="/user-registration-form-page"
          element={<UserRegistrationFormPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;

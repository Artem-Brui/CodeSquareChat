import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQPage from "./components/pages/FAQPage";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import WelcomePage from "./components/pages/WelcomePage";
import BurgerMenu from "./components/layout/BurgerMenu";
import Header from "./components/layout/Header";
import ChatCategories from "./components/chat/ChatCategories";
import AddRoom from "./components/pages/AddRoom";
import ChatTextBox from "./components/chat/ChatTextBox";
import UserRegistrationFormPage from "./components/users/registration/UserRegistrationPage";
import UserProfilePage from "./components/users/Profile/UserProfilePage";
import UserSettingsPage from "./components/users/UserSettings/UserSettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />

        <Route 
          path="/faq" 
          element={<FAQPage />} />
        <Route 
          path="/terms-and-conditions" 
          element={<TermsAndConditions />} />
        <Route 
          path="/burger-menu" 
          element={<BurgerMenu />} />
        <Route 
          path="/header" 
          element={<Header />} />
        <Route 
          path="/chat-categories" 
          element={<ChatCategories />} />
        <Route 
          path="/add-room" 
          element={<AddRoom />} />
        <Route 
          path="/chat-text-box" 
          element={<ChatTextBox />} />
        <Route
          path="/user-registration-form-page"
          element={<UserRegistrationFormPage />}
        />
        <Route path="/user-profile-page" 
        element={<UserProfilePage />} />
        <Route path="/user-settings-page" 
        element={<UserSettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

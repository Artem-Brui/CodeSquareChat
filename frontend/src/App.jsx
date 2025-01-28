import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQPage from "./pages/FAQPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import WelcomePage from "./pages/WelcomePage";
// import BurgerMenu from './components/layout/BurgerMenu';
// import Header from './components/layout/Header';
// import ChatCategories from './components/chat/ChatCategories';
// import AddRoom from './components/pages/AddRoom';
// import ChatTextBox from './components/chat/ChatTextBox';
import UserRegistrationFormPage from "./pages/UserRegistrationPage";
// import UserProfilePage from './components/users/Profile/UserProfilePage';
// import UserSettingsPage from './components/users/UserSettings/UserSettingsPage';

import SignUpUserInfoForm from "./components/users/registration/SignUpUserInfoForm";
import MainPageChat from "./pages/MainPageChat.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<UserRegistrationFormPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/t&cs" element={<TermsAndConditions />} />
        <Route path="/mainpagechat" element={<MainPageChat />} />

        {/* check validation of birthdate */}
        <Route path="/signup" element={<SignUpUserInfoForm />} />

        {/* <Route path="/chat-categories" element={<ChatCategories />} />
        <Route path="/add-room" element={<AddRoom />} />
        <Route path="/chat-text-box" element={<ChatTextBox />} />
       
        <Route path="/user-profile-page" element={<UserProfilePage />} />
        <Route path="/user-settings-page" element={<UserSettingsPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

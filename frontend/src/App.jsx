import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQPage from "./pages/FAQPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import WelcomePage from "./pages/WelcomePage";
import MainPageChat from "./pages/MainPageChat";
import ChatCategories from "./components/chat/ChatCategories";
import AddRoom from "./pages/RoomsList";
import ChatTextBox from "./components/chat/ChatTextBox";
import UserRegistrationFormPage from "./pages/UserRegistrationPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserSettingsPage from "./components/users/UserSettings/UserSettingsPage";
import Dashboard from "./pages/Dashboard";
import RoomPage from "./pages/RoomPage";
import BurgerMenu from "./components/layout/BurgerMenu";
import ProtectedRoute from "./Router/ProtectedRouter";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<UserRegistrationFormPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/t&cs" element={<TermsAndConditions />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/menu" element={<BurgerMenu />} />
          <Route path="/add-room" element={<AddRoom />} />
          <Route path="/chat-categories" element={<ChatCategories />} />
          <Route path="/chat-text-box" element={<ChatTextBox />} />
          <Route path="/main-chat" element={<MainPageChat />} />
          <Route path="/user-profile" element={<UserProfilePage />} />
          <Route path="/user-settings" element={<UserSettingsPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rooms/:roomId" element={<RoomPage />} />
        </Route>

        {/* <Route path="/signup" element={<SignUpUserInfoForm />} />
        <Route path="/chat-text-box" element={<ChatTextBox />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

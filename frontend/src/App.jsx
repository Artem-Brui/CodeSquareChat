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
import { useEffect, useState } from "react";
import useUserData from "./customHooks/useUserData";
import { SERVER_HOST } from "./services/Hosts";

function App() {
  const { updateUserData, updateTokenVerify, isTokenVerifed } = useUserData();
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const checkAuth = async () => {
      if (userId) {
        try {
          const tokenBDResponse = await fetch(
            `${SERVER_HOST}/users/${userId}/token`
          );
          const responseData = await tokenBDResponse.json();

          const { _id, tokenVerif, userName, userDisplayName, avatarId } = responseData;

          updateUserData({ _id, userName, userDisplayName, avatarId });
          updateTokenVerify(tokenVerif);
        } catch (error) {
          console.error(error);
        }
      }

      setLoading(false);
    };

    checkAuth();
  }, [isTokenVerifed]);

  if (loading) {
    return null;
  }

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
          <Route path="/rooms/:name" element={<RoomPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

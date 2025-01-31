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
// import { roomsList } from './services/database.js';
import { useEffect, useState } from "react";
import ProtectedRoute from "./Router/ProtectedRouter";
import useUserData from "./customHooks/useUserData";

function App() {
  const [roomsList, setRoomsList] = useState([]);
  const [messageId, setMessageId] = useState("");

  const {isTokenVerif} = useUserData();
  console.log(isTokenVerif);

  const updatePage = (newId) => setMessageId(newId);

  useEffect(() => {
    const getRooms = async () => {
      const RoomsBDResponse = await fetch("http://localhost:5007/rooms");
      const roomsData = await RoomsBDResponse.json();

      setRoomsList(await roomsData);
    };

    getRooms();
  }, [messageId]);

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
          <Route path="/dashboard" element={<Dashboard rooms={roomsList} />} />
          {roomsList.map((room) => (
            <Route
              key={room.id}
              path={`/rooms/${room.id}`}
              element={<RoomPage room={room} rerender={updatePage} />}
            />
          ))}
        </Route>

        {/* <Route path="/signup" element={<SignUpUserInfoForm />} />
        <Route path="/chat-text-box" element={<ChatTextBox />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

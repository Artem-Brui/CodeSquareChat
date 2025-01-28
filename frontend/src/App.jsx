import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FAQPage from './pages/FAQPage';
import TermsAndConditions from './pages/TermsAndConditions';
import WelcomePage from './pages/WelcomePage';
import MainPageChat from './pages/MainPageChat.jsx';
import ChatCategories from './components/chat/ChatCategories';
import AddRoom from './pages/RoomsList';
import ChatTextBox from './components/chat/ChatTextBox';
import UserRegistrationFormPage from './pages/UserRegistrationPage';
// import UserProfilePage from './components/users/Profile/UserProfilePage';
// import UserSettingsPage from './components/users/UserSettings/UserSettingsPage';
// import BurgerMenu from './components/layout/BurgerMenu';
// import Header from './components/layout/Header';
// import ChatTextBox from './components/chat/ChatTextBox';

import SignUpUserInfoForm from "./components/users/registration/SignUpUserInfoForm";
import Dashboard from "./pages/Dashboard";
import RoomPage from "./pages/RoomPage";
import BurgerMenu from "./components/layout/BurgerMenu";
import { roomsList } from './services/database.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<UserRegistrationFormPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/t&cs" element={<TermsAndConditions />} />
        <Route path="/menu" element={<BurgerMenu />} />
        <Route path="/add-room" element={<AddRoom />} />
        <Route path="/chat-categories" element={<ChatCategories />} />
        <Route path="/chat-text-box" element={<ChatTextBox />} />
        <Route path="/dashboard" element={<Dashboard rooms={roomsList} />} />
        {roomsList.map((room) => (
          <Route
            key={room.id}
            path={`/rooms/${room.id}`}
            element={<RoomPage room={room} />}
          />
        ))}

                {/* check validation of birthdate */}
                <Route path="/signup" element={<SignUpUserInfoForm />} />

                {/* <Route path="/chat-text-box" element={<ChatTextBox />} />
       
        <Route path="/user-profile-page" element={<UserProfilePage />} />
        <Route path="/user-settings-page" element={<UserSettingsPage />} /> */}
            </Routes>
        </Router>
    );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FAQPage from './pages/FAQPage';
import TermsAndConditions from './pages/TermsAndConditions';
import WelcomePage from './pages/WelcomePage';
import MainPageChat from './pages/MainPageChat.jsx';
import ChatCategories from './components/chat/ChatCategories';
import AddRoom from './pages/RoomsList';
import UserRegistrationFormPage from './pages/UserRegistrationPage';
// import UserProfilePage from './components/users/Profile/UserProfilePage';
// import UserSettingsPage from './components/users/UserSettings/UserSettingsPage';
// import BurgerMenu from './components/layout/BurgerMenu';
// import Header from './components/layout/Header';
// import ChatTextBox from './components/chat/ChatTextBox';

import SignUpUserInfoForm from './components/users/registration/SignUpUserInfoForm';
import Dashboard from './pages/Dashboard';
import RoomPage from './pages/RoomPage';
import BurgerMenu from './components/layout/BurgerMenu';

const roomsList = [
    {
        id: 1,
        name: 'Room Name 1',
        capacity: '13/20',
    },
    {
        id: 2,
        name: 'Room Name 2',
        capacity: '19/20',
    },
    {
        id: 3,
        name: 'Room Name 3',
        capacity: '8/20',
    },
    {
        id: 4,
        name: 'Room Name 4',
        capacity: '15/20',
    },
];

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route
                    path="/register"
                    element={<UserRegistrationFormPage />}
                />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/t&cs" element={<TermsAndConditions />} />
                <Route path="/menu" element={<BurgerMenu />} />
                <Route path="/add-room" element={<AddRoom />} />
                <Route path="/chat-categories" element={<ChatCategories />} />
                <Route path="/chat-main" element={<MainPageChat />} />

                <Route
                    path="/dashboard"
                    element={<Dashboard rooms={roomsList} />}
                />
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

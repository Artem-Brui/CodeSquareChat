import Header from "../components/layout/Header.jsx"
import ChatCategories from "../components/chat/ChatCategories.jsx"
import UserNameSearch from "../components/chat/UserNameSearch.jsx"

export default function MainPageChat() {
    return (
        <div className="container">
            <div className="main-page-chat">
                <Header />
                <ChatCategories />
                <UserNameSearch />
            </div>
        </div>
    )
}


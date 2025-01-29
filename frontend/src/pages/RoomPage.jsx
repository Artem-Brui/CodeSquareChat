import ChatField from "../components/chat/ChatField";
import ChatTextBox from "../components/chat/ChatTextBox";
import Header from "../components/layout/Header";


export default function RoomPage({ room }) {

  return (
    <div className="room-page container" id="room-page">
      <Header />
      <ChatField />
      <ChatTextBox />
    </ div>
  )
}
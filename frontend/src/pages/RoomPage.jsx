import { useState } from "react";
import ChatField from "../components/chat/ChatField";
import ChatTextBox from "../components/chat/ChatTextBox";
import Header from "../components/layout/Header";


export default function RoomPage({ room }) {

  const [newRoom, setNewRoom] = useState(room)

  const updatePage = (UpdatedRoom) => {
    setNewRoom(UpdatedRoom);
  }

  return (
    <div className="room-page container" id="room-page">
      <Header />
      <ChatField messages={newRoom.messages} />
      <ChatTextBox room={newRoom} pageRerender={updatePage} />
    </ div>
  )
}
import { useState } from "react";
import ChatField from "../components/chat/ChatField";
import ChatTextBox from "../components/chat/ChatTextBox";
import Header from "../components/layout/Header";


export default function RoomPage({ room, rerender }) {

  return (
    <div className="room-page container" id="room-page">
      <Header />
      <ChatField messages={room.messages} />
      <ChatTextBox room={room} rerender={rerender} />
    </ div>
  )
}
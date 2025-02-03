import { useState } from "react";
import ChatField from "../components/chat/ChatField";
import ChatTextBox from "../components/chat/ChatTextBox";
import Header from "../components/layout/Header";
import { useParams } from "react-router-dom";
import useRoomsList from "../customHooks/useRoomsList";


export default function RoomPage() {
  const { roomsList } = useRoomsList();
  const { roomId } = useParams();

  const room = roomsList.find((room) => room.id === roomId);

  return (
    <div className="room-page container" id="room-page">
      <Header />
      <ChatField messages={room.messages} />
      <ChatTextBox room={room} />
    </ div>
  )
}
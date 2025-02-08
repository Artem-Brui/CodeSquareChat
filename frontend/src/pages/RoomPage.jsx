import ChatField from "../components/chat/ChatField";
import ChatTextBox from "../components/chat/ChatTextBox";
import Header from "../components/layout/Header";
import { useParams } from "react-router-dom";
import useRoomsList from "../customHooks/useRoomsList";
import SearchBar from "../components/header/SearchBar";

export default function RoomPage() {
  const { roomsList } = useRoomsList();
  const { name } = useParams();
  
  const room = roomsList.find((room) => room.name === name);
  
  return (
    <div className="room-page container" id="room-page">
      <Header room={room} />
      <SearchBar />
      <ChatField room={room} />
      <ChatTextBox room={room} />
    </div>
  );
}

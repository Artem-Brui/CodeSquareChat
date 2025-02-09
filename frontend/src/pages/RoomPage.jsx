import ChatField from "../components/chat/ChatField";
import ChatTextBox from "../components/chat/ChatTextBox";
import Header from "../components/layout/Header";
import { useParams } from "react-router-dom";
import useRoomsList from "../customHooks/useRoomsList";
import SearchBar from "../components/header/SearchBar";
import { useState } from "react";

export default function RoomPage() {
  const [searchData, setSearchData] = useState('');
  const { roomsList } = useRoomsList();
  const { name } = useParams();


  const room = roomsList.find((room) => room.name === name);
  const fullMessages = [...room.messages];
  const notDeletedUsersMessages = fullMessages.filter(mes => mes.owner !== null);

  const searchFiltredMessages = notDeletedUsersMessages.filter(mes => {
    return mes.owner.userDisplayName.toLowerCase().includes(searchData.toLowerCase())
      || mes.message.toLowerCase().includes(searchData.toLowerCase())
  });

  const updatedRoom = {
    ...room,
    messages: searchFiltredMessages,
  }
  
  return (
    <div className="room-page container" id="room-page">
      <Header room={updatedRoom} />
      <SearchBar search={searchData} updateSearchData={setSearchData} />
      <ChatField search={searchData} room={updatedRoom} />
      <ChatTextBox room={updatedRoom} />
    </div>
  );
}

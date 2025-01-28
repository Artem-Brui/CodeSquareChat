import ChatCategories from "../components/chat/ChatCategories";
import Header from "../components/layout/Header";
import RoomsList from "./RoomsList";

export default function Dashboard( { rooms } ) {
  return (
    <div className="dashboard">
      <Header />
      <ChatCategories />
      <RoomsList list={rooms} />
    </ div>
  )
}
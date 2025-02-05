import { Link } from "react-router-dom";
import UserInfo from "../header/UserInfo";
import SearchBar from "../header/SearchBar";

export default function Header({ room }) {
  {
    return (
      <div className="header">
        <UserInfo room={room} />
        <SearchBar />
      </div>
    );
  }
}

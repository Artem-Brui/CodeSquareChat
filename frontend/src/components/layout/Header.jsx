import { Link } from "react-router-dom";
import UserInfo from "../header/UserInfo";
import SearchBar from "../header/SearchBar";

export default function Header() {
  {
    return (
      <div className="header">
        <UserInfo />
        <SearchBar />
      </div>
    );
  }
}

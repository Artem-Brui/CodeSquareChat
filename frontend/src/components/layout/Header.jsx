import { Link } from "react-router-dom";
import UserInfo from "../header/UserInfo";
import SearchBar from "../header/SearchBar";
import Heading from "./Heading";
import BurgerMenuIcon from "../header/BurgerMenuIcon";

export default function Header({ room }) {
  {
    return (
      <div className="header">
        <UserInfo room={room} />
        <Heading room={room} />
        <BurgerMenuIcon />
      </div>
    );
  }
}

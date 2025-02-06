import { Link, useLocation, useNavigate } from "react-router-dom";
import useUserData from "../../customHooks/useUserData";
import Heading from "../layout/Heading";
import UserProfileImage from "../users/Profile/UserProfileImage";
import UserProfileName from "../users/Profile/UserProfileName";
import Context from "../../context/service";
import { useContext } from "react";

export default function UserInfo({ room }) {
  const { userData } = useUserData();
  const name = userData.userDisplayName;
  const navigate = useNavigate();
  const context = useContext(Context);
  const { updateLastPage } = context;
  const currentPage = useLocation();

  const handleMenuClick = () => {
    updateLastPage(currentPage.pathname)
    navigate("/user-profile");
  }

  

  return (
    <div className="user-info" onClick={handleMenuClick}>
      <UserProfileImage />
      <UserProfileName name={name} />
    </div>
  );
}

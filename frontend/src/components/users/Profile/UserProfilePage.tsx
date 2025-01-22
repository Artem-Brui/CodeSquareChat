import "@/assets/main.css";
import UserProfileImage from "./UserProfileImage/UserProfileImage";
import UserProfileMenu from "./UserProfileMenu/UserProfileMenu";

export default function UserProfilePage() {
  return (
    <div className="container">
      <div className="user-profile-menu">
        <UserProfileImage />
        <UserProfileMenu />
      </div>
    </div>
  );
}

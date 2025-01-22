import "@/assets/main.css";
import UserProfileImage from "./UserProfileImage/UserProfileImage";
import UserProfileRegistration from "./UserProfileMenu/UserProfileMenu";

export default function UserProfilePage() {
  return (
    <div className="container">
      <div className="user-profile-menu">
        <UserProfileImage />
        <UserProfileRegistration />
      </div>
    </div>
  );
}

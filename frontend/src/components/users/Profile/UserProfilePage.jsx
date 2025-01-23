import UserProfileImage from "./UserProfileImage";
import UserProfileMenu from "./UserProfileMenu";

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

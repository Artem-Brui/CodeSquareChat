import CloseButton from '../components/layout/CloseButton';
import UserProfileImage from '../components/users/Profile/UserProfileImage';
import UserProfileMenu from '../components/users/Profile/UserProfileMenu';

export default function UserProfilePage() {

  return (
    <div className="container">
      <div className="user-profile-menu">
        <CloseButton />
        <UserProfileImage />
        <UserProfileMenu />
      </div>
    </div>
  );
}

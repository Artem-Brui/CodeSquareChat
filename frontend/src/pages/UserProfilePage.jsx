import CloseButton from '../components/layout/CloseButton';
import UserProfileImage from '../components/users/Profile/UserProfileImage';
import UserProfileMenu from '../components/users/Profile/UserProfileMenu';
import useUserData from '../customHooks/useUserData';

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

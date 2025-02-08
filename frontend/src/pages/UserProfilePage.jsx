import CloseButton from '../components/layout/CloseButton';
import UserProfileImage from '../components/users/Profile/UserProfileImage';
import UserProfileMenu from '../components/users/Profile/UserProfileMenu';
import UserProfileName from '../components/users/Profile/UserProfileName';
import useUserData from '../customHooks/useUserData';

export default function UserProfilePage() {
  const { userData } = useUserData();
  const { avatarId, userDisplayName } = userData;

  return (
    <div className="container">
      <div className="user-profile-menu">
        <CloseButton />
        <UserProfileImage id={avatarId} />
        <UserProfileName name={userDisplayName} />
        <UserProfileMenu />
      </div>
    </div>
  );
}

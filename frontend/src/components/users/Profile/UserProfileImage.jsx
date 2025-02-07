import useUserData from "../../../customHooks/useUserData";


export default function UserProfileImage({ id }) {
  const { userData } = useUserData();

  let avatar = userData.avatarId;

  if (id) {
    avatar = id;
  }
  
  return (
    <div className="user-profile-img">
      <div className="user-image">
        <img
          src={`../src/assets/images/avatars/avatar-${avatar}.svg`}
          alt="Profile Image"
        />
      </div>
    </div>
  );
}

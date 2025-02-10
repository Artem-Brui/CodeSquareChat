import { useContext } from "react";
import Context from "../../../context/service";


export default function UserProfileImage({ id }) {
  const context = useContext(Context);
  const { userData } = context;

  
  let avatar = userData.avatarId;

  if (id) {
    avatar = id;
  }

  const imagePath = `url(${`/images/avatars/avatar-${avatar}.svg`})`;
  
  return (
    <div className="user-profile-img">
      <div className="user-image" style={{ backgroundImage: imagePath }}>
      </div>
    </div>
  );
}

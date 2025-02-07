import { useContext, useRef, useState } from "react";
import UserProfileImage from "../Profile/UserProfileImage";
import Context from "../../../context/service";

export default function SignUpAddImage() {
  const avatarListElement = useRef();

  const context = useContext(Context);
  const { updateAvatarId } = context;


  const avatarList = [];

  for (let i = 1; i <= 30; i++) {
    avatarList.push(i);
  }


  
  const handleAvatarClick = (e) => {
    updateAvatarId(e.currentTarget.dataset.avatar);

    const avatarsCollection = avatarListElement.current.getElementsByClassName('user-image');

    for (const el of avatarsCollection) {
      el.classList.remove('marked');
    }
    
    e.target.closest('.user-image').classList.add('marked');
  };

  return (
    <div className="signup-add-avatar">
      <ul className="user-avatar-list" ref={avatarListElement}>
        {avatarList.map((avatarId) => {
          return (
            <li
              data-avatar={avatarId}
              key={avatarId}
              onClick={handleAvatarClick}
            >
              <UserProfileImage id={avatarId} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

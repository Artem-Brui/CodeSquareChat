import { Link } from 'react-router-dom';
import useUserData from '../../customHooks/useUserData';

export default function UserInfo({ room }) {
  const { userData } = useUserData();

  const headerText = room ? `Room:  ${room.name}` : userData.userDisplayName;
  
  return (
    <div className="user-info">
      <Link to="/user-profile">
        <div className="user-icon">
          <div className="svg-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6rem"
              height="6rem"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="#a926f0"
                d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12"
              />
            </svg>
          </div>
        </div>
      </Link>
      <div className="username-title">
        <h1>{headerText}</h1>
      </div>
      <Link to="/menu">
        <div className="menu-icon">
          <div className="svg-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6rem"
              height="6rem"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="#a926f0"
                d="M8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4-10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

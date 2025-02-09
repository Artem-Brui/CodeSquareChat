import { useState } from 'react';
import EditInput from './EditInput';
import useUserData from '../../../customHooks/useUserData';
import DeleteAccount from './DeleteAccount';

export default function UserProfileMenu() {
  const { userData } = useUserData();
  const [OpenMenuName, setOpenMenuName] = useState(false);
  const [OpenMenuDisplayName, setOpenMenuDisplayName] = useState(false);
  const [OpenDeleteAcc, setOpenDeleteAcc] = useState(false);

  const ClickDropdownName = () => setOpenMenuName(!OpenMenuName);
  const ClickDropdownDisplayName = () => setOpenMenuDisplayName(!OpenMenuDisplayName);
  const handleDeleteButton = (boolean = true) => {
    if (!boolean) {
      setOpenDeleteAcc(false)
    } else {

      setOpenDeleteAcc(!false);
    }
  } 

  return (
    <div className="user-profile-settings">


      <div className="user-profile-field">
        <div className="user-settings-field">
          <button id="user-name-menu" onClick={ClickDropdownName}>
            <div className="svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5rem"
                height="5rem"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <g
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path strokeDasharray="20" strokeDashoffset="20" d="M3 21h18">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.2s"
                      values="20;0"
                    />
                  </path>
                  <path
                    strokeDasharray="48"
                    strokeDashoffset="48"
                    d="M7 17v-4l10 -10l4 4l-10 10h-4"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.2s"
                      dur="0.6s"
                      values="48;0"
                    />
                  </path>
                  <path strokeDasharray="8" strokeDashoffset="8" d="M14 6l4 4">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.8s"
                      dur="0.2s"
                      values="8;0"
                    />
                  </path>
                </g>
                <path fill="#fff" fillOpacity="0" d="M14 6l4 4L21 7L17 3Z">
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="1.1s"
                    dur="0.5s"
                    values="0;1"
                  />
                </path>
              </svg>
            </div>
            <div className="user-profile-settings-title">
              <h2>Username</h2>
            </div>
          </button>
          {OpenMenuName && (<EditInput dataKey={'userName'} user={userData} />)}
        </div>
      </div>


      <div className="user-profile-field">
        <div className="user-settings-field">
          <button id="user-dispName-menu" onClick={ClickDropdownDisplayName}>
            <div className="svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5rem"
                height="5rem"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <g
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path strokeDasharray="20" strokeDashoffset="20" d="M3 21h18">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.2s"
                      values="20;0"
                    />
                  </path>
                  <path
                    strokeDasharray="48"
                    strokeDashoffset="48"
                    d="M7 17v-4l10 -10l4 4l-10 10h-4"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.2s"
                      dur="0.6s"
                      values="48;0"
                    />
                  </path>
                  <path strokeDasharray="8" strokeDashoffset="8" d="M14 6l4 4">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.8s"
                      dur="0.2s"
                      values="8;0"
                    />
                  </path>
                </g>
                <path fill="#fff" fillOpacity="0" d="M14 6l4 4L21 7L17 3Z">
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="1.1s"
                    dur="0.5s"
                    values="0;1"
                  />
                </path>
              </svg>
            </div>
            <div className="user-profile-settings-title">
              <h2>Display Name</h2>
            </div>
          </button>
          {OpenMenuDisplayName && (<EditInput dataKey={'userDisplayName'} user={userData} />)}
        </div>
      </div>

      
      {/* <div className="user-profile-field">
        <div className="user-settings-field">
          <button id="user-status-menu" onClick={ClickDropdown}>
            <div className="svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5rem"
                height="5rem"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16.977 19.5A9 9 0 0 0 10 3.223M16.977 19.5V16m0 3.5H20.5M7 4.516a9 9 0 0 0 7 16.261M7 4.516V8m0-3.484H3.5"
                  color="#fff"
                />
              </svg>
            </div>
            <div className="user-profile-settings-title">
              <h2>Status</h2>
            </div>
          </button>
          {OpenMenu && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <button className="status-indicator online">
                  <span>Online</span>
                </button>
              </div>
              <div className="dropdown-item">
                <button className="status-indicator busy">
                  <span>Busy</span>
                </button>
              </div>
              <div className="dropdown-item">
                <button className="status-indicator offline">
                  <span>Offline</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div> */}

      
      <div className="user-profile-field">
        <div className="user-settings-field">
          <button onClick={handleDeleteButton}>
            <div className="svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4rem"
                height="4rem"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="#fff"
                  d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1zM6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7zm12-1V5h-4l-1-1h-3L9 5H5v1zM8 9h1v10H8zm6 0h1v10h-1z"
                />
              </svg>
            </div>
            <div className="user-profile-settings-title">
              <h2>Delete Account</h2>
            </div>
          </button>
        </div>
      </div>
      {OpenDeleteAcc && (<DeleteAccount callBack={handleDeleteButton}  user={userData} />)}
    </div>
  );
}

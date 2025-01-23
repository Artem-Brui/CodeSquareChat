

export default function UserSettingsElement() {
  return (
    <div className="other-user-menu">
      <div className="other-user-setting-item">
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
              d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12"
            />
          </svg>
        </div>
        <div className="info-field">
          <span>Username</span>
        </div>
      </div>
      <div className="other-user-setting-item">
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
              fill-rule="evenodd"
              d="M10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m3.25 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="info-field">
          <span>Display Name</span>
        </div>
      </div>
      <div className="other-user-setting-item">
        <button>
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
                fill-rule="evenodd"
                d="M7.25 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 2.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5m2.775 9.763A14.5 14.5 0 0 0 12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369c2.868 0 4.81-.254 6.12-.741c1.179-.44 1.877-1.082 2.25-1.892a4.748 4.748 0 0 0 .989-7.476A4.74 4.74 0 0 0 18 11.25c-1.245 0-2.378.48-3.225 1.263M6.71 14.972c-1.34.753-1.96 1.677-1.96 2.528c0 1.308.04 2.044.723 2.6c.37.302.99.597 2.05.811c1.057.214 2.502.339 4.476.339c2.578 0 4.24-.213 5.311-.55a4.74 4.74 0 0 1-2.67-1.341A4.74 4.74 0 0 1 13.251 16c0-.768.181-1.493.505-2.135A13 13 0 0 0 12 13.75c-2.105 0-3.973.482-5.289 1.222M14.751 16a3.25 3.25 0 0 1 4.955-2.767l-4.473 4.473A3.23 3.23 0 0 1 14.75 16m1.543 2.767l4.473-4.473a3.25 3.25 0 0 1-4.473 4.473"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </button>
        <div className="info-field">
          <span>Block User</span>
        </div>
      </div>
      <div className="other-user-setting-item">
        <button>
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
        </button>
        <div className="info-field">
          <span>Delete User</span>
        </div>
      </div>
      <div className="warning-notes">
        <p>
          <b>Delete User:</b> Deleting the user will automatically delete the
          existing conversations between you, but not in the rooms.
        </p>
        <p>
          <b>Block User:</b> Blocking a user will prevent you to contact each
          other privately, but will not delete former conversations or block the
          user from contacting you in a room.
        </p>
      </div>
    </div>
  );
}

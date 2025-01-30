import UserProfileImage from "../users/Profile/UserProfileImage";

export default function ChatField({ messages }) {

  return (
    <div className="chat-field">
      <div className="message-container">
        <ul className="messages-list">
          {messages.map((message) => {
            return (
              <li key={message._id} className="messages-item">
                <UserProfileImage />
                <p>
                  {message.message}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

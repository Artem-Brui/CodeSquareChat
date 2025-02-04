import { useEffect, useRef } from "react";
import UserProfileImage from "../users/Profile/UserProfileImage";
import Message from "./Message";

export default function ChatField({ messages }) {
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-field" >
      <div className="message-container" ref={chatRef}>
        <ul className="messages-list">
          {messages.map((message) => {
            return (
              <li key={message._id} className="messages-item">
                <UserProfileImage />
                <Message message={message} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

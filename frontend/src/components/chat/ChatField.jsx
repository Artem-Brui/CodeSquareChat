import { useEffect, useRef } from "react";
import UserProfileImage from "../users/Profile/UserProfileImage";
import Message from "./Message";

export default function ChatField({ room, search }) {
  const chatRef = useRef(null);

  const { messages } = room;
  
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-field">
      <div className="message-container" ref={chatRef}>
        <ul className="messages-list">
          {messages.map((message) => {
            const isOwnMessage =
              localStorage.getItem("userId") === message.owner._id;
            
            const messagePositionClassName = isOwnMessage ? "right" : "left";

            return isOwnMessage ? (
              <li
                key={message._id}
                className={`messages-item ${messagePositionClassName}`}
              >
                <Message searchedData={search} message={message} />
                <UserProfileImage id={message.owner.avatarId || '0'}/>
              </li>
            ) : (
              <li
                key={message._id}
                className={`messages-item ${messagePositionClassName}`}
              >
                <UserProfileImage id={message.owner.avatarId || '0'} />
                <Message searchedData={search} message={message} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

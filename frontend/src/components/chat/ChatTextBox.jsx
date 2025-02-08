import { useEffect, useState } from "react";
import useUserData from "../../customHooks/useUserData";
import { io } from "socket.io-client";
import { SERVER_HOST } from "../../services/Hosts";

export default function ChatTextBox({ room }) {
  const [messageInputValue, setMessageInputValue] = useState("");
  const { userData } = useUserData();

  const socket = io(SERVER_HOST);

  const userId = userData._id ? userData._id : localStorage.getItem("userId");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleSendMessage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  })

  const sendMessage = async (message) => {
    const newMessageData = {
      roomId: room._id,
      message,
      owner: userId,
    };

    socket.emit("addNewMessage", newMessageData);
  };

  async function handleSendMessage() {
    if (messageInputValue.length) {
      await sendMessage(messageInputValue);

      setMessageInputValue("");
    }
  };

  const handleChangeInput = (event) => {
    setMessageInputValue(event.target.value);
  };

  return (
    <div className="textbox">
      <div className="chat-textbox">
        <input
          type="text"
          name="message"
          placeholder="Write Something :)"
          className="input-field regis"
          value={messageInputValue}
          onChange={handleChangeInput}
        />
      </div>

      <div className="send-text-btn">
          <div className="svg-icon" onClick={handleSendMessage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5rem"
              height="5rem"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="#fff" />
              <path
                fill="#a926f0"
                d="M8 7.71L18 12L8 16.29v-3.34l7.14-.95L8 11.05zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"
              />
            </svg>
          </div>
      </div>
    </div>
  );
}

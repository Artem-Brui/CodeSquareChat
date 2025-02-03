import { useState } from "react";
import useRoomsList from "../../customHooks/useRoomsList";
import useUserData from "../../customHooks/useUserData";

export default function ChatTextBox({ room }) {
  const [messageInputValue, setMessageInputValue] = useState("");
  const { updateLastMessageId} = useRoomsList();
  const { userData } = useUserData();

  const userId = userData._id ? userData._id : localStorage.getItem('userId');

  const sendMessage = async (message) => {
    try {
      const response = await fetch(`http://localhost:5007/rooms/${room.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          owner: userId,
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error("Error");
      }

      const lastMessageId = await response.json();
      
      return lastMessageId;
    } catch (error) {
      console.error("Error", error);
      return null;
    }
  };

  const handleSendMessage = async () => {
    const lastMessageId = await sendMessage(messageInputValue);

    setTimeout(() => {
      if (lastMessageId) {
        updateLastMessageId(lastMessageId);
      }
    }, 0);

    setMessageInputValue("");
  };

  const handleChangeInput = (event) => {
    setMessageInputValue(event.target.value);
  };

  return (
    <div className="textbox">
      <div className="chat-textbox">
        <input
          type="text"
          name="username"
          placeholder="Write Something :)"
          className="input-field regis"
          value={messageInputValue}
          onChange={handleChangeInput}
        />
      </div>

      <div className="send-text-btn">
        <button>
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
        </button>
      </div>
    </div>
  );
}

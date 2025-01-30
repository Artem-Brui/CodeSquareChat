import { useEffect, useState } from "react";

export default function ChatTextBox({ room, rerender }) {
  const [messageInputValue, setMessageInputValue] = useState("");

  const sendMessage = async (message) => {
    try {
      const response = await fetch(`http://localhost:5007/rooms/${room.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          owner: "id",
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error("Error");
      }

      const updatedRoom = await response.json();
      return updatedRoom;
    } catch (error) {
      console.error("Error", error);
      return null;
    }
  };

  const handleSendMessage = async () => {
    const updatedRoom = await sendMessage(messageInputValue);

    setTimeout(() => {
      if (updatedRoom) {
        rerender(updatedRoom);
      } else {
        rerender((prevMessages) => {
          return {
            ...updatedRoom,
            messages: [
              ...prevMessages,
              {
                owner: "id",
                message: messageInputValue,
              },
            ],
          };
        });
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

      <div className="add-file-btn">
        <button id="uploadBtn">
          <div className="svg-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5rem"
              height="5rem"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="#fff" />
              <path
                fill="#66a4ea"
                d="M11.75 22q-2.6 0-4.425-1.825T5.5 15.75V6.5q0-1.875 1.313-3.187T10 2t3.188 1.313T14.5 6.5V13q0 .425-.288.713T13.5 14t-.712-.288T12.5 13V6.5q-.025-1.05-.737-1.775T10 4t-1.775.725T7.5 6.5v9.25q-.025 1.775 1.225 3.013T11.75 20q.425 0 .8-.088t.725-.212q.4-.15.775.013t.525.562t-.012.775t-.563.525q-.525.2-1.087.313T11.75 22M17 21q-.425 0-.712-.288T16 20v-2h-2q-.425 0-.712-.288T13 17t.288-.712T14 16h2v-2q0-.425.288-.712T17 13t.713.288T18 14v2h2q.425 0 .713.288T21 17t-.288.713T20 18h-2v2q0 .425-.288.713T17 21m-7-4q-.425 0-.712-.288T9 16V7q0-.425.288-.712T10 6t.713.288T11 7v9q0 .425-.288.713T10 17m7-6q-.425 0-.712-.288T16 10V7q0-.425.288-.712T17 6t.713.288T18 7v3q0 .425-.288.713T17 11"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

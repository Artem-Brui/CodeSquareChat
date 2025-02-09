import { useState } from "react";
import { SERVER_HOST } from "../../../services/Hosts";
import useUserData from "../../../customHooks/useUserData";
import { io } from "socket.io-client";

export default function EditInput({ user, dataKey }) {
  const [dataToChange, setDataToChange] = useState(user[dataKey]);

  const { updateUserData } = useUserData();
  const userId = user._id;

  const socket = io(SERVER_HOST);

  const changeSuccessful = (element) => {
    element.classList.add("success");

    setTimeout(() => {
      element.classList.remove("success");
    }, 1500);
  };

  const handleChange = (e) => setDataToChange(e.target.value);
  const handleSaveClick = async (e) => {
    try {
      const serverRequest = await fetch(
        `${SERVER_HOST}/users/${userId}/${dataKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newValue: dataToChange,
          }),
        }
      );

      if (!serverRequest.ok) {
        throw new Error("Request failed");
      }

      const response = await serverRequest.json();
      

      if (response) {
        updateUserData({
          ...user,
          [dataKey]: dataToChange,
        });

        changeSuccessful(e.target);
        socket.emit("updateRooms");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="user-settings-input-container">
      <input
        type="text"
        className="user-settings-input"
        onChange={handleChange}
        value={dataToChange}
      />
      <button className="user-settings-button" onClick={handleSaveClick}>
        Save
      </button>
    </div>
  );
}

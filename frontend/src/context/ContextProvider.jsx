import { useEffect, useState } from "react";
import Context from "./service";

const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isTokenVerifed, setIsTokenVerifed] = useState(null);

  const [roomsList, setRoomsList] = useState([]);
  const [lastMessageId, setLastMessageId] = useState("");

  useEffect(() => {
    async function getRooms() {
      const RoomsBDResponse = await fetch("http://localhost:5007/rooms");
      const roomsList = await RoomsBDResponse.json();

      setRoomsList(roomsList);
    }

    getRooms();
  }, [lastMessageId]);

  const updateUserData = (data) => setUserData(data);
  const updateTokenVerify = (boolean) => setIsTokenVerifed(boolean);

  const updateRoomsList = (list) => setRoomsList(list);
  const updateLastMessageId = (idString) => setLastMessageId(idString);

  return (
    <Context.Provider
      value={{
        userData,
        updateUserData,

        isTokenVerifed,
        updateTokenVerify,

        roomsList,
        updateRoomsList,
        updateLastMessageId,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

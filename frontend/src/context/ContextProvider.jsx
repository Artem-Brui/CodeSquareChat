import { useEffect, useState } from "react";
import Context from "./service";
import darkModeSwitcher from "./darkModeSwitcher";

const currentMode = localStorage.getItem('colorMode').length ? localStorage.getItem('colorMode') : 'light';

const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isTokenVerifed, setIsTokenVerifed] = useState(null);

  const [roomsList, setRoomsList] = useState([]);
  const [lastMessageId, setLastMessageId] = useState('');

  const [colorMode, setColorMode] = useState(currentMode);

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

  const updateColorMode = () => {
    const newMode = colorMode === 'light' ? 'dark' : 'light';

    setColorMode(newMode);
  } 

  darkModeSwitcher(colorMode);

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

        updateColorMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

import { useEffect, useState } from "react";
import Context from "./service";
import darkModeSwitcher from "./darkModeSwitcher";

const currentMode = localStorage.getItem('colorMode') !== null ? localStorage.getItem('colorMode') : 'light';

const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [userData, setUserData] = useState({});
  const [isTokenVerifed, setIsTokenVerifed] = useState(null);

  const [roomsList, setRoomsList] = useState([]);
  const [lastMessageId, setLastMessageId] = useState('');

  const [colorMode, setColorMode] = useState(currentMode);

  const updateUserData = (data) => setUserData(data);
  const updateTokenVerify = (boolean) => setIsTokenVerifed(boolean);

  const updateRoomsList = (list) => setRoomsList(list);
  const updateLastMessageId = (idString) => setLastMessageId(idString);

  const updateColorMode = () => {
    const newMode = colorMode === 'light' ? 'dark' : 'light';

    setColorMode(newMode);
  } 

  useEffect(() => {
    const getRooms = async () => {
    try {
      const response = await fetch("http://localhost:5007/rooms");
      if (!response.ok) {
        throw new Error();
      }
      const rooms = await response.json();

      
      setRoomsList(rooms);
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  getRooms();
  }, [lastMessageId]);

  darkModeSwitcher(colorMode);


  if (!isLoading) {
  
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
    }
};

export default ContextProvider;

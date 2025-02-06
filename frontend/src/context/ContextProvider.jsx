import { useEffect, useState } from "react";
import Context from "./service";
import darkModeSwitcher from "./darkModeSwitcher";
import io from "socket.io-client";
import { SERVER_HOST } from "../services/Hosts";

const currentMode =
  localStorage.getItem("colorMode") !== null
    ? localStorage.getItem("colorMode")
    : "light";

const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [userData, setUserData] = useState({});
  const [isTokenVerifed, setIsTokenVerifed] = useState(false);
  const [roomsList, setRoomsList] = useState([]);
  const [colorMode, setColorMode] = useState(currentMode);
  const [lastPage, setLastPage] = useState('');

  const updateUserData = (data) => setUserData(data);
  const updateTokenVerify = (boolean) => setIsTokenVerifed(boolean);
  const updateRoomsList = (list) => setRoomsList(list);
  const updateLastPage = (path) => setLastPage(path);

  const updateColorMode = () => {
    const newMode = colorMode === "light" ? "dark" : "light";

    setColorMode(newMode);
  };

  useEffect(() => {
    const getRooms = async () => {
      try {
        const socket = io(SERVER_HOST);
        socket.on("rooms", (rooms) => {
          setRoomsList(rooms);
          setIsLoading(false);
        });
      } catch (error) {
        console.error(error);
      }

      return () => {
        socket.off("rooms");
        socket.disconnect();
      };
    };

    getRooms();
  }, []);

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
          
          updateColorMode,
          lastPage,
          updateLastPage,
        }}
      >
        {children}
      </Context.Provider>
    );
  }
};

export default ContextProvider;

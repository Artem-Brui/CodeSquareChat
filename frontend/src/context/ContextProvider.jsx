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
  const [rerender, setRerender] = useState(true);

  const [userData, setUserData] = useState({});
  const [isTokenVerifed, setIsTokenVerifed] = useState(false);

  const [roomsList, setRoomsList] = useState([]);

  const [colorMode, setColorMode] = useState(currentMode);

  const updateUserData = (data) => setUserData(data);
  const updateTokenVerify = (boolean) => setIsTokenVerifed(boolean);
  const updateRerender = (prev) => setRerender(!prev);
  const updateRoomsList = (list) => setRoomsList(list);

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
      };
    };

    getRooms();
  }, [rerender]);

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

          rerender,
          updateRerender,
          
          updateColorMode,
        }}
      >
        {children}
      </Context.Provider>
    );
  }
};

export default ContextProvider;

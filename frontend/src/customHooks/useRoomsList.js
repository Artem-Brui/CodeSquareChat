import { useContext } from "react";
import Context from "../context/service";

export default function useRoomsList() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Context not found...");
  }

  const { roomsList, updateRoomsList, updateLastMessageId } =
    context;

  const roomsListContext = {
    roomsList,
    updateRoomsList,
    updateLastMessageId,
  };

  if (!context) {
    throw new Error("Context is not defined!!..");
  }

  return roomsListContext;
}

import { DefaultEventsMap, Server } from "socket.io";
import Room from "../models/Room.js";
import { ObjectId } from "mongodb";
import User from "../models/User.js";

type serverType = Server<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap,
  any
>;

export default function webSocketServer(server: serverType) {
  server.on("connection", async (socket) => {
    try {
      const rooms = await Room.find();

      socket.emit("rooms", rooms);
    } catch (error) {
      console.error(error);
    }

    socket.on("addNewMessage", async (messageData) => {
      try {
        const { roomId, message, owner: ownerId } = messageData;
        const newDBObjectId = new ObjectId();

        const user = await User.findOne({ _id: ownerId });

        const date = new Date().toLocaleString('ru-RU');
        

        const newMessage = {
          _id: newDBObjectId,
          ownerId,
          owner: user?.displayName,
          message: message,
          creatingDate: date,
        };

        
        

        const room = await Room.findOne({id:roomId});

        if (room) {
          const updatedMessages = [...room.messages, newMessage];
    
          await Room.findOneAndUpdate({ id: roomId }, { messages: updatedMessages });
          
          const secondRequestRooms = await Room.find();

          if (secondRequestRooms) {
            server.emit("rooms", secondRequestRooms);
          }
        }

      } catch (error) {
        console.error(error);
      }
    });
  });
}

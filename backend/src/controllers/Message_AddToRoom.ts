import Room from "../models/Room.js";
import { Request, Response } from 'express';
import errorHandler from "./errorHandler.js";
import { RequestCallback, RoomParams } from "./types.js";

export const addMessageToRoom = async (req: Request<RoomParams>, res: Response) => {
  const { id } = req.params;
  const newMessage = {
    owner: "id",
    message: req.body.message
  };
  
  try {
    const room = await Room.findOne({ id: id });

    if (room) {
      const roomMessages = room.messages;
      const updatedMessages = [...roomMessages, newMessage]
      await Room.findOneAndUpdate({ id: id }, { messages: updatedMessages });
    }

    res.status(200).json(await Room.findOne({ id: id }));
  } catch (error) {
    errorHandler(res, error);
  }
};
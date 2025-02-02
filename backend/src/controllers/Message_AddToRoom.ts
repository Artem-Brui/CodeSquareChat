import Room from "../models/Room.js";
import { ObjectId } from 'mongodb';
import { Request, Response } from 'express';
import errorHandler from "./errorHandler.js";
import { RequestCallback, RoomParams } from "./types.js";

export const addMessageToRoom = async (req: Request<RoomParams>, res: Response) => {
  const { id } = req.params;
  const newDBObjectId = new ObjectId();

  const newMessage = {
    _id: newDBObjectId,
    owner: "id",
    message: req.body.message
  };
  
  try {
    const room = await Room.findOne({ id: id });

    if (room) {
      const updatedMessages = [...room.messages, newMessage]
      await Room.findOneAndUpdate({ id: id }, { messages: updatedMessages });

      const secondRequestRoom = await Room.findOne({ id: id });
      const secondRequestMessages = secondRequestRoom?.messages;

      secondRequestMessages
        ? res.status(200).json(secondRequestMessages[secondRequestMessages?.length - 1]._id)
        : res.status(404).json('Message not found')
    }
  } catch (error) {
    errorHandler(res, error);
  }
};
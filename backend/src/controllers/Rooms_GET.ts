import Room from "../models/Room.js";
import errorHandler from "./errorHandler.js";
import { RequestCallback } from "./types.js";

export const getRooms: RequestCallback = async (req, res) => {
  try {
    const response = await Room.find({});

    res.status(200).json(response);
  } catch (error) {
    errorHandler(res, error);
  }
};
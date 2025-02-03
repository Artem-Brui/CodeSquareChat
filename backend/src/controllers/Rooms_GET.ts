import Room from "../models/Room.js";
import errorHandler from "./errorHandler.js";
import isTokenVerif from "./isTokenVerif.js";
import { RequestCallback } from "./types.js";

export const getRooms: RequestCallback = async (req, res) => {
  const token = req.cookies.token;

  try {
    const roomsList = await Room.find({});

    res.status(200).json(roomsList);
  } catch (error) {
    errorHandler(res, error);
  }
};
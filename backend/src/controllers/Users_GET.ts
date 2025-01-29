import User from "../models/User.js";
import errorHandler from "./errorHandler.js";
import { RequestCallback } from "./types.js";

export const getUsers: RequestCallback = async (req, res) => {
  try {
    const response = await User.find({});

    res.status(200).json(response);
  } catch (error) {
    errorHandler(res, error);
  }
};
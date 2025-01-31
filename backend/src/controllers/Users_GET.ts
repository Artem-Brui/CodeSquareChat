import User from "../models/User.js";
import errorHandler from "./errorHandler.js";
import isTokenVerif from "./loginTokenVerify.js";
import { RequestCallback } from "./types.js";

export const getUsers: RequestCallback = async (req, res) => {
  const { token } = req.body;

  res.status(200).json(isTokenVerif(token));
};

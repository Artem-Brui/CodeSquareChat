import { Request, Response } from "express";
import User from "../models/User.js";
import errorHandler from "./errorHandler.js";
import { TokenVerifParams } from "./types.js";

export const deleteUser = async (
  req: Request<TokenVerifParams>,
  res: Response
) => {
  const { id } = req.params;

  const isUserExist = (await User.findOne({ _id: id })) !== null;

  if (!isUserExist) {
    res.status(500).json({
      response: "User doesn't exist in the database...",
      isUserExist: isUserExist,
    });
  } else {
    try {
      const response = await User.deleteOne({ _id: id });
  
      res.status(200).json({
        status: response.acknowledged,
        message: "User was deleted from the base!",
      });
    } catch (error) {
      errorHandler(res, error);
    }
  }
};

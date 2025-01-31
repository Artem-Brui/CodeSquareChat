import jwt from "jsonwebtoken";
import User from "../models/User.js";
import errorHandler from "./errorHandler.js";
import { RequestCallback, UserType } from "./types.js";
import bcrypt from "bcrypt";
import "dotenv/config";

const createToken = (id: string, lifeTime: number) => {
  const secretJWT = process.env.AUTH_TOKEN_SECRET || "";

  return jwt.sign({ id }, secretJWT, { expiresIn: lifeTime });
};

export const logInUser: RequestCallback = async (req, res) => {
  if (!req.body) {
    errorHandler(res, "Request body not found..");
  }

  const { email, password: inputPassword } = req.body;

  const user: UserType | null = (await User.findOne({ email: email })) || null;

  if (user === null) {
    errorHandler(res, "User doesn't exist in the database...");
  } else {
    try {
      const { password, _id, userName, displayName, birthDate } = user;

      if (typeof password !== "string") {
        return errorHandler(res, "Password is not a valid string");
      }

      const isVerifedPassword = await bcrypt.compare(inputPassword, password);

      if (!isVerifedPassword) {
        res.status(500).json({
          response: "Wrong password",
          isPasswordRight: false,
        });
      } else if (_id) {
        const cookieLifeTime = 24 * 60 * 60;
        const token = createToken(_id, cookieLifeTime);

        res.cookie("token", token, {
          httpOnly: true,
          maxAge: cookieLifeTime * 1000,
        });

        res.status(200).json({
          userName,
          displayName,
          birthDate,
        });
      } else {
        errorHandler(res, "_id is not a valid string");
      }
    } catch (error) {
      errorHandler(res, error);
    }
  }
};

import jwt from "jsonwebtoken";
import User from "../models/User.js";
import errorHandler from "./errorHandler.js";
import bcrypt from "bcrypt";
import "dotenv/config";
const createToken = (id) => {
    const secretJWT = process.env.AUTH_TOKEN_SECRET || "";
    return jwt.sign({ id }, secretJWT);
};
export const logInUser = async (req, res) => {
    if (!req.body) {
        res.status(500).json({
            response: "Request body not found..",
        });
    }
    const { _id, email, password } = req.body;
    const user = (await User.findOne({ email: email })) || null;
    if (user === null) {
        res.status(500).json({
            response: "User doesn't exist in the database...",
            isUserExist: false,
        });
    }
    else {
        try {
            const isVerifedPassword = await bcrypt.compare(password, user.password);
            if (!isVerifedPassword) {
                res.status(500).json({
                    response: "Wrong password",
                    isPasswordRight: false,
                });
            }
            else {
                const token = createToken(_id);
                res.cookie("token", token, {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000,
                });
                res.status(200).json({
                    responseMessage: "Logged In successfully!",
                    user: { id: _id, email },
                    logedIn: true,
                    token: token
                });
            }
        }
        catch (error) {
            errorHandler(res, error);
        }
    }
};

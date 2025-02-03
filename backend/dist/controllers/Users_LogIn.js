import jwt from "jsonwebtoken";
import User from "../models/User.js";
import errorHandler from "./errorHandler.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import isTokenVerif from "./isTokenVerif.js";
const createToken = (id, lifeTime) => {
    const secretJWT = process.env.AUTH_TOKEN_SECRET || "";
    return jwt.sign({ id }, secretJWT, { expiresIn: lifeTime });
};
export const logInUser = async (req, res) => {
    if (!req.body) {
        errorHandler(res, "Request body not found..");
    }
    const { email, password: inputPassword } = req.body;
    const user = (await User.findOne({ email: email })) || null;
    if (user === null) {
        errorHandler(res, "User doesn't exist in the database...");
    }
    else {
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
            }
            else if (_id) {
                const tokenLifeTime = 24 * 60 * 60;
                const token = createToken(_id, tokenLifeTime);
                await User.findByIdAndUpdate({ _id: _id }, { token: token });
                // res.cookie("token", token, {
                //   httpOnly: true,
                //   maxAge: cookieLifeTime * 1000,
                // });
                res.status(200).json({
                    userData: {
                        userName,
                        displayName,
                        birthDate,
                        _id,
                    },
                    isTokenVerif: isTokenVerif(token),
                });
            }
            else {
                errorHandler(res, "_id is not a valid string");
            }
        }
        catch (error) {
            errorHandler(res, error);
        }
    }
};

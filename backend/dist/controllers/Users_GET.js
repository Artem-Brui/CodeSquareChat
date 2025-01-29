import User from "../models/User.js";
import errorHandler from "./errorHandler.js";
export const getUsers = async (req, res) => {
    try {
        const response = await User.find({});
        res.status(200).json(response);
    }
    catch (error) {
        errorHandler(res, error);
    }
};

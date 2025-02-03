import Room from "../models/Room.js";
import errorHandler from "./errorHandler.js";
export const getRooms = async (req, res) => {
    const token = req.cookies.token;
    try {
        const roomsList = await Room.find({});
        res.status(200).json(roomsList);
    }
    catch (error) {
        errorHandler(res, error);
    }
};

import Room from "../models/Room.js";
import errorHandler from "./errorHandler.js";
export const addMessageToRoom = async (req, res) => {
    const { id } = req.params;
    const newMessage = {
        owner: "id",
        message: req.body.message
    };
    try {
        const room = await Room.findOne({ id: id });
        if (room) {
            const roomMessages = room.messages;
            const updatedMessages = [...roomMessages, newMessage];
            await Room.findOneAndUpdate({ id: id }, { messages: updatedMessages });
        }
        res.status(200).json(await Room.findOne({ id: id }));
    }
    catch (error) {
        errorHandler(res, error);
    }
};

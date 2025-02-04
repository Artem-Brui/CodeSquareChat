import User from "../models/User.js";
import errorHandler from "./errorHandler.js";
const logOutUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndUpdate({ _id: id }, { token: '' });
        res.status(200).json('Loged Out Successful');
    }
    catch (error) {
        errorHandler(res, error);
    }
};
export default logOutUser;

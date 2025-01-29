import express from 'express';
import { getUsers } from '../controllers/Users_GET.js';
import { signUpUser } from '../controllers/Users_SignUp.js';
import { logInUser } from '../controllers/Users_LogIn.js';
import { getRooms } from '../controllers/Rooms_GET.js';

const roomsRouter = express.Router();

roomsRouter.get('/', getRooms);


export default roomsRouter;
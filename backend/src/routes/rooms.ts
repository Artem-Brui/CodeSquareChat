import express from 'express';
import { getUsers } from '../controllers/Users_GET.js';
import { signUpUser } from '../controllers/Users_SignUp.js';
import { logInUser } from '../controllers/Users_LogIn.js';
import { getRooms } from '../controllers/Rooms_GET.js';
import { addMessageToRoom } from '../controllers/Message_AddToRoom.js';

const roomsRouter = express.Router();

roomsRouter.get('/', getRooms);
roomsRouter.post('/:id', addMessageToRoom);


export default roomsRouter;
import express from 'express';
import { getRooms } from '../controllers/Rooms_GET.js';
import { addMessageToRoom } from '../controllers/Message_AddToRoom.js';
const roomsRouter = express.Router();
roomsRouter.get('/', getRooms);
roomsRouter.post('/:id', addMessageToRoom);
export default roomsRouter;

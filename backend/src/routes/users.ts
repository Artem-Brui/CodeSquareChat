import express from 'express';
import { signUpUser, logInUser, getUsers } from '../controllers/controllers.js';

const usersRouter = express.Router();

usersRouter.get('/', getUsers);
usersRouter.post('/signup', signUpUser);
usersRouter.post('/login', logInUser);


export default usersRouter;
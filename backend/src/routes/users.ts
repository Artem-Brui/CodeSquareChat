import express from 'express';
import User from '../models/User.js';

const usersRouter = express.Router();

usersRouter.get('/', async (req, res) => {
  try {
    const response = await User.find({})

    res.status(200).json(response);
  } catch (error) {
    
  }
}) 


export default usersRouter;
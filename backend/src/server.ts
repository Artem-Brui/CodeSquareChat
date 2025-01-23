import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import usersRouter from './routes/users.js';
import doConnectBase from './database/DBconnection.js';
import mongoose from 'mongoose';

const port = process.env.PORT || 5007;

const app = express();
await doConnectBase();


app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);

const server = app.listen(port, () => {
  console.log(`app is listening in port ${port}...`);
})

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import usersRouter from './routes/users.js';
import doConnectBase from './database/DBconnection.js';
import roomsRouter from './routes/rooms.js';
const port = process.env.PORT || 5007;
const app = express();
await doConnectBase();
app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);
app.use('/rooms', roomsRouter);
const server = app.listen(port, () => {
    console.log(`app is listening in port ${port}...`);
});

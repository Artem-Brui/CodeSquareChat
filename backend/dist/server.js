import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import usersRouter from './routes/users.js';
import doConnectBase from './database/DBconnection.js';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import webSocketServer from './webSocket/socketServer.js';
const port = process.env.PORT || 5007;
const app = express();
const server = createServer(app);
const webSocket = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
await doConnectBase();
app.use('/users', usersRouter);
// app.use('/rooms', roomsRouter);
webSocketServer(webSocket);
server.listen(port, () => {
    console.log(`app is listening in port ${port}...`);
});

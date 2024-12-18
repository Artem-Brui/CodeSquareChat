import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import usersRouter from './routes/users.js';
import doConnectBase from './database/DBconnection.js';
const port = process.env.PORT;
const app = express();
await doConnectBase();
app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);
app.listen(port, () => {
    console.log('Server is listening...');
});

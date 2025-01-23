import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import usersRouter from './routes/users.js';
import doConnectBase from './database/DBconnection.js';
const port = process.env.PORT || 5007;
const app = express();
await doConnectBase();
app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);
const server = app.listen(port, () => {
    console.log(`app is listening in port ${port}...`);
});
// // Handle server shutdown
// const gracefulShutdown = () => {
//   console.log('Closing server and disconnecting from MongoDB...');
//   server.close(() => {
//     console.log('HTTP server closed.');
//     mongoose.disconnect()
//       .then(() => {
//         console.log('MongoDB connection closed.');
//         process.exit(0); // Exit process after cleanup
//       })
//       .catch((err) => {
//         console.error('Error during disconnection:', err);
//         process.exit(1); // Exit with failure code
//       });
//   });
// }
// // Listen for termination signals
// process.on('SIGINT', gracefulShutdown); // Ctrl+C
// process.on('SIGTERM', gracefulShutdown); // Kill signal

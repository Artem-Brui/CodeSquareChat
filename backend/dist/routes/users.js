import express from "express";
import { getUsers } from "../controllers/Users_GET.js";
import { signUpUser } from "../controllers/Users_SignUp.js";
import { logInUser } from "../controllers/Users_LogIn.js";
const usersRouter = express.Router();
usersRouter.get("/", getUsers);
usersRouter.post("/signup", signUpUser);
usersRouter.post("/login", logInUser);
export default usersRouter;

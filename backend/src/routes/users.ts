import express from "express";
import { TokenVerifGET } from "../controllers/TokenVerif_GET.js";
import { signUpUser } from "../controllers/Users_SignUp.js";
import { logInUser } from "../controllers/Users_LogIn.js";

const usersRouter = express.Router();

usersRouter.get("/:id", TokenVerifGET);
usersRouter.post("/signup", signUpUser);
usersRouter.post("/login", logInUser);

export default usersRouter;

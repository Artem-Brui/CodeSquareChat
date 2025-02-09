import express from "express";
import { TokenVerifGET } from "../controllers/TokenVerif_GET.js";
import { signUpUser } from "../controllers/Users_SignUp.js";
import { logInUser } from "../controllers/Users_LogIn.js";
import logOutUser from "../controllers/Users_LogOut.js";
import { Users_Update } from "../controllers/Users_Update.js";
import { deleteUser } from "../controllers/Users_Delete.js";

const usersRouter = express.Router();

usersRouter.get("/:id/token", TokenVerifGET);
usersRouter.post("/signup", signUpUser);
usersRouter.delete("/:id", deleteUser);
usersRouter.post("/login", logInUser);
usersRouter.post("/:id/logout", logOutUser);
usersRouter.post("/:id/:key", Users_Update);

export default usersRouter;

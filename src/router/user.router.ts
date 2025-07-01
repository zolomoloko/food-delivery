import  express  from "express";
import { createUser } from "../controller/Authentication/createUser.controller";
import { getByIdUser } from "../controller/Authentication/getById-User.controller";

const userRouter = express.Router();

userRouter.post("/", createUser)

userRouter.get("/:userId", getByIdUser)

export default userRouter;
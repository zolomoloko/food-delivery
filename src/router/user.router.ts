import  express  from "express";
import { addUser } from "../controller/Authentication/addUser.controller";
import { getByIdUser } from "../controller/Authentication/getById-User.controller";

const userRouter = express.Router();

userRouter.post("/", addUser)

userRouter.get("/:userId", getByIdUser)

export default userRouter;
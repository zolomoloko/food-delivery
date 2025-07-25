import  express  from "express";
import { addUser } from "../controller/Authentication/addUser.controller";
import { getByIdUser } from "../controller/Authentication/getById-User.controller";
import { login } from "../controller/Authentication/login.controller";
import { getCurrentUser } from "../controller/Authentication/get-current-user.controller";

const userRouter = express.Router();

userRouter.post("/", addUser)
userRouter.post("/login", login)
userRouter.get("/get-current-user", getCurrentUser)
userRouter.get("/:userId", getByIdUser)

export default userRouter;
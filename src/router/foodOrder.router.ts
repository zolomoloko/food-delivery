import  express  from "express";
import { createFoodOrder } from "../controller/foodOrder/create-foodOrder.controller";
import { getOrder } from "../controller/foodOrder/get-foodOrders.controller";
import { getByIdOrder } from "../controller/foodOrder/getById-foodOrder.controller";
import { putOrder } from "../controller/foodOrder/put-foodOrder.controller";

const foodOrderRouter = express.Router();
foodOrderRouter.post("/createFoodOrder", createFoodOrder);

foodOrderRouter.get("/getFoodOrder", getOrder);

foodOrderRouter.get("/getByIdFoodOrder/:userId", getByIdOrder);

foodOrderRouter.put("/:orderId", putOrder);

export default foodOrderRouter;
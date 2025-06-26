import  express  from "express";
import { createFood } from "../controller/food/ceate-food.controller";
import { getFood } from "../controller/food/get-food.controller";
import { deleteFood } from "../controller/food/delete-food.controller";
import { putFood } from "../controller/food/put-food.controller";
const foodRouter = express.Router();

foodRouter.post("/createFood", createFood)

foodRouter.get("/getFood/:foodId", getFood)

foodRouter.delete("/deleteFood/:foodId", deleteFood)

foodRouter.put("/putFood/:foodId", putFood)

export default foodRouter
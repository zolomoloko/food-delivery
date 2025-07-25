import express from "express";
import { createFood } from "../controller/food/create-food.controller";
import { getFood } from "../controller/food/get-food.controller";
import { deleteFood } from "../controller/food/delete-food.controller";
import { putFood } from "../controller/food/put-food.controller";
import { foodsWithCategories } from "../controller/food/get-food-with-categories";
const foodRouter = express.Router();

foodRouter.post("/", createFood);

foodRouter.get("/getFood/:foodId", getFood);

foodRouter.get("/getFoodsWithCategories", foodsWithCategories);

foodRouter.delete("/deleteFood/:foodId", deleteFood);

foodRouter.put("/:foodId", putFood);

export default foodRouter;

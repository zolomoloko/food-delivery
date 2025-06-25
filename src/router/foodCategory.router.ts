import  express  from "express";
import { createFoodCategory } from "../controller/foodCategory/create-food-category.controller";

const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/createCategory", createFoodCategory);

export default foodCategoryRouter;
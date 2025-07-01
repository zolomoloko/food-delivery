import  express  from "express";
import { createFoodCategory } from "../controller/foodCategory/create-food-category.controller";
import { getCategories } from "../controller/foodCategory/get-categories.controller";
import { deleteCategory } from "../controller/foodCategory/delete-category.controller";
import { putCategory } from "../controller/foodCategory/put-category.controller";

const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/", createFoodCategory);

foodCategoryRouter.get("/", getCategories)

foodCategoryRouter.delete("/deleteCategory/:id", deleteCategory)

foodCategoryRouter.put("/putCategory/:id", putCategory)

export default foodCategoryRouter;
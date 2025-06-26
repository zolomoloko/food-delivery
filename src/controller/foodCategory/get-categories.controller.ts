import { Request, Response } from "express";
import FoodCategory from "../../model/foodCategory";

export const getCategories = async (req: Request, res: Response) => {
    try {
        const foodCategory = await FoodCategory.find()
        res.status(200).send({ success: true, foodCategory });
    } catch (error) {
        res.status(400).send({ message: "api error", error });
    }
};
import { Request, Response } from "express";
import FoodCategory from "../../model/foodCategory";

export const putCategory = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { categoryName } = req.body
    try {
         const foodCategory = await FoodCategory.findByIdAndUpdate(id, {$set: {categoryName}});
        res.status(200).send({ success: true, foodCategory });
    } catch (error) {
         res.status(400).send({ message: "api error", error });
    }
}
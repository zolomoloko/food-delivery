import { Request, Response } from "express";
import Food from "../../model/food";

export const putFood = async (req: Request, res: Response) => {
    const { foodId } = req.params;
    const { foodName } = req.body
    try {
         const food = await Food.findByIdAndUpdate(foodId, {$set: {foodName}});
        res.status(200).send({ success: true, food });
    } catch (error) {
         res.status(400).send({ message: "api error", error });
    }
} 
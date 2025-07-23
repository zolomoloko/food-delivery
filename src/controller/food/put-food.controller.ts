import { Request, Response } from "express";
import { Food } from "../../model/food";

export const putFood = async (req: Request, res: Response) => {
    const { foodId } = req.params;
    const { price } = req.body
    try {
         const food = await Food.findByIdAndUpdate(foodId, {$set: {price}});
        res.status(200).send({ success: true, food });
    } catch (error) {
         res.status(400).send({ message: "api error", error });
    }
} 
import { Request, Response } from "express";
import FoodOrder from "../../model/foodOrder";


export const getOrder = async (req: Request, res: Response) => {
    try {
        const foodCategory = await FoodOrder.find()
        res.status(200).send({ success: true, foodCategory });
    } catch (error) {
        res.status(400).send({ message: "api error", error });
    }
};
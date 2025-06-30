import { Request, Response } from "express";
import { FoodOrder } from "../../model/foodOrder";
export const putOrder = async (req: Request, res: Response) => {
    const { orderId } = req.params;
    // const { categoryName } = req.body
    try {
         const foodOrder = await FoodOrder.findByIdAndUpdate(orderId, {$set: {}});
        res.status(200).send({ success: true, foodOrder });
    } catch (error) {
         res.status(400).send({ message: "api error", error });
    }
}
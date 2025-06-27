import { Request, Response } from "express";
import FoodOrderItem from "../../model/foodOrderItem";

export const orderItem = async (req: Request, res: Response) => {
  const { food, quantity } = req.body;
  try {
    const item = await new FoodOrderItem({
      food,
      quantity,
    }).save();
    res.status(200).send({ success: true, item });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};

import { Request, Response } from "express";
import { FoodOrder } from "../../model/foodOrder";


export const createFoodOrder = async (req: Request, res: Response) => {
  const { user, foodOrderItems, totalPrice, status } = req.body;
  try {
    const foodOrder= await new FoodOrder({
      user,
      foodOrderItems,
      totalPrice,
      status,
    }).save();

    res.status(200).send({ success: true, foodOrder });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};

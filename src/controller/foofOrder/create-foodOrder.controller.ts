import { Request, Response } from "express";
import FoodCategory from "../../model/foodCategory";
import FoodOrder from "../../model/foodOrder";

export const createFoodOrder = async (req: Request, res: Response) => {
  const { foodOrderItems } = req.body;
  try {
    const foodOrder= await new FoodOrder({
      foodOrderItems: foodOrderItems,
    }).save();

    res.status(200).send({ success: true, foodOrder });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};

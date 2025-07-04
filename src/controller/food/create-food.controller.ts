import { Request, Response } from "express";
import { Food, FoodSchemaType } from "../../model/food";

export const createFood = async (req: Request, res: Response) => {
  const { foodName, price, image, ingredients, category }: FoodSchemaType =
    req.body;

  try {
    const food = await new Food({
      foodName,
      price,
      image,
      ingredients,
      category,
    }).save();

    res.status(200).send({ success: true, food });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "api error", error });
  }
};

import { Request, Response } from "express";
import { Food } from "../../model/food";
import FoodCategory from "../../model/foodCategory";

export const foodsWithCategories = async (_req: Request, res: Response) => {
  try {
    const foodsWithCategories = await FoodCategory.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "category",
          as: "foods",
        },
      },
      {
        $project: {
          categoryName: "$categoryName",
          count: { $size: "$foods" },
          foods: "$foods",
        },
      },
      {
        $sort: { categoryName: 1 },
      },
    ]);

    res
      .status(200)
      .send({ success: true, foodsWithCategories: foodsWithCategories });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};

import { Request, Response } from "express";
import { Food } from "../../model/food";

export const getFoodsWithCategories = async (_req: Request, res: Response) => {
  try {
    const getFoodsWithCategories = await Food.aggregate([
      {
        $lookup: {
          from: "foodcategories",
          localField: "category",
          foreignField: "_id",
          as: "categoryDetails",
        },
      },
      {
        $unwind: "$categoryDetails",
      },
      {
        $group: {
          _id: "$categoryDetails._id",
          categoryName: {
            $first: "$categoryDetails.categoryName",
          },
          foods: {
            $push: {
              _id: "$_id",
              foodName: "$foodName",
              price: "$price",
              image: "$image",
              ingredients: "$ingredients",
            },
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    res.status(200).send({ success: true, getFoodsWithCategories });
  } catch (error){
    res.status(400).send({ message: "api error", error });
  }
};

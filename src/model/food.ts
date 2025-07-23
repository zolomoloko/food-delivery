import { model, Schema } from "mongoose";

export type FoodSchemaType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: Schema.Types.ObjectId;
};

const foodSchema = new Schema<FoodSchemaType>(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
  },
  { timestamps: true }
);
export const Food = model<FoodSchemaType>("Food", foodSchema);

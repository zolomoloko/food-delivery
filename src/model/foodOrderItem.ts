import { model, Schema } from "mongoose";

const foodOrderItemSchema = new Schema({
    food: { type: Schema.Types.ObjectId, ref: "Food", required: true},
    quantity: { type: Number, default: true},
});
const FoodOrderItem = model ("FoodOrderItem", foodOrderItemSchema);
export default FoodOrderItem;
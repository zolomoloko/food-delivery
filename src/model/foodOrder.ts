import { model, Schema } from "mongoose";

const foodOrderSchema = new Schema({
    user: {},
    totalPrice: { type: String, required: true},
    foodOrderItems: {},
    status: {},
    cleatedAt: { type: Date, default: Date.now()},
    updatedAt: { type: Date, default: Date.now()},
});
const FoodOrder = model ("FoodOrder", foodOrderSchema);
export default FoodOrder;
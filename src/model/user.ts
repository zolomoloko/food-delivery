import { model, Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
//   role: { type: Schema.Types.ObjectId, ref: "FoodCategory", required: true },
  isVerified: { type: Boolean, required: true },
  cleatedAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
const User = model("User", userSchema);
export default User;

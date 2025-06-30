import { model, Schema } from "mongoose";

enum UserRoleEnum {
  USER = "USER",
  ADMIN = "ADMIN",
}
const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  role: {
    type: String,
    require: true,
    default: UserRoleEnum.ADMIN,
    enum: Object.values(UserRoleEnum),
  },
  isVerified: { type: Boolean, required: true },
  cleatedAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
export const  User = model("User", userSchema);
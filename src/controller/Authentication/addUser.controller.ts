import { Request, Response } from "express";
import { User } from "../../model/user";
import bcrypt from "bcrypt";

export const addUser = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, address } = req.body;
  // bcrypt → Хэрэглэгчийн нууц үгийг хамгаалдаг криптограф сан.
  //10 → Salt rounds буюу hash хийх процесс хэдэн удаа давтагдахыг заана.
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      isVerified: false,
    });

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ message: "false", error });
  }
};

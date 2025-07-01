import { Request, Response } from "express";
import { User } from "../../model/user";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, address } = req.body;
  try {
    const user = await new User({
      email,
      password,
      phoneNumber,
      address,
    }).save();

    res.status(200).send({ success: true, user });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};

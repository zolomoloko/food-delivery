import { Request, Response } from "express";
import { User } from "../../model/user";
import jwt from "jsonwebtoken"

export const getCurrentUser = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new Error("Authorization not found");
  }
  const token = authHeader?.split(" ")[1] || "";

  try {
    const secret = "super-secret-123"
    const isVerified = jwt.verify (token, secret) as jwt.JwtPayload;

if (!isVerified) {
    throw new Error("User not found")
}
    res.status(200).json({ user: isVerified?.data });
  } catch (error) {}
};
//cloudinary
//
//backend deploy
//nodemail

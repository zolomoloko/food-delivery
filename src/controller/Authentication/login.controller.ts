import { Request, Response } from "express";
import { User } from "../../model/user";

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        //findOne - gedeg m zuvhun neg hereglegch oloh
        const user = await User.findOne({
            email,
        });
        if
    }
};

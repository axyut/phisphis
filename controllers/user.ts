import { NotFoundError, BadRequestError } from "../errors/index";
import { StatusCodes as Code } from "http-status-codes";
import bcrypt from "bcryptjs";
import User from "../models/User";

export const userInfo = async (user_id: string) => {
    try {
        const user = await User.findOne({ uuid: user_id });
        if (!user) {
            throw new NotFoundError("User not found.");
        }

        return user;
    } catch (error: any) {
        console.log(error);
        throw new BadRequestError(error.message || error.name || error.msg);
    }
};

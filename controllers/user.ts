import { NotFoundError, BadRequestError } from "../errors/index";
import { StatusCodes as Code } from "http-status-codes";
import bcrypt from "bcryptjs";
import { User } from "../models/User";

export const userInfo = async (req: any, res: any) => {
  const { firstName, lastName, email, uuid } = req.userFound;

  res.status(Code.ACCEPTED).json({
    firstName,
    lastName,
    email,
    uuid,
  });
};

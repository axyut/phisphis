import { Request, Response } from "express";
import { StatusCodes as Code } from "http-status-codes";
import bcrypt from "bcryptjs";
import { User } from "../models/User";
import { BadRequestError, CustomAPIError, NotFoundError } from "../errors";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  const { firstName, lastName, email, phone, password } = req.body;

  if (!firstName || !email || !password) {
    throw new BadRequestError("Fill all the required fields!");
  }

  try {
    if (await User.findOne({ email })) {
      throw new BadRequestError("User already Exists!");
    }
    const user = new User({
      firstName,
      lastName,
      email,
      phone,
      password,
    });

    await user.save();
    console.log(`${firstName} Registered.`);
    res.status(Code.CREATED).json({ msg: "User Successfully Created!" });
  } catch (error: any) {
    console.log(error);
    throw new CustomAPIError(error.message || error.name || error.msg);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new BadRequestError("Fill all the required fields!");
    }
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      const verifiedPassword = await bcrypt.compare(
        password,
        userExist.password
      );
      if (verifiedPassword) {
        const token = await createToken(email);
        console.log(`${userExist.firstName} Logged In.`);

        res.status(Code.ACCEPTED).json({
          msg: "Login Successful!",
          token,
        });
      }
    } else {
      throw new NotFoundError("Invalid Credentials");
    }
  } catch (error: any) {
    console.log(error);
    throw new CustomAPIError(error.message || error.name || error.msg);
  }
};

export const deleteAll = async (req: Request, res: Response) => {
  await User.deleteMany();
  res.status(Code.GONE).json({ msg: "All Users Deleted Successfully!" });
};

// JWT token
const createToken = async function(email: String) {
  try {
    const userA = await User.findOne({ email })
    if (!userA) {
      return null
    }

    let sendToken = jwt.sign(
      {
        uuid: userA.uuid,
        firstName: userA.firstName,
        lastName: userA.lastName,
        email: userA.email,
        role: userA.role,
      },
      String(process.env.JWT_SECRET),
      { expiresIn: "1h" }
    );

    const tokens = [...userA.tokens, ...[{ token: sendToken }]];
    const updated = await User.updateOne({ email }, { tokens });

    return sendToken;
  } catch (error) {
    console.log(error);
  }
};

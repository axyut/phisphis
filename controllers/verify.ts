import { Request, Response } from "express";
import "dotenv/config";

const { NotFoundError, UnauthenticatedError } = require("../errors");
// const { StatusCodes: Code } = require("http-status-codes");
import { StatusCodes as Code } from "http-status-codes";
import User from "../models/User";
import jwt from "jsonwebtoken";
import { UserInfo } from "../utils/types";

const verifyJWT = async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthenticatedError("Please get token.");
    }
    try {
        const token = authHeader.split(" ")[1];

        const verifiedUser = jwt.verify(
            token,
            String(process.env.JWT_SECRET)
        ) as UserInfo;

        const userFound = await User.findOne({
            uuid: verifiedUser.uuid,
            email: verifiedUser.email,
            "tokens.token": token,
        }).select("-_id firstName lastName email uuid");

        if (!userFound) {
            throw new NotFoundError("User not logged in.");
        }
        console.log("User checked!");
        res.status(Code.ACCEPTED).json({ userFound });
    } catch (error: any) {
        if (
            error.message ||
            error.name == "jwt expired" ||
            "TokenExpiredError"
        ) {
            res.status(Code.FORBIDDEN).json({
                msg: error.name + " :" + error.message,
            });
            console.log(error.name + " :" + error.message);
        } else {
            res.status(Code.BAD_REQUEST).json({ msg: "Unauthorized Access." });
            console.log(error);
        }
    }
};

export default verifyJWT;

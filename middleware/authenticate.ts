import "dotenv/config";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import { UserInfo } from "../utils/types";

export const authenticate = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new Error("Please get token.");
        }
        const token = authHeader.split(" ")[1];

        const verifyToken = jwt.verify(
            token,
            String(process.env.JWT_SECRET)
        ) as UserInfo;
        const userFound = await User.findOne({
            uuid: verifyToken.uuid,
            "tokens.token": token,
        }).select("-_id firstName lastName email uuid");

        if (!userFound) {
            throw new Error("User not found.");
        }

        req.body.user = userFound;

        console.log("Sucessfully Authenticated.");
        next();
    } catch (error: any) {
        if (error.message == "jwt expired") {
            res.status(500).json({ message: error.message });
            console.log(error);
        } else if (error.message == "jwt malformed") {
            // redo the function
            // authenticate(req, res, next);
            res.status(500).json({ message: error.message });
            console.log(error);
        } else {
            res.status(500).json({ message: "Unauthorized Access." });
            console.log(error);
        }
    }
};

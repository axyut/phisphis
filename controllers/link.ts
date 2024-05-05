import { Request, Response } from "express";

export const newlink = async (req: Request, res: Response) => {
    res.send("New Link");
};

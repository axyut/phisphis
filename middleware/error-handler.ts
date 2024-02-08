import { StatusCodes } from "http-status-codes";
import { Request as Req, Response as Res, NextFunction as Next } from "express";

export const errorHandler = (err: any, req: Req, res: Res, next: Next) => {
  // Default Error

  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || err.msg || "Something went wrong try again later",
  };

  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item: any) => item.message)
      .join(",");
    customError.statusCode = 400;
  }

  if (err.name === "CastError") {
    customError.msg = `No item found with id : ${err.value}`;
    customError.statusCode = 404;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};
export const notFound = (req: Req, res: Res) =>
  res.status(StatusCodes.NOT_FOUND).json({ msg: "Route doesn't Exist!" });

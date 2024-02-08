import { CustomAPIError } from "./custom-api";
import { StatusCodes } from "http-status-codes";

export class BadRequestError extends CustomAPIError {
  constructor(message: string, private statusCode?: StatusCodes) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

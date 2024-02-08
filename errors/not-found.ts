import { CustomAPIError } from "./custom-api";
import { StatusCodes } from "http-status-codes";

export class NotFoundError extends CustomAPIError {
  constructor(message: string, private statusCode?: StatusCodes) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

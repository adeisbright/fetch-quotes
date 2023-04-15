import constant from "../../constant";
import BaseError from "./BaserError";

class BadRequestError extends BaseError {
    name: string;
    statusCode: number;
    message: string;
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, BadRequestError.prototype);
        this.name = constant.errorName.badRequest;
        this.statusCode = constant.statusCode.BAD_REQUEST;
        this.message = msg;
    }
}

export default BadRequestError;

import constant from "../../constant";
import BaseError from "./BaserError";

class ForbiddenError extends BaseError {
    name: string;
    statusCode: number;
    message: string;
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, ForbiddenError.prototype);
        this.name = constant.errorName.forbidden;
        this.statusCode = constant.statusCode.FORBIDDEN;
        this.message = msg;
    }
}

export default ForbiddenError;

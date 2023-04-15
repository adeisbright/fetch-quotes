import constant from "../../constant";
import BaseError from "./BaserError";

class NotAuthorizeError extends BaseError {
    name: string;
    statusCode: number;
    message: string;
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, NotAuthorizeError.prototype);
        this.name = constant.errorName.notAuthorize;
        this.statusCode = constant.statusCode.UNAUTHORIZED;
        this.message = msg;
    }
}

export default NotAuthorizeError;

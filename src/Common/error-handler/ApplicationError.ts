import constant from "../../constant";
import BaseError from "./BaserError";

class ApplicationError extends BaseError {
    name: string;
    statusCode: number;
    message: string;
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, ApplicationError.prototype);
        this.name = constant.errorName.serverError;
        this.statusCode = constant.statusCode.INTERNAL_SERVER_ERROR;
        this.message = msg;
    }
}

export default ApplicationError;

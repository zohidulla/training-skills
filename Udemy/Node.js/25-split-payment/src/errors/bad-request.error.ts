import BaseError from "@/errors/base.error";
import {ErrorCode} from "@/enums/error-cede.enum";
import {StatusCode} from "@/enums/status-code.enum";

class BadRequestError extends BaseError {
    public code: ErrorCode;
    public data?: any;

    constructor(code: ErrorCode, data?: any) {
        super(code, StatusCode.BadRequest, data);

        this.code = code;
        this.data = data;
    }
}

export default BadRequestError;
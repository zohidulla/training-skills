import BaseError from "@/errors/base.error";
import {ErrorCode} from "@/enums/error-cede.enum";
import {StatusCode} from "@/enums/status-code.enum";

class UnAuthorizedError extends BaseError {
    public code: ErrorCode;
    public data?: any;

    constructor(code: ErrorCode, data?: any) {
        super(code, StatusCode.UnAuthorized, data);

        this.code = code;
        this.data = data;
    }
}

export default UnAuthorizedError;
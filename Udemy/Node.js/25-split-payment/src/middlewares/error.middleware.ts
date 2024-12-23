import {NextFunction, Request, Response} from "express";
import {ErrorCode} from "@/enums/error-cede.enum";
import {StatusCode} from "@/enums/status-code.enum";

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction): void => {
    const name = error?.name;
    const message = error?.data || error?.message;

    let statusCode = error.statusCode || StatusCode.ServerError;

    if (name === ErrorCode.ValidationError) {
        statusCode = StatusCode.BadRequest;
    }

    res.status(statusCode).json({
        error: {
            name: name || ErrorCode.InternalServerError,
            message: message?.length ? message : undefined,
        }
    });

    next();
}
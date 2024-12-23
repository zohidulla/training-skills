import {plainToInstance} from 'class-transformer';
import {validate, ValidationError, ValidatorOptions} from 'class-validator';
import BadRequestError from '@/errors/bad-request.error';
import {ErrorCode} from "@/enums/error-cede.enum";

export const validation = async (
    type: any,
    body: any,
    options?: {
        skipMissingProperties?: boolean,
        whitelist?: boolean;
        forbidNonWhitelisted?: boolean;
    },
): Promise<void> => {
    const validatorOptions: ValidatorOptions = {
        skipMissingProperties: options?.skipMissingProperties || false,
        whitelist: options?.whitelist || false,
        forbidNonWhitelisted: options?.forbidNonWhitelisted || false,
    };

    const errors: ValidationError[] = await validate(plainToInstance(type, body), validatorOptions);

    if (errors.length > 0) {
        const message = validationMessageFormatter(errors);

        throw new BadRequestError(ErrorCode.ValidationError, message);
    }
}

const validationMessageFormatter = (errors: ValidationError[], initialMessage?: any, parentField?: string): string => {
    const messages = initialMessage || {};

    let errorField = '';

    errors.forEach(error => {
        errorField = parentField ? `${parentField}.${error.property}` : error.property;

        const isChildError = !error.constraints && error.children;
        if (isChildError) {
            validationMessageFormatter(error.children as ValidationError[], messages, errorField);
        } else {
            type constraintsType = { [type: string]: string; }
            const validationList = Object.values(error.constraints as constraintsType);

            messages[errorField] = validationList.join(', ') || 'Invalid value'
        }
    })

    return Object.entries(messages).reduce((prevValue, [key, value]) => {
        return `${prevValue ? prevValue + ', ': ''}${key}: ${value}`;
    }, '');
}
import {IsDate, IsEnum, IsInt, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {PayzeTransactionStatus} from "@/enums/payze-transaction-status.enum";

export class CreatePayzeTransactionDto {
    @IsString()
    @IsNotEmpty()
    readonly transactionId: string;

    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    readonly orderId: string;

    @IsInt()
    @IsNotEmpty()
    readonly amount: number;
}

export class UpdateTransactionRepoDto extends CreatePayzeTransactionDto {
    readonly status?: PayzeTransactionStatus;
    readonly cardMask?: string;
    readonly performTime?: number;
    readonly cancelTime?: number;
    readonly blockedTime?: number;
}

export class PayzeTransactionHookDto {
    @IsNotEmpty()
    @IsString()
    @IsEnum(PayzeTransactionStatus)
    readonly PaymentStatus: PayzeTransactionStatus;

    @IsString()
    @IsNotEmpty()
    readonly CardMask: string;

    @IsNumber()
    @IsNotEmpty()
    readonly Amount: number;

    @IsString()
    @IsNotEmpty()
    readonly PaymentId: string;

    @IsNumber()
    @IsOptional()
    readonly CaptureDate: number;

    @IsNumber()
    @IsOptional()
    readonly BlockDate: number;
}
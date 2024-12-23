import 'reflect-metadata';

import {
    IsArray, IsEnum,
    IsInt,
    IsMongoId,
    IsNotEmpty,
    IsObject,
    IsPhoneNumber,
    IsString,
    ValidateNested
} from "class-validator";
import {Type} from "class-transformer";
import {PaymentProvider} from "@/enums/payment-provider.enum";
import {OrderStatus} from "@/enums/order-status.enum";

class OrderUser {
    @IsString()
    @IsNotEmpty()
    readonly fullName: string;

    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber()
    readonly phone: string;
}

class OrderProduct {
    @IsString()
    @IsNotEmpty()
    @IsMongoId()
    readonly productId: string;

    @IsInt()
    @IsNotEmpty()
    readonly count: number;
}

export class CreateOrderDto {
    @IsObject()
    @Type(() => OrderUser)
    readonly user: OrderUser;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OrderProduct)
    readonly products: OrderProduct[];

    @IsString()
    @IsNotEmpty()
    @IsEnum(PaymentProvider)
    readonly paymentProvider: PaymentProvider;
}

export class CreateOrderRepoDto extends CreateOrderDto {
    readonly paidPrice: number;
}

export class UpdateOrderDto extends CreateOrderRepoDto {
    readonly status: OrderStatus;
}

export class UpdateOrderRepoDto extends UpdateOrderDto {
    readonly performedAt?: Date;
    readonly canceledAt?: Date;
}
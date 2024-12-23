import {Types} from "mongoose";
import {PaymentProvider} from "@/enums/payment-provider.enum";
import {OrderStatus} from "@/enums/order-status.enum";

export interface IOrder {
    _id: Types.ObjectId;
    user: IOrderUser;
    products: Array<IOrderProduct>;
    paidPrice: number;
    paymentProvider: PaymentProvider;
    status: OrderStatus;
    performedAt?:Date;
    canceledAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

interface IOrderProduct {
    productId: Types.ObjectId;
    count: number;
}

interface IOrderUser {
    fullName: string;
    phone: string;
}

export interface IPayzeTransactionResponse {
    response: {
        transactionUrl: string;
        transactionId: string;
    }
}
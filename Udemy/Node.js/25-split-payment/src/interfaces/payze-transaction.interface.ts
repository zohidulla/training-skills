import {PayzeTransactionStatus} from "@/enums/payze-transaction-status.enum";

export interface IPayzeTransaction {
    transactionId: string;
    orderId: string;
    amount: number;
    status: PayzeTransactionStatus;
    cardMask?: string;
    performTime?: string;
    cancelTime?: Date;
    blockedTime?: Date;
    createdAt: Date;
    updatedAt: Date;
}
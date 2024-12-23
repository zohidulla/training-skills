import { Document, model, Schema } from 'mongoose';
import {PayzeTransactionStatus} from "@/enums/payze-transaction-status.enum";
import {IPayzeTransaction} from "@/interfaces/payze-transaction.interface";

const payzeTransactionSchema = new Schema({
    transactionId: {
        type: String,
        required: true,
    },
    orderId: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: Object.values(PayzeTransactionStatus),
        default: PayzeTransactionStatus.Draft,
    },
    cardMask: {
        type: String,
    },
    performTime: {
        type: Number,
    },
    cancelTime: {
        type: Number,
    },
    blockedTime: {
        type: Number,
    }
}, {
    timestamps: true,
});

export default model<IPayzeTransaction & Document>('payze-transaction', payzeTransactionSchema)

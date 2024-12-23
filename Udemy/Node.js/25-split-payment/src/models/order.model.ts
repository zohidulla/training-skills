import {model, Schema, Document, Types} from 'mongoose';

import { IOrder } from '@/interfaces/order.interface';
import {PaymentProvider} from "@/enums/payment-provider.enum";
import {OrderStatus} from "@/enums/order-status.enum";

const orderSchema = new Schema({
    user: {
        _id: false,
        type: {
            fullName: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
        },
        required: true,
    },
    products: {
        _id: false,
        type: [
            {
                productId: {
                    type: Types.ObjectId,
                    required: true,
                    ref: 'product'
                },
                count: {
                    type: Number,
                    default: 1,
                }
            }
        ],
        required: true,
    },
    paymentProvider: {
        type: String,
        enum: Object.values(PaymentProvider),
        default: PaymentProvider.Payze,
    },
    status: {
        type: String,
        enum: Object.values(OrderStatus),
        default: OrderStatus.Pending,
    },
    paidPrice: {
        type: Number,
        required: true,
    },
    performedAt: {
        type: Date,
    },
    canceledAt: {
        type: Date,
    }
}, {
    timestamps: true,
});

export default model<IOrder & Document>('order', orderSchema);
import OrderRepo from "@/repositories/order.repo";
import {CreateOrderDto} from "@/dtos/order.dto";
import {IOrder, IPayzeTransactionResponse} from "@/interfaces/order.interface";
import ProductRepo from "@/repositories/product.repo";
import NotFoundError from "@/errors/not-found.error";
import {ErrorCode} from "@/enums/error-cede.enum";
import {PaymentProvider} from "@/enums/payment-provider.enum";

import { environments } from '@/config/environment.config';
import { generateToken } from '@/middlewares/transaction.middleware';
import { getPayzeApi } from '@/utils/axios.util'
import PayzeTransactionRepo from "@/repositories/payze-transaction.repo";

class OrderService {
    public orderRepo = new OrderRepo();
    public productRepo = new ProductRepo();
    public payzeTransactionRepo = new PayzeTransactionRepo();

    public create = async (data: CreateOrderDto): Promise<string> => {
        const { paymentProvider, products } = data;

        let paidPrice = 0;
        for (const { productId, count } of products) {
            const product = await this.productRepo.getById(productId);
            if (!product) throw new NotFoundError(ErrorCode.ProductNotFound);

            const { price } = product;

            paidPrice += price * count;
        }

        const order = await this.orderRepo.create({...data, paidPrice});

        let paymentUrl: string;
        switch (paymentProvider) {
            case PaymentProvider.Payze:
                paymentUrl = await this.createPayzeUrl(order);
                break;
            default:
                paymentUrl = '';
        }

        return paymentUrl;
    }

    private createPayzeUrl = async (order: IOrder): Promise<string> => {
        const { PAYZE_API_URL, PAYZE_API_KEY, PAYZE_API_SECRET, TOKEN_SECRET, TOKEN_EXPIRE_TIME, PAYZE_HOOK_API_URL } = environments;

        const { paidPrice, _id: orderId } = order;

        const token = await generateToken({ orderId: orderId.toString() }, TOKEN_SECRET, TOKEN_EXPIRE_TIME);

        const api = getPayzeApi();

        const data = {
            method: 'justPay',
            apiKey: PAYZE_API_KEY,
            apiSecret: PAYZE_API_SECRET,
            data: {
                amount: paidPrice,
                currency: "UZS",
                callback: "https://example.com",
                callbackError: "https://example.com/error",
                preauthorize: false,
                lang: "EN",
                hookUrlV2: `${PAYZE_HOOK_API_URL}?authorization_token=${token}`
            }
        }

        const { data: result } = await api.post<IPayzeTransactionResponse>('/', data);

        await this.payzeTransactionRepo.create({
            orderId: orderId.toString(),
            transactionId: result.response.transactionId,
            amount: paidPrice,
        });

        return result.response.transactionUrl;
    }
}

export default OrderService;
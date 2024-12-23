import PayzeTransactionRepo from "@/repositories/payze-transaction.repo";
import {PayzeTransactionHookDto} from "@/dtos/payze-transaction.dto";
import {verify} from "@/middlewares/transaction.middleware";
import {environments} from "@/config/environment.config";
import OrderRepo from "@/repositories/order.repo";
import NotFoundError from "@/errors/not-found.error";
import {ErrorCode} from "@/enums/error-cede.enum";
import UnAuthorizedError from "@/errors/un-authorized.error";
import {PayzeTransactionStatus} from "@/enums/payze-transaction-status.enum";
import {OrderStatus} from "@/enums/order-status.enum";

class PayzeTransactionService {
    public payzeTransactionRepo = new PayzeTransactionRepo();
    public orderRepo = new OrderRepo();

    public hook = async (data: PayzeTransactionHookDto, token: string): Promise<void> => {
        const {
            PaymentStatus: status,
            CardMask: cardMask,
            CaptureDate: performTime,
            BlockDate: blockedTime,
            PaymentId: transactionId,
            Amount: amount,
        } = data;

        const { TOKEN_SECRET } = environments;
        const { orderId: orderId } = await verify(token, TOKEN_SECRET);

        if (!orderId) throw new UnAuthorizedError(ErrorCode.UnAuthorized);

        const order = await this.orderRepo.getById(orderId);
        if (!order) throw new NotFoundError(ErrorCode.OrderNotFound);

        const payzeTransaction = await this.payzeTransactionRepo.getByTransactionId(transactionId);
        if (!payzeTransaction) throw new NotFoundError(ErrorCode.PayzeTransactionNotFound);

        switch (status) {
            case PayzeTransactionStatus.Draft: {
                const transaction = await this.payzeTransactionRepo.getByTransactionId(transactionId);
                if (!transaction) {
                    await this.payzeTransactionRepo.create({
                        amount: amount,
                        transactionId: transactionId,
                        orderId: orderId,
                    });
                }
                break;
            }
            case PayzeTransactionStatus.Captured: {
                await this.updateOrder(orderId, { status: OrderStatus.Paid, performedAt: new Date() });

                await this.updatePayzeTransaction(transactionId, { status: status, cardMask: cardMask, performTime: performTime || Date.now() });
                break;
            }

            case PayzeTransactionStatus.Blocked: {
                await this.updateOrder(orderId, { status: OrderStatus.Canceled, canceledAt: new Date() })

                await this.updatePayzeTransaction(transactionId, { status: status, blockedTime: blockedTime || Date.now(), cardMask: cardMask })
                break;
            }

            case PayzeTransactionStatus.Rejected:
            case PayzeTransactionStatus.Refunded:
            case PayzeTransactionStatus.PartiallyRefunded:
                await this.updateOrder(orderId, { status: OrderStatus.Canceled, canceledAt: new Date() })

                await this.updatePayzeTransaction(transactionId, { status: status, cancelTime: Date.now(), cardMask: cardMask })
                break;
        }
    }

    private updateOrder = async (orderId: string, data: { status: OrderStatus, performedAt?: Date, canceledAt?: Date }): Promise<void> => {
        await this.orderRepo.updateById(orderId, data);
    }

    private updatePayzeTransaction = async (transactionId: string, data: { status: PayzeTransactionStatus, performTime?: number, cancelTime?: number, blockedTime?: number, cardMask?: string; }): Promise<void> => {
        await this.payzeTransactionRepo.updateByTransactionId(transactionId, data);
    }
}

export default PayzeTransactionService;
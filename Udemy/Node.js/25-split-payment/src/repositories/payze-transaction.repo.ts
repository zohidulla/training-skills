import payzeTransactionModel from "@/models/payze-transaction.model";
import {CreatePayzeTransactionDto, UpdateTransactionRepoDto} from "@/dtos/payze-transaction.dto";
import {IPayzeTransaction} from "@/interfaces/payze-transaction.interface";

class PayzeTransactionRepo {
    public payzeTransactionModel = payzeTransactionModel;

    public create = async (data: CreatePayzeTransactionDto): Promise<IPayzeTransaction> => {
        return this.payzeTransactionModel.create(data);
    }

    public getByTransactionId = async (transactionId: string): Promise<IPayzeTransaction | null> => {
        return this.payzeTransactionModel.findOne({ transactionId: transactionId }).lean();
    }
    public updateByTransactionId = async (transactionId: string, update: Partial<UpdateTransactionRepoDto>): Promise<void> => {
        await this.payzeTransactionModel.findOneAndUpdate({ transactionId: transactionId }, update);
    }
}

export default PayzeTransactionRepo;
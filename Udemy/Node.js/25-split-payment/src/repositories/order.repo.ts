import orderModel from "@/models/order.model";
import {IOrder} from "@/interfaces/order.interface";
import {CreateOrderRepoDto, UpdateOrderRepoDto} from "@/dtos/order.dto";

class OrderRepo {
    public orderModel = orderModel;

    public create = async (data: CreateOrderRepoDto): Promise<IOrder> => {
        return this.orderModel.create(data);
    }

    public getById = async (id: string): Promise<IOrder | null> => {
        return this.orderModel.findById(id).lean();
    }

    public updateById = async (id: string, update: Partial<UpdateOrderRepoDto>): Promise<void> => {
        await this.orderModel.findByIdAndUpdate(id, update);
    }
}

export default OrderRepo;
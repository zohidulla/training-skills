import OrderService from "@/services/order.service";
import { NextFunction, Request, Response } from "express";
import { CreateOrderDto } from "@/dtos/order.dto";
import { validation } from "@/utils/validation.util";
import { StatusCode } from "@/enums/status-code.enum";
import { SuccessCode } from "@/enums/success-code.enum";

class OrderController {
  public orderService = new OrderService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createdData: CreateOrderDto = req.body;

      await validation(CreateOrderDto, createdData);

      const paymentUrl = await this.orderService.create(createdData);

      res.status(StatusCode.Created).json({
        message: SuccessCode.OrderCreated,
        data: { paymentUrl: paymentUrl },
      });
    } catch (error) {
      next(error);
    }
  };
}

export default OrderController;

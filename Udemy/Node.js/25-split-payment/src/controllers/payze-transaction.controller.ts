import PayzeTransactionService from "@/services/payze-transaction.service";
import { NextFunction, Request, Response } from "express";
import { PayzeTransactionHookDto } from "@/dtos/payze-transaction.dto";
import { validation } from "@/utils/validation.util";
import { StatusCode } from "@/enums/status-code.enum";
import { SuccessCode } from "@/enums/success-code.enum";

class PayzeTransactionController {
  public payzeTransactionService = new PayzeTransactionService();

  public hook = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: PayzeTransactionHookDto = req.body;
      const token = req.query["authorization_token"] as string;

      await validation(PayzeTransactionHookDto, data, {
        skipMissingProperties: true,
      });

      await this.payzeTransactionService.hook(data, token);

      res
        .status(StatusCode.Ok)
        .json({ message: SuccessCode.OrderStatusUpdated });
    } catch (error) {
      next(error);
    }
  };
}

export default PayzeTransactionController;

import { NextFunction, Request, Response } from "express";
import { CreateProductDto } from "@/dtos/product.dto";
import { validation } from "@/utils/validation.util";
import ProductService from "@/services/product.service";
import { StatusCode } from "@/enums/status-code.enum";
import { SuccessCode } from "@/enums/success-code.enum";

class ProductController {
  public productService = new ProductService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createdData: CreateProductDto = req.body;

      await validation(CreateProductDto, createdData);

      const result = await this.productService.create(createdData);

      res
        .status(StatusCode.Created)
        .json({ data: result, message: SuccessCode.ProductCreated });
    } catch (error) {
      next(error);
    }
  };
}

export default ProductController;

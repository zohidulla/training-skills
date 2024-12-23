import ProductRepo from "@/repositories/product.repo";
import {CreateProductDto} from "@/dtos/product.dto";
import {IProduct} from "@/interfaces/product.interface";
import BadRequestError from "@/errors/bad-request.error";
import {ErrorCode} from "@/enums/error-cede.enum";

class ProductService {
    public productRepo = new ProductRepo();

    public create = async (data: CreateProductDto): Promise<IProduct> => {
        const product = await this.productRepo.getByName(data.name);
        if (product) throw new BadRequestError(ErrorCode.ProductAlreadyExist)

        return this.productRepo.create(data);
    }
}

export default ProductService;
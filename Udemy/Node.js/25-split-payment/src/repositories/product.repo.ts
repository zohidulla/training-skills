import productModel from "@/models/product.model";
import {CreateProductDto} from "@/dtos/product.dto";
import {IProduct} from "@/interfaces/product.interface";

class ProductRepo {
    public productModel = productModel;

    public create = async (data: CreateProductDto): Promise<IProduct> => {
        return this.productModel.create(data);
    }

    public getById = async (id: string): Promise<IProduct | null> => {
        return this.productModel.findById(id).lean();
    }

    public getByName = async (name: string): Promise<IProduct | null> => {
        return this.productModel.findOne({ name: name }).lean();
    }
}

export default ProductRepo;
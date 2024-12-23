import {IsInt, IsNotEmpty, IsString} from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsInt()
    @IsNotEmpty()
    readonly price: string;
}
import { Request, Response } from "express";
import { ProductRequest } from "../../models/interfaces/product/ProductRequest";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {

    async handle(request: Request, response: Response) {
        const { name, price, description, banner, category_id, amount }: ProductRequest = request.body;
        const createProductService = new CreateProductService();
        if (!request.file) {
            throw new Error("Error sending image!");
        } else {
            const { originalname, filename: banner} = request.file;
        }
    }
}
export { CreateProductController };
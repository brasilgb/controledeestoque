import { Request, Response } from "express";
import { ListProductService } from "../../services/product/ListProductService";

class ListProductsController {

    async handle(request: Request, response: Response) {
        const listProductService = new ListProductService();
        const products = await listProductService.execute()

        return response.json(products);
    }
};

export { ListProductsController };
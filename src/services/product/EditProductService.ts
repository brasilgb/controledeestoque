import { EditProductRequest } from "../../models/interfaces/product/EditProductRequest";
import prismaClient from "../../prisma";

class EditProductService {
    async execute({ name, amount, banner, description, price, product_id }: EditProductRequest) {
        const productEdited = await prismaClient.product.update({
            where: {
                id: product_id
            },
            data: {
                name: name,
                amount: +amount,
                banner: banner,
                description: description,
                price: price
            }
        });
        return productEdited;
    }
}
export { EditProductService };
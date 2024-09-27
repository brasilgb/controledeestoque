import prismaClient from "../../prisma";

export interface ListProductByCategoryIdRequest {
    category_id: string;
}

class ListProductByCategoryService {

    async execute({ category_id }: ListProductByCategoryIdRequest) {
        const findProductByCategoryId = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            }
        });

        return findProductByCategoryId;
    }
}

export { ListProductByCategoryService};
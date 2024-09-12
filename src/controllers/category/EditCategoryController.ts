import { Request, Response } from "express";

class EditCategoryController {
async handle(request: Request, response: Response) {
    const { name } = request.body;
    const category_id = request.query.category;
}
}
export { EditCategoryController };
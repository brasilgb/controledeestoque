import { Router, Request, Response, request } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { EditCategoryController } from "./controllers/category/EditCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController";
import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateProductController } from "./controllers/products/CreateProductController";
import { EditProductController } from "./controllers/products/EditProductController";
import { ListProductByCategoryController } from "./controllers/products/ListProductByCategoryController";
import { ListProductsController } from "./controllers/products/ListProductsController";
import { RemoveProductController } from "./controllers/products/RemoveProductController";
import { SaleProductController } from "./controllers/sale/SaleProductController";

const router = Router();
router.get("/test", (request: Request, response: Response) => {
    return response.json({ ok: true });
});

const upload = multer(uploadConfig.upload("./tmp"));


// User routes
router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)
router.delete('/user/remove', new RemoveUserController().handle);

// Categories routes
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.put('/category/edit', isAuthenticated, new EditCategoryController().handle);
router.get('/category/all', isAuthenticated, new ListCategoryController().handle);
router.delete('/category/remove', isAuthenticated, new RemoveCategoryController().handle);

// Products routes
router.post('/product', isAuthenticated, upload.single("file"), new CreateProductController().handle);
router.put('/product/edit', isAuthenticated, upload.single("file"), new EditProductController().handle);
router.get('/product', isAuthenticated, new ListProductByCategoryController().handle);
router.get('/products', isAuthenticated, new ListProductsController().handle);
router.delete('/product/remove', isAuthenticated, new RemoveProductController().handle);

// Sale Routes
router.put("/sale/product", isAuthenticated, new SaleProductController().handle);

// Products routes
export { router };
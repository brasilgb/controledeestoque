import { Router, Request, Response, request} from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";

const router = Router();
router.get("/test", (request: Request, response: Response) => {
    return response.json({ok: true});
});

// User routes
router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)
router.delete('/user/remove', new RemoveUserController().handle);

// Categories routes
router.post('/category', isAuthenticated, new CreateCategoryController().handle);

export { router };
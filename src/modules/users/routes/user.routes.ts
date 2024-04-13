import { Router } from "express";
import { CreateUserController } from '../controllers/create-user.controller';


export class UserRoutes {
    public static define() {
        const router = Router();
        const createUser = new CreateUserController();

        router.post("/", createUser.handle);

        return router;
    }
}
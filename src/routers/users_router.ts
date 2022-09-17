import { Router } from 'express';
import usersController from '../controller/users_controller';

export const userRouter = Router();

userRouter.get('/', usersController);

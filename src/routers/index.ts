import { Router } from 'express';
import { userRouter } from './users_router';

export const routerApp = Router();

// register all routes here
routerApp.use('/Users', userRouter)

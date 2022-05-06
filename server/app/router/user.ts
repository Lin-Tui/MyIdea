import Router from 'koa-router';
import UserController from '../controller/user';

const userRouter = new Router({ prefix: '/user' });

userRouter.post('/login', UserController.login);
userRouter.post('/register', UserController.register);

export default userRouter;

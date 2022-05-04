import Router from 'koa-router';
import UserController from '../controller/user';

const userRouter = new Router({ prefix: '/user' });

userRouter.post('/login', UserController.userLogin);
userRouter.post('/register', UserController.userRegister);

export default userRouter;

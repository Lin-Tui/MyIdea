import Router from 'koa-router';
import UserController from '../controller/user';

const userRouter = new Router({ prefix: '/v1/user' });

userRouter.get('/userInfo', UserController.getUser);

export default userRouter;

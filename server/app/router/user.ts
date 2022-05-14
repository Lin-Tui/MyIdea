import Router from 'koa-router';
import UserController from '../controller/user';
import { Context, DefaultState } from 'koa';
const userRouter = new Router<DefaultState, Context>({ prefix: '/user' }); //https://stackoverflow.com/questions/60050536/using-koa-views-with-typescript

userRouter.post('/login', UserController.login);
userRouter.post('/register', UserController.register);
userRouter.get('/isLogin', UserController.isLogin);
export default userRouter;

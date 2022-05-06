import { Context } from 'koa';
import UserService from '../service/user';
import Joi from 'joi';
import { ErrorCode, ErrTipMap } from '../constant/errCode';
export default class UserController {
    /**
     * 用户信息
     * @param {Context} ctx
     * @memberof UserController
     */
    public static async register(ctx: Context) {
        const request: { username: string; password: string } = ctx.request.body;
        const schema = Joi.object({
            username: Joi.string().required(),
            password: Joi.string().required(),
        });
        try {
            schema.validateAsync(request);
            const decodePassword = new (Buffer as any).from(request.password, 'base64').toString();
            const encrypted = decodePassword;
            const res = await UserService.register(request.username, encrypted);
            ctx.status = 200;
            ctx.body = res;
        } catch (error: any) {
            console.log(error);
            ctx.status = 200;
            ctx.body = {
                err_no: ErrorCode.UnknowError,
                err_tips: error.message || ErrTipMap.UnknowError,
            };
        }
    }
    public static async login(ctx: Context) {
        const request: { username: string; password: string } = ctx.request.body;
        const schema = Joi.object({
            username: Joi.string().required(),
            password: Joi.string().required(),
        });
        try {
            schema.validateAsync(request);
            const decodePassword = new (Buffer as any).from(request.password, 'base64').toString();
            const encrypted = decodePassword;
            const res = await UserService.login(request.username, encrypted);
            ctx.status = 200;
            ctx.body = res;
        } catch (error: any) {
            console.log(error);
            ctx.status = 200;
            ctx.body = {
                err_no: ErrorCode.UnknowError,
                err_tips: error.message || ErrTipMap.UnknowError,
            };
        }
    }
}

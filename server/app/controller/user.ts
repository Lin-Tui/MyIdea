import { Context } from 'koa';
import UserService from '../service/user';
import Joi from 'joi';
export default class UserController {
    /**
     * 用户信息
     * @param {Context} ctx
     * @memberof UserController
     */
    public static async userRegister(ctx: Context) {
        const request: { username: string; password: string } = ctx.request.body;
        const schema = Joi.object({
            username: Joi.string().required(),
            password: Joi.string().required(),
        });
        try {
            schema.validateAsync(request);
            const decodePassword = new (Buffer as any).from(request.password, 'base64').toString();
            const encrypted = decodePassword; //TODO加密
            const res = await UserService.userRegister(request.username, encrypted);
            ctx.status = 200;
            ctx.body = res;
        } catch (error: any) {
            console.log(error);
            ctx.status = 200;
            ctx.body = {
                err_no: -1,
                err_tips: error.message || '注册失败',
            };
        }
    }
    public static userLogin(ctx: Context) {
        // const request: any = ctx.request.body;
        // const { appId } = ctx.params;
        ctx.status = 200;
        ctx.body = {
            code: 0,
            msg: '成功',
            data: {
                userName: 'linxia',
                userPassword: '123',
            },
        };
    }
}

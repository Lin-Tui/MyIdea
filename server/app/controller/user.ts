import { Context } from 'koa';
import UserService from './../service/user';

export default class UserController {
    /**
     * 用户信息
     * @param {Context} ctx
     * @memberof UserController
     */
    public static getUser(ctx: Context) {
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

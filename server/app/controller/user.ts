import { Context } from 'koa';
import UserService from '../service/user';
import Joi from 'joi';
import { ErrorCode, ErrTipMap } from '../constant/errCode';
import { getCookieString } from '../util/customCookie';
const redisStore = require('../util/redisStore');
import { noAuthOperation } from '../util/Auth';
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
            const res = await UserService.login(ctx, request.username, encrypted);
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
    public static async isLogin(ctx: Context) {
        try {
            const authorization = ctx.request.header.authorization;
            if (!authorization) {
                ctx.status = 200;
                ctx.body = {
                    err_no: 0,
                    err_tips: '请求成功',
                    data: {
                        isLogin: false,
                    },
                };
            } else {
                const sessionId = authorization?.slice(9);
                const sessionValue = await redisStore.get(sessionId);
                if (!sessionValue) {
                    ctx.status = 200;
                    ctx.body = {
                        err_no: 0,
                        err_tips: '请求成功',
                        data: {
                            isLogin: false,
                        },
                    };
                    return;
                }
                const { createTS, maxAge, expiresTS } = sessionValue;
                const nowTS = new Date().getTime();
                if (nowTS - createTS >= maxAge) {
                    ctx.status = 200;
                    ctx.body = {
                        err_no: 0,
                        err_tips: '请求成功',
                        data: {
                            isLogin: false,
                        },
                    };
                    return;
                } else {
                    ctx.status = 200;
                    ctx.body = {
                        err_no: 0,
                        err_tips: ErrTipMap.RepeatLogin,
                        data: {
                            isLogin: true,
                        },
                    };
                }
            }
        } catch (error: any) {
            ctx.status = 200;
            ctx.body = {
                err_no: ErrorCode.UnknowError,
                err_tips: error.message || ErrTipMap.UnknowError,
            };
        }
    }
    public static async logout(ctx: Context) {
        try {
            const nowTS = new Date().getTime();
            await noAuthOperation(ctx, nowTS);
            const sessionId = ctx.request.header.authorization?.slice(9);
            redisStore.destroy(sessionId);
            const customCookie = getCookieString({
                key: 'koa.sess',
                value: sessionId,
                maxAge: 0,
                httpOnly: false,
                signed: false,
            });
            ctx.set('Authorization', customCookie);
            ctx.status = 200;
            ctx.body = {
                err_no: 0,
                err_tips: '退出成功',
            };
        } catch (error: any) {
            ctx.status = 200;
            ctx.body = {
                err_no: ErrorCode.UnknowError,
                err_tips: error.message || ErrTipMap.UnknowError,
            };
        }
    }
}

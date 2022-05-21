import { Context } from 'koa';
import { ErrorCode, ErrTipMap } from '../constant/errCode';
const redisStore = require('../util/redisStore');
export const noAuthOperation = async (ctx: Context, nowTS: number) => {
    const authorization = ctx.request.header.authorization;
    if (!authorization) {
        ctx.status = 200;
        ctx.body = {
            err_no: ErrorCode.NotLoginIn,
            err_tips: ErrTipMap.NotLoginIn,
        };
        return;
    }
    const sessionId = authorization?.slice(9);
    const sessionValue = await redisStore.get(sessionId);
    if (!sessionValue) {
        ctx.status = 200;
        ctx.body = {
            err_no: ErrorCode.NotLoginIn,
            err_tips: ErrTipMap.NotLoginIn,
        };
        return;
    }
    const { createTS, maxAge, expiresTS } = sessionValue;
    // 如果当前时间戳 - session创建时间 >= session有效时间，表达登录态已经过期
    if (nowTS - createTS >= maxAge) {
        ctx.status = 200;
        ctx.body = {
            err_no: ErrorCode.NotLoginIn,
            err_tips: ErrTipMap.NotLoginIn,
        };
        return;
    }
};

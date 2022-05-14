import { Context, Next } from 'koa';
const redisStore = require('../util/redisStore');
import { ErrorCode, ErrTipMap } from '../constant/errCode';

const authHander = async (ctx: Context, next: Next) => {
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
    const nowTS = new Date().getTime();
    // 如果当前时间戳 - session创建时间 >= session有效时间，表达登录态已经过期
    if (nowTS - createTS >= maxAge) {
        ctx.status = 200;
        ctx.body = {
            err_no: ErrorCode.NotLoginIn,
            err_tips: ErrTipMap.NotLoginIn,
        };
        return;
    }
    // 否则未过期：
    // 如果过期时间 - 当前时间 <= 12小时，且当前时间 + session有效时间 < 最终过期时间，则自动为用户延续maxAge时间的登录态
    if (createTS + maxAge - nowTS <= 43200000 && nowTS + maxAge < expiresTS) {
        const newSessionValue = {
            ...sessionValue,
            createTS: nowTS,
        };
        redisStore.set(sessionId, newSessionValue, 40 * 86400000);
    }

    await next();
};
export default authHander;

import { Context, Next } from 'koa';
const redisStore = require('../util/redisStore');
import { ErrorCode, ErrTipMap } from '../constant/errCode';
import { noAuthOperation } from '../util/auth';
const authHander = async (ctx: Context, next: Next) => {
    try {
        const nowTS = new Date().getTime();
        await noAuthOperation(ctx, nowTS);
        const sessionId = ctx.request.header.authorization?.slice(9);
        const sessionValue = await redisStore.get(sessionId);
        const { createTS, maxAge, expiresTS } = sessionValue;
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
    } catch (error: any) {
        ctx.status = 200;
        ctx.body = {
            err_no: ErrorCode.UnknowError,
            err_tips: ErrTipMap.UnknowError,
        };
        return;
    }
};
export default authHander;

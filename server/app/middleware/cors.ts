import { Context } from 'koa';

const corsHandler = {
    origin: function (ctx: Context) {
        return ctx.request.header.origin || '';
    },
    exposeHeaders: ['Authorization'],
    maxAge: 5 * 24 * 60 * 60,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
};
export default corsHandler;

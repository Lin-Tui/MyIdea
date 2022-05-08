import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import AddressIp from 'ip';
import Cors from 'koa2-cors';
import corsHandler from './app/middleware/cors';
import User from './app/router/user';
const Session = require('koa-generic-session');
const redisStore = require('koa-redis');
const redisConfig = require('./app/config/redisBase');
// TODO疑惑:
// 如果用 import redisStore from 'koa-redis':
// const store = new (redisStore as any)({
//     host: redisConfig.host,
//     port: redisConfig.port,
// }).client;
const app = new Koa();
app.use(BodyParser());
app.use(Cors(corsHandler));
app.keys = ['Lineve#_ppx'];
app.use(
    Session({
        prefix: 'ppx',
        key: 'key',
        cookie: {
            path: '/',
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        },
        store: redisStore({
            all: `${redisConfig.host}:${redisConfig.port}`,
        }),
    })
);
app.use(User.routes()).use(User.allowedMethods());
app.listen(3003, () => {
    console.log(`http://${AddressIp.address()}:3003`);
});
module.exports = app;

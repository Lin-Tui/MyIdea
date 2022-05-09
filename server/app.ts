import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import AddressIp from 'ip';
import Cors from 'koa2-cors';
import corsHandler from './app/middleware/cors';
import User from './app/router/user';
const session = require('koa-session');
const Store = require('../server/app/util/redisStore');
const shortid = require('shortid');
const redisConfig = require('./app/config/redisBase');
const sessionConfig = {
    key: 'koa:sess',
    maxAge: 86400000,
    signed: false,
    // 提供外部 Store
    store: new Store({
        redis: {
            port: redisConfig.port,
            host: redisConfig.host,
        },
    }),
    // key 的生成函数
    genid: () => shortid.generate(),
};

const app = new Koa();
app.use(BodyParser());
app.use(Cors(corsHandler));
app.use(session(sessionConfig, app));

app.use(User.routes()).use(User.allowedMethods());
app.listen(3003, () => {
    console.log(`http://${AddressIp.address()}:3003`);
});
module.exports = app;

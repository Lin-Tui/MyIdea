import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import AddressIp from 'ip';
import Cors from 'koa2-cors';
import corsHandler from './app/middleware/cors';
import User from './app/router/user';
import AuthHander from './app/middleware/auto';
const app = new Koa();
app.use(BodyParser());
app.use(Cors(corsHandler));
app.use(User.routes()).use(User.allowedMethods());
app.use(AuthHander);
app.listen(3003, () => {
    console.log(`http://${AddressIp.address()}:3003`);
});
module.exports = app;

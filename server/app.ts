import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import AddressIp from 'ip';
import User from './app/router/user';
const app = new Koa();
app.use(BodyParser());
app.use(User.routes()).use(User.allowedMethods());
app.listen(3030, () => {
    console.log(`http://${AddressIp.address()}:3030`);
});
module.exports = app;

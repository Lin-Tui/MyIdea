# MyIdea
//TODO 后续重新整理一份
登录态保留和校验逻辑草稿：
token:
用户登录
服务端判断密码账号正确后，会使用用户信息（用户id,用户名等）生成token（生成token的过程中可以加盐） 并通过响应返回给前端。
前端将token存在全局状态管理器中，并在请求拦截器中从store中获取到token，如果token存在就设置到请求header中。
后续请求前端带着token请求服务端，服务端可以写个中间件经验token是否有效（用户信息是否正确，是否在有效期中），如果有效返回数据。
如果token过期了，服务端可以返回特殊的状态码，前端收到之后发送个生成token的请求去重新生成token，但是由于token过期了，服务端不会再显然过期token，就无法判断是哪个用户，无解，所以需要结合cookie + session的方法。

cookie + session + redis：
用户登录
服务端判断密码账号正确后，会生成session key（使用用户信息哈希）和session value（用户名，创建时间，过期时间3天，最终过期时间）,存在redis中，并将session key设置在cookie中（需要设置cookie的key）
前端收到登录返回值后存入全局状态管理器中。后续前端请求的时候，先通过状态查用户是否有登录信息，无则跳转登录。有的话请求后端（这里不要直接取cookie判断）
后端收到请求后，取出cookie中的session key，去查redis，如果没有找到就是未登录，如果找到了要验证有效期（创建时间，过期时间，最终过期时间）：
验证创建时间不符，pass
验证打到过期时间或最终过期时间，pass
如果离过期时间小于12小时且离创建时间小于1个月，自动续期3天；否则不续期。

cookie单独使用且不加密：
此方法非常不靠谱。
如果cookie单独使用 + 加密，和token类似。

//TODO
* monorepo
* 头像
* 

// TODO
* redux
* route
* 
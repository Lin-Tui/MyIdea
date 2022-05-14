const Redis = require('ioredis');
import { RedisConf } from '../type';
const redisConfig = require('../config/redisBase');
// 编写的 Store 类，必须要有 get() set() destory() 这三个方法
class RedisStore {
    redis: typeof Redis;
    constructor(redisConfig: RedisConf) {
        this.redis = new Redis(redisConfig);
    }
    async get(key: string) {
        const data = await this.redis.get(`SESSION:${key}`);
        return JSON.parse(data);
    }
    async set(key: string, sess: any, maxAge: number) {
        await this.redis.set(`SESSION:${key}`, JSON.stringify(sess), 'EX', maxAge / 1000);
    }
    async destroy(key: string) {
        return await this.redis.del(`SESSION:${key}`);
    }
}

const redisStore = new RedisStore({
    port: redisConfig.port,
    host: redisConfig.host,
});

module.exports = redisStore;

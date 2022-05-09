import { RedisConf } from '../type';

const devRedisConf: RedisConf = {
    host: '127.0.0.1',
    port: '6379',
};

const prodRedisConf: RedisConf = {
    host: '127.0.0.1',
    port: '6379',
};

module.exports = {
    development: devRedisConf,
    production: prodRedisConf,
}[process.env.NODE_ENV || 'development'];

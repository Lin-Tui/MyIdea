import { RedisConf } from '../type';
import { prodRedisConf } from './security';
const devRedisConf: RedisConf = {
    host: '127.0.0.1',
    port: '6379',
};

module.exports = {
    development: devRedisConf,
    production: prodRedisConf,
}[process.env.NODE_ENV || 'development'];

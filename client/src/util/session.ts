import { getCookie, setCookie } from './cookie';

const LOGIN_COOKIE_NAME = 'koa.sess';

export function isAuthenticated() {
    return getCookie(LOGIN_COOKIE_NAME);
}

export function logout() {
    setCookie(LOGIN_COOKIE_NAME, '', 0);
}

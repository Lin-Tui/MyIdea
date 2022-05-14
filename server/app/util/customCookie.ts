interface customCookie {
    key: string;
    value: any;
    maxAge?: number;
    expires?: string;
    httpOnly?: boolean;
    signed?: boolean;
    sameSite?: string;
}
const getCookieString = (obj: customCookie) => {
    const { key, value, maxAge, expires, httpOnly, signed, sameSite } = obj;
    let res = `${key}=${value};`;
    res = !expires ? res : res + `expires=${expires}`;
    res = !maxAge ? res : res + `max-age=${maxAge};`;
    res = !httpOnly ? res : res + `httpOnly=${httpOnly};`;
    res = !signed ? res : res + `signed=${signed};`;
    res = !sameSite ? res : res + `sameSite=${sameSite};`;
    return res;
};
export { getCookieString };

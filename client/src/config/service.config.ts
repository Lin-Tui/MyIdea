const devBaseURL = 'http://127.0.0.1:3003';
const proBaseURL = '';
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
export const TIMEOUT = 5000;

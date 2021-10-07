const REST_API_KEY = '9019da36b0a192d988f66c0cd0ec27c8';
const REDIRECT_URI = 'http://localhost:8090/oauth/callback/kakao';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

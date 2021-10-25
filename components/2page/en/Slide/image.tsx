import axios from 'axios';

const Kakao = axios.create({
  baseURL: 'https://dapi.kakao.com', // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}`,
  },
});

// search book api
export const imageSearch = (params: any) => {
  return Kakao.get('v2/search/image', { params });
};

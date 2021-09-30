import axios from 'axios';

const fetcher = (url:string) =>{
  axios.get(url, {
    withCredentials:true, //get에선 2번째자리 post에선 세번째자리 에 설정  -->쿠키생성!
  }).then((response) => response.data);
};


export default fetcher ;
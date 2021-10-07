import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
const kakao = (window as any).kakao;
const loginWithKaKao = () => {
  console.log('hello');
  kakao.Auth.authorize({
    redirectUrl: 'http://localhost:8090/oauth/callback/kakao',
  });
};

const Sample = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_KEY;
  const REDIRECT_URI = 'http://localhost:8090/oauth/callback/kakao';

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <div>
      <a id="custom" href={KAKAO_AUTH_URL}>
        <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222" />
      </a>
    </div>
  );
};

export default Sample;

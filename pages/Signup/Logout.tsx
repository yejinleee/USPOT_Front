import React, { useCallback, useState, VFC } from 'react';
import Layout from '@layouts/Layouts';

const Logout = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_KEY;
  const LOGOUT_REDIRECT_URI = 'http://localhost:8090/logout';
  const KAKAO_URL = `/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
  return (
    <>
      <Layout>
        <div>
          <a id="custom" href={KAKAO_URL}>
            <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222" />
          </a>
        </div>
      </Layout>
    </>
  );
};
export default Logout;

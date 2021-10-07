import Layout from '@layouts/Layouts';
import axios from 'axios';
import React from 'react';

const OAuth2RedirectHandler = () => {
  let code = new URL(window.location.href).searchParams.get('code');
  console.log(code);
  const url = '/api/oauth2/authorization/kakao';
  axios.get(url, { params: { code } }).then((res) => {
    console.log(res);
  });
  return (
    <Layout>
      <div>{code}</div>
    </Layout>
  );
};

export default OAuth2RedirectHandler;

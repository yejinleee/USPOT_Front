import Layout from '@layouts/Layouts';
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import Search from '@components/Search/Search';
import Logout from '@pages/Signup/Logout';

const Mypage = () => {
  return (
    <Layout>
      <Search />
      <Logout />
    </Layout>
  );
};

export default Mypage;

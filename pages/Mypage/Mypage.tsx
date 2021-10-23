import Layout from '@layouts/Layouts';
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import Search from '@components/Search/Search';

const Mypage = () => {
  return (
    <Layout>
      <Search />
    </Layout>
  );
};

export default Mypage;

import Layout from '@layouts/Layouts';
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import Search from '@components/Search/Search';
import Likedlist from '@components/Coursetest/Likedlist';

const Mypage = () => {
  return (
    <Layout>
      <Search />
      <Likedlist />
    </Layout>
  );
};

export default Mypage;

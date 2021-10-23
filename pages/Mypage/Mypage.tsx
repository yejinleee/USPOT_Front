import Layout from '@layouts/Layouts';
import React from 'react';
import Search from '@components/mypage/ko/Search/Search';
import LogIn from '@pages/LogIn/LogIn';

const Mypage = () => {
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }

  return (
    <>
      <Layout>{memberid === 0 ? <LogIn /> : <Search />}</Layout>
    </>
  );
};

export default Mypage;

import Layout from '@layouts/Layouts';
import React from 'react';
import LogIn from '@pages/LogIn/LogIn';
import Button from '@components/mypage/ko/Button/Button';

const Mypage = () => {
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }

  return (
    <>
      <Layout>{memberid === 0 ? <LogIn /> : <Button />}</Layout>
    </>
  );
};

export default Mypage;

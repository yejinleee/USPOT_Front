import React, { useState } from 'react';
import MakeCourse from '@components/mypage/ko/ReviseCourse/MakeCourse';
import Search from '../Search/Search';
import ViewMain from '../ViewCourse/Main';

const Mypage = () => {
  const [select, setSelect] = useState(0);

  const onClickadd = () => {
    setSelect(1);
  };
  const onClickrevise = () => {
    setSelect(2);
  };
  const onClickview = () => {
    setSelect(3);
  };
  return (
    <>
      <button onClick={onClickadd}>코스 만들기</button>
      <button onClick={onClickrevise}>코스 수정하기</button>
      <button onClick={onClickview}>코스 다~보기</button>
      {select !== 0 && (select === 1 ? <Search /> : select === 2 ? <MakeCourse /> : <ViewMain />)}
    </>
  );
};

export default Mypage;

import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import Likedlist from '@components/mypage/ko/Coursetest/Likedlist';
import Coursemap from '@components/mypage/ko/Course/Coursemap';
import axios from 'axios';
const MakeCourse = () => {
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  const [exist, setExsist] = useState(false);
  useEffect(() => {
    axios
      .get(`/api/myplace/findall/${memberid}`)
      .then(async (response) => {
        if (response.data.data.length !== 0) {
          setExsist(true);
        }
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      {exist && (
        <>
          <Likedlist />
          <Coursemap />
        </>
      )}
    </>
  );
};

export default MakeCourse;

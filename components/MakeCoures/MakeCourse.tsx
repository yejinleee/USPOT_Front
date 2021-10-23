import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import Coursemap from '@components/Course/Coursemap';
import Likedlist from '@components/Likedlist/Likedlist';
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
        console.log(response.data.data.length);
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

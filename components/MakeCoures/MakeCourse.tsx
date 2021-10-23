import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import Coursemap from '@components/Course/Coursemap';
import Likedlist from '@components/Likedlist/Likedlist';
const MakeCourse = () => {


  return (
    <>
      <Likedlist />
      <Coursemap />
    </>
  )
};

export default MakeCourse;

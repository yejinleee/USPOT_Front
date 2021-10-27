import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import Likedlist from '@components/mypage/ko/MakeCoures/Likedlist';
import Coursemap from '@components/mypage/ko/Course/Coursemap';
import axios from 'axios';
interface Props {
  start: any;
}

const MakeCourse: FC<Props> = (props: Props) => {
  const [exist, setExsist] = useState(false);

  const onClick = () => {
    setExsist(true);
  };

  return (
    <>
      <button onClick={onClick}>출발지 설정하기!</button>
      {exist && (
        <>
          <Likedlist start={props.start} />
          <Coursemap />
        </>
      )}
    </>
  );
};

export default MakeCourse;

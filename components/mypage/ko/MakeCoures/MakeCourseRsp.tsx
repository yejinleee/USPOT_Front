import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import Likedlist from '@components/mypage/ko/MakeCoures/Likedlist';
import Coursemap from '@components/mypage/ko/Course/Coursemap';
import CoursemapRsp from '@components/mypage/ko/Course/CoursemapRsp';
import '@components/mypage/Coursemap.css'
interface Props {
  start: any;
  startplacename : string;
}

const MakeCourse: FC<Props> = (props: Props) => {
  const [exist, setExist] = useState(false);

  const onClick = () => {
    setExist(true);
  };

  return (
    <>
      <button onClick={onClick} className="setstartbtn"> "{props.startplacename}"에서 출발하기</button>
      {exist && (
        <>
          <Likedlist start={props.start} />
          <div className="coursemap_responsive" style={{position:'relative'}}>
            <CoursemapRsp />
          </div>
        </>
      )}
    </>
  );
};

export default MakeCourse;

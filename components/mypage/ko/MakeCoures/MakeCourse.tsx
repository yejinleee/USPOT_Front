import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import Likedlist from '@components/mypage/ko/MakeCoures/Likedlist';
import Coursemap from '@components/mypage/ko/Course/Coursemap';
import CoursemapRsp from '@components/mypage/ko/Course/CoursemapRsp';
import '@components/mypage/Coursemap.css'
import Main from '@components/mypage/ko/MakeCoures/Main';
import TodoTemplate from '@components/mypage/ko/MakeCoures/TodoTemplate';
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
          <div className="makecourse_div">
            <TodoTemplate start={props.start} />
          </div>
          <div className="coursemap" style={{position:'relative'}}>
            {/*<Coursemap />*/}
          </div>
        </>
      )}
    </>
  );
};

export default MakeCourse;

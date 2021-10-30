import React, { FC, useState } from 'react';
import '@components/mypage/Coursemap.css';
import EnTodoTemplate from './EnTodoTemplate';
interface Props {
  start: any;
  startplacename: string;
}

const EnMakeCourse: FC<Props> = (props: Props) => {
  const [exist, setExist] = useState(false);

  const onClick = () => {
    setExist(true);
  };

  return (
    <>
      <div className="setstartbtn_div">
        <button onClick={onClick} className="setstartbtn">
          "{props.startplacename}"에서 출발하기
        </button>
      </div>
      {exist && (
        <>
          <div className="makecourse_div">
            <EnTodoTemplate start={props.start} />
          </div>
          <div className="coursemap" style={{ position: 'relative' }}></div>
        </>
      )}
    </>
  );
};

export default EnMakeCourse;

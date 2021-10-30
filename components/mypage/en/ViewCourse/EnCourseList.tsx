import React, { FC, useEffect, useState } from 'react';
import EnCoursemap from './EnCoursemap';
interface Props {
  courselist: any;
}

const EnCourseList: FC<Props> = (props: Props) => {
  const [courseid, setCourseid] = useState();
  const [exist, setExist] = useState(false);
  function Likelist({ list, name }: any) {
    return (
      <div>
        <button
          onClick={() => {
            setCourseid(list.courseid);
            setExist(true);
          }}
        >
          {name}
        </button>
      </div>
    );
  }

  return (
    <>
      {props.courselist.map((v: string, index: number) => (
        <Likelist list={props.courselist[index]} name={props.courselist[index].name} />
      ))}
      {exist && <EnCoursemap courseid={courseid} />}
    </>
  );
};
export default EnCourseList;

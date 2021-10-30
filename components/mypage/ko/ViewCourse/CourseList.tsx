import React, { FC, useEffect, useState } from 'react';
import Coursemap from './Coursemap';
interface Props {
  courselist: any;
}

const CourseList: FC<Props> = (props: Props) => {
  const [courseid, setCourseid] = useState();
  const [exist, setExist] = useState(false);
  function Likelist({ list, name }: any) {
    return (
      <button
        className="deletebutton"
        onClick={() => {
          setCourseid(list.courseid);
          setExist(true);
        }}
      >
        <p className="deletename">{name}</p>
      </button>
    );
  }

  return (
    <>
      <div className="viewouter">
        {props.courselist.map((v: string, index: number) => (
          <Likelist list={props.courselist[index]} name={props.courselist[index].name} />
        ))}
      </div>
      {exist && <Coursemap courseid={courseid} />}
    </>
  );
};
export default CourseList;

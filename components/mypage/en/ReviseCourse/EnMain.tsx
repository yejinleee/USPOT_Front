import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EnTodoTemplate from './EnTodoTemplate';
import TodoTemplate from '@components/mypage/ko/ReviseCourse/TodoTemplate';

const EnMain = () => {
  var local = sessionStorage.getItem('memberid');
  const [state, setState] = useState(0);
  const [course, setCourese] = useState([] as any);
  const [name, setName] = useState('');

  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }

  useEffect(() => {
    setCourese([]);
    axios
      .get(`/api/en/course/findall/${memberid}`)
      .then(async (response) => {
        setCourese(response.data.data);
      })
      .catch((error) => {});
  }, [name]);

  const onClick = (id: number, coursename: string) => {
    setState(id);
    setName(coursename);
  };

  const courselist: any = course.map((v: string, index: number) => (
    <>
      <button
        id={v}
        key={index}
        className="revisecoursebutton"
        onClick={() => {
          onClick(course[index].courseid, course[index].name);
        }}
      >
        {course[index].name}
      </button>
    </>
  ));
  return (
    <>
      <div className="revisetitle" style={{margin:'2vh 0 1vh'}}>Please choose a course to modify</div>
      {courselist}
      {state !== 0 && (
        <>
          <EnTodoTemplate courseid={state} coursename={name} setName={setName} />
        </>
      )}

    </>
  );
};
export default EnMain;

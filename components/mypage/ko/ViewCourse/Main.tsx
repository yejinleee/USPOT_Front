import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import CourseList from './CourseList';
import '@components/mypage/ViewCourse.scss';

const ViewMain = () => {
  var local = sessionStorage.getItem('memberid');
  const [course, setCourese] = useState([] as any);
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }

  useEffect(() => {
    setCourese([]);
    axios
      .get(`/api/course/findall/${memberid}`)
      .then(async (response) => {
        setCourese(response.data.data);
      })
      .catch((error) => {});
  }, []);

  const onClick = (id: number) => {
    if (window.confirm('코스를 삭제 하시겠습니까?')) {
      axios
        .delete(`/api/course/delete/${id}`)
        .then((response) => {})
        .catch((error) => {});

      setCourese([]);

      alert('코스가 삭제 되었습니다!');
    }
    axios
      .get(`/api/course/findall/${memberid}`)
      .then(async (response) => {
        setCourese(response.data.data);
      })
      .catch((error) => {});
  };

  const courselist: any = course.map((v: string, index: number) => (
    <>
      <button className="deletebutton" key={index} onClick={() => onClick(course[index].courseid)}>
        <p className="deletename">{course[index].name}</p>
      </button>
    </>
  ));

  return (
    <>
      <h3>코스 삭제하기</h3>
      {courselist}
      <h3>코스 한눈에 보기</h3>
      <CourseList courselist={course} />
    </>
  );
};
export default ViewMain;

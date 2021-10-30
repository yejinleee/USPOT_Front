import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import CourseList from './EnCourseList';

const EnViewMain = () => {
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
      .get(`/api/en/course/findall/${memberid}`)
      .then(async (response) => {
        setCourese(response.data.data);
      })
      .catch((error) => {});
  }, []);

  const onClick = (id: number) => {
    if (window.confirm('Do you want to delete the course?')) {
      axios
        .delete(`/api/en/course/delete/${id}`)
        .then((response) => {})
        .catch((error) => {});

      setCourese([]);

      alert('The course has been deleted!');
    }
    axios
      .get(`/api/en/course/findall/${memberid}`)
      .then(async (response) => {
        setCourese(response.data.data);
      })
      .catch((error) => {});
  };

  const courselist: any = course.map((v: string, index: number) => (
    <>
      <button id={v} key={index} onClick={() => onClick(course[index].courseid)}>
        {course[index].name}
      </button>
    </>
  ));

  return (
    <>
      <h3>Delete the course</h3>
      {courselist}
      <h3>View my course list</h3>
      <CourseList courselist={course} />
    </>
  );
};
export default EnViewMain;

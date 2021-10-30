import React from 'react';
import CourseList from './CourseList';
import '@components/mypage/ViewCourse.scss';

const ViewMain = () => {
  // const courselist: any = course.map((v: string, index: number) => (
  //   <>
  //     <div className="viewbuttonclass">
  //       <button className="deletebutton" key={index} onClick={() => onClick(course[index].courseid)}>
  //         <p className="deletename">{course[index].name}</p>
  //       </button>
  //     </div>
  //   </>
  // ));

  return (
    <>
      <h3 className="viewtitle">코스 한눈에 보기</h3>
      <CourseList />
    </>
  );
};
export default ViewMain;

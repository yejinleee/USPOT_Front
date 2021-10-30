import React, { FC, useEffect, useRef, useState } from 'react';
import '@components/mypage/List.scss';
import axios from 'axios';
import EnTodoItemList from './EnTodoItemlist';
import EnCourseInputSave from './EnCourseInputSave';
import EnCoursemap from '../Course/EnCoursemap';
import EnLikelistscroll from './EnLikelistscroll';

interface Props {
  placelist: any;
  todos: any;
  onClick: any;
  ondeleteClick: any;
  onRemove: any;
  start: any;
}

const EnList: FC<Props> = (props: Props) => {
  const [text, setText] = useState('코스');
  var local = sessionStorage.getItem('memberid');
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  const onChange = (e: any) => {
    setText(e.target.value);
  };
  const onClick = () => {
    var name = text;
    var myplaceList = props.todos;

    if (myplaceList.length !== 0) {
      axios
        .post(`/api/en/course/add/${memberid}`, JSON.stringify({ name, myplaceList }), { headers })
        .then(() => {})
        .catch((error) => {});

      alert('코스가 저장되었습니다!');

      location.reload();
    } else {
      alert('코스에 장소를 담아주세요!');
    }
  };

  return (
    <>
      <div className="coursetitle">코스를 만들어 보아요!</div>

      <div className="makecourselist">
        <EnTodoItemList todos={props.todos} onRemove={props.onRemove} placeid={props.start} />
      </div>
      {/*코스저장save버튼*/}
      <EnCourseInputSave todos={props.todos} onRemove={props.onRemove} placeid={props.start} />
      <div className="myplacemap_div">
        <EnCoursemap />
        <span className="likedlist" style={{ display: 'inline-block', position: 'absolute' }}>
          <EnLikelistscroll
            placelist={props.placelist}
            todos={props.todos}
            onClick={props.onClick}
            ondeleteClick={props.ondeleteClick}
            onRemove={props.onRemove}
            start={props.start}
          />
        </span>
      </div>
    </>
  );
};

export default EnList;

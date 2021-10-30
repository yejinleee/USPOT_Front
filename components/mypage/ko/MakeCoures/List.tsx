import React, { FC, useEffect, useRef, useState } from 'react';
import TodoItemList from './TodoItemlist';
import TodoTitle from './TodoTitle';
import Likelistscroll from '@components/mypage/ko/MakeCoures/Likelistscroll';
import '@components/mypage/List.scss';
import Coursemap from '@components/mypage/ko/Course/Coursemap';

interface Props {
  placelist: any;
  todos: any;
  onClick: any;
  ondeleteClick: any;
  onRemove: any;
  start: any;
}

const List: FC<Props> = (props: Props) => {

  return (
    <>
      <div className="coursetitle">
        코스를 만들어 보아요!
      </div>
      <div className="makecourselist">
        <TodoItemList todos={props.todos} onRemove={props.onRemove} placeid={props.start} />
      </div>
      <div className="myplacemap_div">
        <Coursemap />
        <span className="likedlist" style={{ display: 'inline-block' , position:'absolute'}}>
          <Likelistscroll placelist={props.placelist} todos={props.todos} onClick={props.onClick} ondeleteClick={props.ondeleteClick} onRemove={props.onRemove} start={props.start} />
        </span>
      </div>
    </>
  );
};

export default List;

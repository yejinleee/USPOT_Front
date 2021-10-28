import React, { FC, useEffect, useRef, useState } from 'react';
import TodoItemList from './TodoItemlist';
import TodoTitle from './TodoTitle';
import '@components/mypage/List.scss';

interface Props {
  placelist: any;
  todos: any;
  onClick: any;
  ondeleteClick: any;
  onRemove: any;
  start: any;
}

const List: FC<Props> = (props: Props) => {
  function Likelist({ list, name, onClick, ondeleteClick }: any) {
    return (
      <div className="mypagelist">
        <button className="listbtn" onClick={() => onClick(list)}>
          <img className="add" src="/src/icon/more.png" />
        </button>
        {name}
        <button className="listbtn" onClick={() => ondeleteClick(list)}>
          <img className="trash" src="/src/icon/trash.png" />
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="likedlist" style={{ display: 'inline-block' }}>
        {props.placelist.map((v: string, index: number) => (
          <Likelist
            list={props.placelist[index]}
            name={props.placelist[index].name}
            onClick={props.onClick}
            ondeleteClick={props.ondeleteClick}
          />
        ))}
      </div>
      <TodoTitle>코스를 만들어 보아요!</TodoTitle>
      <TodoItemList todos={props.todos} onRemove={props.onRemove} placeid={props.start} />
    </>
  );
};

export default List;

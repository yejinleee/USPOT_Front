import React, { FC, useEffect, useRef, useState } from 'react';
import TodoItemList from './TodoItemlist';
import TodoTitle from './TodoTitle';
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
      <div>
        <button onClick={() => onClick(list)}>코스에 추가</button>
        {name}
        <button onClick={() => ondeleteClick(list)}>마이플레이스 삭제</button>
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

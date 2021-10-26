import axios from 'axios';
import React, { FC, useState } from 'react';
import TodoItem from './TodoItem';
interface Props {
  todos: any;
  onRemove: any;
  placeid: any;
}

const TodoItemList: FC<Props> = (props: Props) => {
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

    axios
      .post(`/api/course/add/${memberid}`, JSON.stringify({ name, myplaceList }), { headers })
      .then(() => {})
      .catch((error) => {});

    alert('코스가 저장되었습니다!');

    location.reload();
  };

  return (
    <>
      <input onChange={onChange} value={text} />
      <button onClick={onClick}>save</button>
      {props.todos.map((todo: any) => (
        <TodoItem todos={todo} id={todo.id} onRemove={props.onRemove} />
      ))}
    </>
  );
};

export default TodoItemList;

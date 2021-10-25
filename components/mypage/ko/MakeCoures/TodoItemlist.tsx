import axios from 'axios';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
interface Props {
  todos: any;
  onRemove: any;
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
      .then(() => {
        console.log(props.todos);
      })
      .catch((error) => {});
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

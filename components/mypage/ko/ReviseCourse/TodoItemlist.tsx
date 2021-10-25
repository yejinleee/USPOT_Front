import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
interface Props {
  todos: any;
  onRemove: any;
  courseid: any;
  coursename: any;
}

const TodoItemList: FC<Props> = (props: Props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(props.coursename);
  }, [props.courseid]);

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
    console.log(myplaceList);
    axios
      .put(`/api/course/update/${memberid}/${props.courseid}`, JSON.stringify({ name, myplaceList }), { headers })
      .then(() => {})
      .catch((error) => {});
    console.log('여기서 DB로 보내면됨');
  };

  return (
    <>
      <input onChange={onChange} value={text} />
      <button onClick={onClick}>editname</button>
      {props.todos.map((todo: any) => (
        <TodoItem todos={todo} id={todo.id} onRemove={props.onRemove} />
      ))}
    </>
  );
};

export default TodoItemList;

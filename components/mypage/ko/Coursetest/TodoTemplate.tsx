import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import TodoInsert from './TodoInsert';
import TodoItemList from './TodoItemlist';
import TodoTitle from './TodoTitle';

function TodoTemplate() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'todolist 레이아웃 잡기',
      checked: true,
    },
    {
      id: 2,
      text: 'todolist css 스타일링 하기',
      checked: true,
    },
    {
      id: 3,
      text: 'todolist 기능 구현하기',
      checked: false,
    },
  ]);

  const onRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoTitle>TODO LIST - eassy</TodoTitle>
      <TodoItemList todos={todos} onRemove={onRemove} />
    </>
  );
}

export default TodoTemplate;

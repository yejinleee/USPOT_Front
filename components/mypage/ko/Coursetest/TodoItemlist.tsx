import React, { FC } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
interface Props {
  todos: any;
  onRemove: any;
}

const TodoItemList: FC<Props> = (props: Props) => {
  return (
    <>
      <div>Hi</div>
      {props.todos.map((todo: any) => (
        <TodoItem todos={todo} id={todo.id} onRemove={props.onRemove} />
      ))}
    </>
  );
};

export default TodoItemList;

import React, { FC } from 'react';

interface Props {
  todos: any;
  id: any;
  onRemove: any;
}

const TodoItemList: FC<Props> = (props: Props) => {
  const { id } = props.id;
  const { text, checked } = props.todos;
  // const filterResult = props.todos.filter((todo: any) => todo.done === false);
  return (
    <>
      <div
        style={{
          textDecoration: checked ? 'line-through' : null,
          color: checked ? '#ccc' : '#000',
        }}
      >
        {text}
      </div>
      <button onClick={() => props.onRemove(id)}>
        <img src="./img/trash.png" />
      </button>
    </>
  );
};

export default TodoItemList;

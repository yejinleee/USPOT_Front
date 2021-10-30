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

    if (myplaceList.length !== 0) {
      axios
        .post(`/api/course/add/${memberid}`, JSON.stringify({ name, myplaceList }), { headers })
        .then(() => {})
        .catch((error) => {});

      alert('코스가 저장되었습니다!');

      location.reload();
    } else {
      alert('코스에 장소를 담아주세요!');
    }
  };
  var imgsrc = './src/icon/star.png';

  return (
    <>
      <input onChange={onChange} value={text} />
      <button onClick={onClick}>save</button>
      {props.todos.map((todo: any) => (
        <>
          <li className="courselist">{todo.name}</li>
          <button onClick={() => props.onRemove(todo.id)}>
            <img src={imgsrc} width="30" />
          </button>
        </>
      ))}
    </>
  );
};

export default TodoItemList;

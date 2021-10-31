import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import TodoItem from './TodoItem';
interface Props {
  todos: any;
  onRemove: any;
  courseid:any;
  coursename:any;
}

const TodoItemList: FC<Props> = (props: Props) => {
  const [text, setText] = useState('');
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
        .put(`/api/course/update/${memberid}/${props.courseid}`, JSON.stringify({ name, myplaceList }), { headers })
        .then(() => {
          alert('코스가 수정되었습니다!');
          location.reload();
        })
        .catch((error) => {});
    } else {
      alert('코스에 장소를 담아주세요!');
    }
  };

  return (
    <>
      <div className="courseinputsave" style={{margin:'0', textAlign:'left'}}>
        <form className="inputForm" style={{margin:'0'}}>
          <input onChange={onChange} className="save_input"  value={text} placeholder={props.coursename} />
          <button onClick={onClick} className="save_button"> save </button>
        </form>
      </div>

      {/*<div>*/}
      {/*  {props.todos.map((todo: any) => (*/}
      {/*    <TodoItem todos={todo} id={todo.id} onRemove={props.onRemove} />*/}
      {/*  ))}*/}
      {/*</div>*/}
    </>
  );
};

export default TodoItemList;

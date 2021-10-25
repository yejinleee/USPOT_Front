import axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import TodoItemList from './TodoItemlist';
import TodoTitle from './TodoTitle';
interface Props {
  courseid: number;
  coursename: string;
}

const TodoTemplate: FC<Props> = (props: Props) => {
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  const [namelist, setNamelist] = useState([] as any);
  const [placelist, setPlacelist] = useState([] as any);
  const [index, setIndex] = useState([] as any);
  const [todos, setTodos] = useState([] as any);

  useEffect(() => {
    axios
      .get(`/api/myplace/findall/${memberid}`)
      .then(async (response) => {
        for (var i = 0; i < response.data.data.length; i++) {
          setPlacelist(response.data.data);
          setNamelist((prev: any) => [...prev, response.data.data[i].name]);
        }
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    setTodos([]);
    axios
      .get(`/api/myplacecourse/findall/${props.courseid}`)
      .then(async (response) => {
        console.log(response.data.data.length);
        for (var i = 0; i < response.data.data.length; i++) {
          setTodos((prev: any) => [...prev, response.data.data[i].myplaceDto]);
        }
      })
      .catch((error) => {});
  }, [props.courseid]);

  const onClick = (list: any) => {
    if (todos.length === 0) {
      setTodos((prev: any) => [...prev, list]);
      setIndex((prev: any) => [...prev, list.id]);
    } else {
      if (index.indexOf(list.id) === -1) {
        setTodos((prev: any) => [...prev, list]);
        setIndex((prev: any) => [...prev, list.id]);
      }
    }
  };

  const likedlist: any = namelist.map((v: string, index: number) => (
    <>
      <button id={v} key={index} onClick={() => onClick(placelist[index])}>
        {namelist[index]}
      </button>
    </>
  ));

  const onRemove = (id: number) => {
    setTodos(todos.filter((place: any) => place.id !== id));
    console.log(index.indexOf(id));
    var idx = index.indexOf(id);
    index[idx] = 0;
  };

  return (
    <>
      <div className="likedlist" style={{ display: 'inline-block' }}>
        {likedlist}
      </div>
      <TodoTitle>코스를 수정해 보아요!</TodoTitle>
      <TodoItemList todos={todos} onRemove={onRemove} courseid={props.courseid} coursename={props.coursename} />
    </>
  );
};

export default TodoTemplate;

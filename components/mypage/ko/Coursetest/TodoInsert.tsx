import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function TodoInsert(props: any) {
  const [content, setContent] = useState('');
  const ref = useRef() as any;

  const handleChange = (e: any) => {
    setContent(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault(); // onSubmit 이벤트는 브라우저를 새로고치기 때문에 막아주기
    if (!content) return;
    // 만약 input 창이 빈채로 submit을 하려고 할 땐 return시키기
    props.onSubmit(content);
    setContent('');
    // submit을 한 후에는 input 창을 비우기
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={ref}
        type="text"
        name="text"
        placeholder="Hey, input here -"
        value={content}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit} onKeyPress={handleKeyPress}>
        ADD
      </button>
    </form>
  );
}

export default TodoInsert;

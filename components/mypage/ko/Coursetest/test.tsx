import React, { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TodoTemplate from './TodoTemplate';
interface Props {
  todos: any;
}

const Test = () => {
  return (
    <>
      <TodoTemplate />
    </>
  );
};
export default Test;
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #425364
  }
`;

import Container from '@components/Search/Container';
import Toggle from '@components/Toggle/Toggle';
import React from 'react';
import Layouts from '@components/Layouts';
import Second from '@components/Secondpage/Second';

const HomePage = () => (
  <Layouts>
    <Container />
    <Toggle />
    <Second />
  </Layouts>
);

export default HomePage;

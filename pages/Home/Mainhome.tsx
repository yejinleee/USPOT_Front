import Container from '@components/Search/Container';
import Toggle from '@components/Toggle/Toggle';
import React from 'react';
import Layouts from '@components/Layouts';
import Second from '@components/Secondpage/Second';
import KakaoMap from '@components/Map/KaKaomap';

const HomePage = () => (
  <Layouts>
    {/*<Container />*/}
    {/* <Toggle /> */}
    <KakaoMap />
  </Layouts>
);

export default HomePage;

import Search from '@components/Search/Search';
import Toggle from '@components/Toggle/Toggle';
import React, { useEffect, useState } from 'react';
import Layouts from '@layouts/Layouts';
import Second from '@pages/Secondpage/Second';
import KakaoMap from '@components/Map/KaKaomap';
import axios from 'axios';

const HomePage = () => (
  <Layouts>
    {/* <Search /> */}
    <Toggle />
    {/* <KakaoMap /> */}
  </Layouts>
);

export default HomePage;

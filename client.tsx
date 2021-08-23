import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import KakaoMap from '@pages/Map/KaKaomap';
import HomePage from '@layouts/App';

render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>,
  document.querySelector('#app'),
);

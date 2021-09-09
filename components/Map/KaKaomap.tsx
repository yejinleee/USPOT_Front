import React from 'react';
// import './kakaomap.css';
import Map from '@components/KaKao/Map';
import ManyMap from '@components/KaKao/ManyMap';
import Mapevent from '@components/KaKao/Mapevent';
import Custom from '@components/KaKao/Custom';

const KakaoMap = () => {
  return (
    <div className="kakaomap">
      <Mapevent />
    </div>
  );
};

export default KakaoMap;

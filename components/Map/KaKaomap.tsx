import React from 'react';
// import './kakaomap.css';
import Top5Mapevent from '@components/KaKao/Top5Mapevent';
import YoutubeMapevent from '@components/KaKao/YoutubeMapevent';

const KakaoMap = () => {
  return (
    <div className="kakaomap">
      <Top5Mapevent />
      <YoutubeMapevent />
    </div>
  );
};

export default KakaoMap;

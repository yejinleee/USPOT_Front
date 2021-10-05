import React from 'react';
import { useEffect } from 'react';

const KaKaoMap = () => {
  const kakao = (window as any).kakao;

  useEffect(() => {
    const container = document.getElementById('youtubemap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 10,
    };
    const youtubemap = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div id="youtubemap" style={{ width: '50vw', height: '40vw', display: 'inline-block' }}></div>
    </div>
  );
};

export default KaKaoMap;

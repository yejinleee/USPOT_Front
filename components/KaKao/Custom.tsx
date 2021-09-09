import React, { useEffect } from 'react';

export default function Map() {
  const kakao = (window as any).kakao;

  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
      level: 4,
    };

    //map
    const map = new kakao.maps.Map(container, options);

    const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'; //마커 이미지 주소
    const imageSize = new kakao.maps.Size(64, 69); //마커 이미지 크기
    const imageOption = { offset: new kakao.maps.Point(27, 69) }; //마커 이미지의 옵션

    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    const markerPosition = new kakao.maps.LatLng(37.54699, 127.09598);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    marker.setMap(map);

    const content =
      '<div class="customoverlay">' +
      '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
      '    <span class="title">구의야구공원</span>' +
      '  </a>' +
      '</div>';

    // 커스텀 오버레이가 표시될 위치입니다
    const position = new kakao.maps.LatLng(37.54699, 127.09598);

    // 커스텀 오버레이를 생성합니다
    var customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      position: position,
      content: content,
      yAnchor: 1,
    });

    //return <div id="map" style={{ width: '100vw', height: '100vh' }}></div>;
  };
}

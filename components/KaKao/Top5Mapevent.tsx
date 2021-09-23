/*global kakao */
import React, { useEffect, useRef } from 'react';
import { markerdata } from './MarkerData';

export default function Top5Map() {
  const latt = useRef(0);
  const long = useRef(0);
  const kakao = (window as any).kakao;
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    markerdata.forEach((el) => {
      latt.current += el.lat;
      long.current += el.lng;
    });

    let container = document.getElementById('top5map');
    let options = {
      center: new kakao.maps.LatLng(latt.current / 4, long.current / 4),
      level: 5,
    };

    //map
    const top5map = new kakao.maps.Map(container, options);

    markerdata.forEach((el) => {
      // 마커를 생성합니다
      var imageSize = new kakao.maps.Size(64, 69),
        imageOption = { offset: new kakao.maps.Point(27, 69) };

      const markerImage = new kakao.maps.MarkerImage(el.imageSrc, imageSize, imageOption);
      const marker = new kakao.maps.Marker({
        //마커가 표시 될 지도
        // map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //이미지 마커 불러오기
        image: markerImage,
        // content: el.title,
      });

      marker.setMap(top5map);
      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: el.title, // 인포윈도우에 표시할 내용
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(top5map, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    });

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map: any, marker: any, infowindow: { open: (arg0: any, arg1: any) => void }) {
      return function () {
        infowindow.open(map, marker);
      };
    }
    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow: { close: () => void }) {
      return function () {
        infowindow.close();
      };
    }
  };

  return <div id="top5map" style={{ width: '500px', height: '500px' }}></div>;
}

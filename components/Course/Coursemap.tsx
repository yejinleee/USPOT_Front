/*global kakao */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

export default function Coursemap() {
  const latt = useRef(0);
  const long = useRef(0);
  const kakao = (window as any).kakao;
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  const [myplace, setMyplace] = useState([] as any);

  useEffect(() => {
    axios.get(`/api/myplace/findall/${memberid}`).then(async (response) => {
      setMyplace(response.data.data);
    });
  }, []);

  useEffect(() => {
    mapscript();
  }, [myplace]);

  const mapscript = () => {
    console.log(myplace);
    myplace.forEach((el: any) => {
      console.log(el.location_y);
      latt.current += el.location_y;
      long.current += el.location_x;
    });

    console.log(long.current);
    let container = document.getElementById('myplacemap');
    let options = {
      center: new kakao.maps.LatLng(latt.current / myplace.length, long.current / myplace.length),
      level: 10,
    };

    //map
    const myplacemap = new kakao.maps.Map(container, options);

    myplace.forEach((el: any) => {
      // 마커를 생성합니다
      var imageSize = new kakao.maps.Size(36, 37),
        imageOption = { offset: new kakao.maps.Point(27, 69) };
      if (el.category === '관광명소') {
        var id = 1;
      } else if (el.category === '식당') {
        var id = 2;
      } else {
        var id = 3;
      }
      var imageSrc = `/src/icon/${id}.png`;
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
      const marker = new kakao.maps.Marker({
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.location_y, el.location_x),
        //이미지 마커 불러오기
        image: markerImage,
        // content: el.title,
      });

      marker.setMap(myplacemap);
      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: el.name, // 인포윈도우에 표시할 내용
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(myplacemap, marker, infowindow));
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

  return <div id="myplacemap" style={{ width: '50vw', height: '50vw' }}></div>;
}

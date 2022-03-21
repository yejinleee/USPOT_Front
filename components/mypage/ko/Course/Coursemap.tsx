/*global kakao */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import '@components/mypage/List.scss';

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
    axios
      .get(process.env.REACT_APP_DB_HOST + `/api/myplace/findall/${memberid}`)
      .then(async (response) => {
        setMyplace(response.data.data);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    mapscript();
  }, [myplace]);

  const mapscript = () => {
    myplace.forEach((el: any) => {
      latt.current += el.location_y;
      long.current += el.location_x;
    });

    let container = document.getElementById('myplacemap');
    let options = {
      center: new kakao.maps.LatLng(latt.current / myplace.length, long.current / myplace.length),
      level: 13,
    };

    const myplacemap = new kakao.maps.Map(container, options);

    myplace.forEach((el: any) => {
      var imageSize = new kakao.maps.Size(36, 37),
        imageOption = { offset: new kakao.maps.Point(27, 69) };
      if (el.category === '관광명소') {
        var id = 1;
      } else if (el.category === '음식점') {
        var id = 2;
      } else if (el.category === '카페') {
        var id = 3;
      } else {
        var id = 11;
      }
      var imageSrc = `/src/icon/${id}.png`;
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(el.location_y, el.location_x),
        image: markerImage,
      });

      marker.setMap(myplacemap);

      var infowindow = new kakao.maps.InfoWindow({
        content: `<span class="info-title">${el.name}</span>`,
      });

      infowindow.open(myplacemap, marker);

      var infoTitle = document.querySelectorAll('.info-title');

      infoTitle.forEach(function (e: any) {
        var w = e.offsetWidth;
        var ml = w / 2;
        e.parentElement.style.top = '82px';
        e.parentElement.style.left = '50%';
        e.parentElement.style.marginLeft = -ml + 'px';
        e.parentElement.previousSibling.style.display = 'none';
        e.parentElement.parentElement.style.border = '0px';
        e.parentElement.parentElement.style.background = 'unset';
      });

      infowindow.close();

      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(myplacemap, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    });

    function makeOverListener(map: any, marker: any, infowindow: { open: (arg0: any, arg1: any) => void }) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    function makeOutListener(infowindow: { close: () => void }) {
      return function () {
        infowindow.close();
      };
    }
  };

  return (
    <>
      <div id="myplacemap" style={{ width: '50%', height: '50%' }}></div>
    </>
  );
}

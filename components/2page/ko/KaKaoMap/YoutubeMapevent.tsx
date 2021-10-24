/*global kakao */
import LikeVlog from '@components/2page/ko/Like/LikeVlog';
import axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import './Top5Mapevent.css';
import { History, LocationState } from 'history';

interface Props {
  videoid: any;
  history: History<LocationState>;
  vlogplaceid: any;
}

const YoutubeMapevent: FC<Props> = ({ children, videoid, history, vlogplaceid }) => {
  const latt = useRef(0);
  const long = useRef(0);
  const kakao = (window as any).kakao;
  const [place, setPlace] = useState([] as any);
  const [name, setName] = useState([] as any);
  const [youtubemap, setYoutubemap] = useState(null);
  const [markers, setMarkers] = useState([] as any);
  const x = useRef(0);
  const y = useRef(0);

  useEffect(() => {
    let container = document.getElementById('youtubemap');
    let options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 10,
    };
    setYoutubemap(new kakao.maps.Map(container, options));
  }, []);

  useEffect(() => {
    setPlace([]);
    setName([]);
    axios.get(`/api/vlog/findplace/${videoid}`).then((response) => {
      //이 비디오에서 등장한 장소들
      setPlace(response.data.data);
      for (var i = 0; i < response.data.data.length; i++) {
        setName((prev: any) => [...prev, response.data.data[i].name]);
      }
    });
  }, [videoid]);

  useEffect(() => {
    if (place.length !== 0) {
      mapscript();
    }
  }, [place]);

  const mapscript = () => {
    removeMarker();

    x.current = 0;
    y.current = 0;
    for (var i = 0; i < place.length; i++) {
      x.current += place[i].location_x;
      y.current += place[i].location_y;
    }

    var Position = new kakao.maps.LatLng(y.current / place.length, x.current / place.length);
    youtubemap.setCenter(Position);

    for (var i = 0; i < place.length; i++) {
      var placePosition = new kakao.maps.LatLng(place[i].location_y, place[i].location_x),
        marker = addMarker(placePosition, i, place[i].categoryId);
      var infowindow = new kakao.maps.InfoWindow({
        content: `<span class="info-title">${place[i].name}</span>`, // 인포윈도우에 표시할 내용
      });
      infowindow.open(youtubemap, marker);

      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(youtubemap, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

      var infoTitle = document.querySelectorAll('.info-title');
      infoTitle.forEach(function (e: any) {
        var w = e.offsetWidth + 10;
        var ml = w / 2;
        e.parentElement.style.top = '82px';
        e.parentElement.style.left = '50%';
        e.parentElement.style.marginLeft = -ml + 'px';
        e.parentElement.style.width = w + 'px';
        e.parentElement.previousSibling.style.display = 'none';
        e.parentElement.parentElement.style.border = '0px';
        e.parentElement.parentElement.style.background = 'unset';
      });
      infowindow.close();
      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(youtubemap, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }
  };

  function addMarker(position: any, idx: any, id: any) {
    console.log(id);
    var imageSrc = `/src/icon/${id}.png`, // 마커 이미지 url, 스프라이트 이미지를 씁니다
      imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
      markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize),
      marker = new kakao.maps.Marker({
        position: position, // 마커의 위치
        image: markerImage,
      });

    marker.setMap(youtubemap); // 지도 위에 마커를 표출합니다
    // 배열에 생성된 마커를 추가합니다
    setMarkers((prev: any) => [...prev, marker]);
    return marker;
  }
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
  function removeMarker() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    setMarkers([]);
  }

  return (
    <div style={{ position: 'relative' }}>
      <div id="youtubemap" style={{ width: '50vw', height: '40vw', display: 'inline-block' }}></div>
      <span style={{ position: 'absolute' }}>
        <LikeVlog vlogplacename={name} vlogpid={videoid} history={history} vlogplaceid={vlogplaceid} />
      </span>
    </div>
  );
};

export default YoutubeMapevent;

/*global kakao */
import axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import './Top5Mapevent.css';

interface Props {
  videoid: any;
}

const YoutubeMapevent: FC<Props> = ({ children, videoid }) => {
  const latt = useRef(0);
  const long = useRef(0);
  const kakao = (window as any).kakao;
  const [place, setPlace] = useState([] as any);
  const [youtubemap, setYoutubemap] = useState(null);
  const [markers, setMarkers] = useState([] as any);

  useEffect(() => {
    setPlace([]);
    axios.get(`/api/vlog/findplace/${videoid}`).then((response) => {
      setPlace(response.data.data);
    });
  }, [videoid]);

  useEffect(() => {
    if (place.length !== 0) {
      mapscript();
    }
  }, [place]);

  useEffect(() => {
    let container = document.getElementById('youtubemap');
    let options = {
      center: new kakao.maps.LatLng(37.82465, 127.49651),
      level: 10,
    };
    setYoutubemap(new kakao.maps.Map(container, options));
  }, []);

  const mapscript = () => {
    removeMarker();
    for (var i = 0; i < place.length; i++) {
      var placePosition = new kakao.maps.LatLng(place[i].location_y, place[i].location_x),
        marker = addMarker(placePosition, i, place[i].categoryid);
      var infowindow = new kakao.maps.InfoWindow({
        content: place[i].name, // 인포윈도우에 표시할 내용
      });
      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(youtubemap, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }
  };

  function addMarker(position: any, idx: any, id: any) {
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
    </div>
  );
};

export default YoutubeMapevent;

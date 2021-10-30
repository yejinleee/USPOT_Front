import axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
interface Props {
  courseid: any;
}

const EnCoursemap: FC<Props> = (props: Props) => {
  const kakao = (window as any).kakao;
  const [place, setPlace] = useState([] as any);
  const [coursemap, setCoursemap] = useState(null);
  const [markers, setMarkers] = useState([] as any);
  const [name, setName] = useState();

  const x = useRef(0);
  const y = useRef(0);

  useEffect(() => {
    let container = document.getElementById('coursemap');
    let options = {
      center: new kakao.maps.LatLng(37.55699327194725, 126.97267350572926),
      level: 10,
    };
    setCoursemap(new kakao.maps.Map(container, options));
  }, []);

  useEffect(() => {
    setPlace([]);
    axios
      .get(`/api/en/myplacecourse/findall/${props.courseid}`)
      .then((response) => {
        setPlace(response.data.data);
        setName(response.data.data[0].courseName);
      })
      .catch((error) => {});
  }, [props.courseid]);

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
      x.current += place[i].myplaceDto.location_x;
      y.current += place[i].myplaceDto.location_y;
    }

    var Position = new kakao.maps.LatLng(y.current / place.length, x.current / place.length);
    coursemap.setCenter(Position);

    for (var i = 0; i < place.length; i++) {
      var placePosition = new kakao.maps.LatLng(place[i].myplaceDto.location_y, place[i].myplaceDto.location_x),
        marker = addMarker(placePosition, i, place[i].myplaceDto.categoryId);
      var infowindow = new kakao.maps.InfoWindow({
        content: `<span class="info-title">${place[i].myplaceDto.name}</span>`, // 인포윈도우에 표시할 내용
      });
      infowindow.open(coursemap, marker);

      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(coursemap, marker, infowindow));
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
      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(coursemap, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }
  };

  function addMarker(position: any, idx: any, id: any) {
    var number = String(idx + 1) + String(idx + 1);
    var imageSrc = `/src/icon/ㅇ.png`, // 마커 이미지 url, 스프라이트 이미지를 씁니다
      imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
      markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize),
      marker = new kakao.maps.Marker({
        position: position, // 마커의 위치
        image: markerImage,
      });

    marker.setMap(coursemap); // 지도 위에 마커를 표출합니다
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
      <div>{name}</div>
      <div id="coursemap" style={{ width: '50%', height: '40%', display: 'inline-block' }}></div>

      {place.map((v: string, index: number) => (
        <div>
          <div>{index}</div>
          <div>{place[index].myplaceDto.name}</div>
        </div>
      ))}
    </div>
  );
};

export default EnCoursemap;
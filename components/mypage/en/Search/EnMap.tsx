/*global kakao */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import EnMakeCourse from '../MakeCoures/EnMakeCourse';
import '@components/mypage/en/Search/Search.scss';

const EnMap = () => {
  const kakao = (window as any).kakao;
  const [station, setStation] = useState([] as any);
  const [select, setSelect] = useState('');
  const [open, setOpen] = useState(false);
  const [map, setMap] = useState(null);
  const [startplacename, setStartplacename] = useState('');
  const x = useRef(0);
  const y = useRef(0);

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 13,
    };
    setMap(new kakao.maps.Map(container, options));
  }, []);

  useEffect(() => {
    axios.get('/api/en/station/findall').then((response) => {
      setStation(response.data.data);
    });
  }, []);

  function displayMarker(place: any) {
    let marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.location_y, place.location_x),
    });
    kakao.maps.event.addListener(marker, 'mouseover', function () {
      infowindow.open(map, marker);
      infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.name + '</div>');
    });
    kakao.maps.event.addListener(marker, 'mouseout', function () {
      infowindow.close();
    });
    kakao.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.name + '</div>');
      infowindow.open(map, marker);
      setSelect(place);
      setStartplacename(place.name);
      setOpen(true);
    });
  }
  if (station.length !== 0) {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    x.current = 0;
    y.current = 0;

    for (var i = 0; i < station.length; i++) {
      x.current += station[i].location_x;
      y.current += station[i].location_y;
    }

    var Position = new kakao.maps.LatLng(y.current / station.length, x.current / station.length);

    map.setCenter(Position);
    for (let i = 0; i < station.length; i++) {
      displayMarker(station[i]);
    }
  }

  return (
    <>
      <div id="myMap" style={{ width: '30vw', height:'30vw', margin:'auto' }} />
      {open && <EnMakeCourse start={select} startplacename={startplacename} />}
    </>
  );
};

export default EnMap;

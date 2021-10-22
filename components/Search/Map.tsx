import MakeCourse from '@components/MakeCoures/MakeCourse';
import React, { FC, useEffect, useMemo, useState } from 'react';

interface Props {
  searchPlace: string;
}

const Map: FC<Props> = ({ children, searchPlace }) => {
  const kakao = (window as any).kakao;
  const [select, setSelect] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }

    function displayMarker(place: any) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
      kakao.maps.event.addListener(marker, 'mouseover', function () {
        infowindow.open(map, marker);
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
      });
      kakao.maps.event.addListener(marker, 'mouseout', function () {
        infowindow.close();
      });
      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
        setSelect(place);
        setOpen(true);
      });
    }
  }, [searchPlace]);

  console.log(select);

  return (
    <>
      <div id="myMap" style={{ width: '30vw', height: '30vw' }}></div>
      {open && <MakeCourse />}
    </>
  );
};

export default React.memo(Map);

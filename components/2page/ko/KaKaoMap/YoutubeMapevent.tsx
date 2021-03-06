/*global kakao */
import LikeVlog from '@components/2page/ko/Like/LikeVlog';
import axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import '../../Top5Mapevent.css';
import { History, LocationState } from 'history';

interface Props {
  videoid: any;
  history: History<LocationState>;
}

const YoutubeMapRsp: FC<Props> = ({ children, videoid, history }) => {
  const kakao = (window as any).kakao;
  const [place, setPlace] = useState([] as any);
  const [name, setName] = useState([] as any);
  const [youtubemap2, setYoutubemap2] = useState(null);
  const [markers, setMarkers] = useState([] as any);
  const [placeurl, setPlaceurl] = useState([] as any);
  const [vlogid, setVlogid] = useState([] as any);
  const [infowindow, setInfowindow] = useState(null);
  const x = useRef(0);
  const y = useRef(0);

  useEffect(() => {
    let container = document.getElementById('youtubemap');
    let options = {
      center: new kakao.maps.LatLng(37.55699327194725, 126.97267350572926),
      level: 10,
    };
    setYoutubemap2(new kakao.maps.Map(container, options));
    setInfowindow(new kakao.maps.InfoWindow({ zIndex: 1 }));
  }, []);

  useEffect(() => {
    axios
      .get(`/api/vlog/findplace/${videoid}`)
      .then((response) => {
        setPlace(response.data.data);
        setName([]);
        setPlaceurl([]);
        setVlogid([]);
        for (var i = 0; i < response.data.data.length; i++) {
          setName((prev: any) => [...prev, response.data.data[i].name]);
          setVlogid((prev: any) => [...prev, response.data.data[i].placeId]);
          setPlaceurl((prev: any) => [...prev, response.data.data[i].placeUrl]);
        }
      })
      .catch((error) => {});
  }, [videoid]);
  useEffect(() => {
    if (place.length !== 0) {
      mapscript();
    }
  }, [place]);

  const mapscript = () => {
    infowindow.close();
    removeMarker();
    x.current = 0;
    y.current = 0;

    for (var i = 0; i < place.length; i++) {
      x.current += place[i].location_x;
      y.current += place[i].location_y;
    }
    var Position = new kakao.maps.LatLng(y.current / place.length, x.current / place.length);
    youtubemap2.setCenter(Position);

    function displayMarker(place: any, i: any) {
      var placePosition = new kakao.maps.LatLng(place.location_y, place.location_x),
        marker = addMarker(placePosition, i, place.categoryId);
      marker.setMap(youtubemap2);

      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(`<span class="info-title">${place.name}</span>`);
        infowindow.open(youtubemap2, marker);
        var infoTitle = document.querySelectorAll('.info-title');
        infoTitle.forEach(function (e: any) {
          var w = e.offsetWidth;
          var ml = w / 2;
          e.parentElement.style.top = '62px';
          e.parentElement.style.left = '50%';
          e.parentElement.style.marginLeft = -ml + 'px';
          e.parentElement.previousSibling.style.display = 'none';
          e.parentElement.parentElement.style.border = '0px';
          e.parentElement.parentElement.style.background = 'unset';
        });
        infowindow.close();
        infowindow.open(youtubemap2, marker);
      });
    }

    for (let j = 0; j < place.length; j++) {
      displayMarker(place[j], j);
    }

    function addMarker(position: any, idx: any, id: any) {
      var imageSrc = `/src/icon/${id}.png`,
        imageSize = new kakao.maps.Size(36, 37),
        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize),
        marker = new kakao.maps.Marker({
          position: position,
          image: markerImage,
        });

      marker.setMap(youtubemap2);
      setMarkers((prev: any) => [...prev, marker]);
      return marker;
    }

    function removeMarker() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      setMarkers([]);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div id="youtubemap" style={{ width: '50%', height: '40%', display: 'inline-block' }}></div>
      <span className="likevlog_span" style={{ position: 'absolute', width: '45%' }}>
        <LikeVlog vlogplacename={name} vlogpid={videoid} history={history} vlogplaceid={vlogid} placeurl={placeurl} />
      </span>
    </div>
  );
};

export default YoutubeMapRsp;

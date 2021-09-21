import React, { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import './Toggle.css';
import Category from '@components/Category/category';
import Getapi from '@components/GetAPI/Getapi';

const Toggle = (props: any) => {
  const [selectedcategory, setSelectedcategory] = useState('안');
  const [selectedcity, setSelectedcity] = useState('없음'); //선택된도시 props로 넘겨주려고

  const [map, setMap] = useState(
    'https://user-images.githubusercontent.com/63544044/132854633-87a1c788-d972-4375-96bb-eacc081ec93b.png',
  );

  const [gyeongitoggle, setGyeongitoggle] = useState(false);
  const [gangwontoggle, setGangwontoggle] = useState(false);
  const [chungnamtoggle, setChungnamtoggle] = useState(false);
  const [chungbuktoggle, setChungbuktoggle] = useState(false);
  const [jeonnamtoggle, setJeonnamtoggle] = useState(false);
  const [jeonbuktoggle, setJeonbuktoggle] = useState(false);
  const [gyeongnamtoggle, setGyeonnamtoggle] = useState(false);
  const [gyeongbuktoggle, setGyeonbuktoggle] = useState(false);
  const [incheontoggle, setIncheontoggle] = useState(false);
  const [daejeontoggle, setDaejeontoggle] = useState(false);
  const [daegutoggle, setDaegutoggle] = useState(false);
  const [busantoggle, setBusantoggle] = useState(false);
  const [ulsantoggle, setUlsantoggle] = useState(false);
  const [gwangjutoggle, setGwangjutoggle] = useState(false);
  const [sejongtoggle, setSejongtoggle] = useState(false);

  const [gyeongi, setGyeongi] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
  } as any);

  const [gangwon, setGangwon] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
  } as any);
  const [chungnam, setChungnam] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
  } as any);
  const [chungbuk, setChungbuk] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
  } as any);
  const [gyeongnam, setGyeongnam] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
  } as any);
  const [gyeongbuk, setGyeongbuk] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
  } as any);
  const [jeonbuk, setJeonbuk] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
  } as any);
  const [jeonnam, setJeonnam] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
  } as any);
  const [incheon, setIncheon] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
  } as any);
  const [daejeon, setDajeon] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
  } as any);
  const [gwangju, setGwangju] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
  } as any);
  const [daegu, setDaegu] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
  } as any);
  const [ulsan, setUlsan] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
  } as any);
  const [busan, setBusan] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
  } as any);
  const [sejong, setSejong] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
  } as any);

  // Getapi 컴포넌트 분리해서 뺐음

  // const gyeongi_list = gyeongi.cities.map((v: string, index: number) => (
  //   <div
  //     id={v}
  //     key={index}
  //     className="citylist"
  //     onClick={() => {
  //       setMap(gyeongi.cities_link[index]);
  //       setSelectedcity(v);
  //     }}
  //     // onMouseOver = {()=>{setMap(gangwon.link)}} //시군에 마우스 오버하면 지도 바뀌는거
  //     // onMouseOut = {()=>{setMap(gyeongi.link)}} //렌더링양 에반데...~
  //   >
  //     {v}
  //   </div>
  // ));

  return (
    <>
      <Getapi
        setGyeongi={setGyeongi}
        setGangwon={setGangwon}
        setChungnam={setChungnam}
        setChungbuk={setChungbuk}
        setGyeongnam={setGyeongnam}
        setGyeongbuk={setGyeongbuk}
        setJeonbuk={setJeonbuk}
        setJeonnam={setJeonnam}
        setIncheon={setIncheon}
        setDajeon={setDajeon}
        setGwangju={setGwangju}
        setDaegu={setDaegu}
        setUlsan={setUlsan}
        setBusan={setBusan}
        setSejong={setSejong}
      />
      <Category setSelectedcategory={setSelectedcategory} />

      <img src={map} className="map" alt="map" />

      <button className="gotosecondbtn">
        <Link to={`/second/${selectedcity}/${selectedcategory}`} style={{ textDecoration: 'none', color: '#000000' }}>
          {selectedcity}의 추천 {selectedcategory} 보기 !
        </Link>
      </button>

      <div className="district_toggle">
        <label
          className="district"
          onClick={() => {
            setGyeongitoggle(!gyeongitoggle);
            !gyeongitoggle && setMap(gyeongi.link);
          }}
        >
          {gyeongi.name}
        </label>
        {/*경기*/}
        <div>{gyeongitoggle}</div>
        <label
          className="district"
          onClick={() => {
            setGangwontoggle(!gangwontoggle);
            !gangwontoggle && setMap(gangwon.link);
          }}
        >
          {gangwon.name}
        </label>{' '}
        {/*강원*/}
        {/*<div>{gangwontoggle && gangwon_list}</div>*/}
        <label
          className="district"
          onClick={() => {
            setIncheontoggle(!incheontoggle);
            !incheontoggle && setMap(incheon.link);
          }}
        >
          {incheon.name}
        </label>{' '}
        {/*인천*/}
        <label
          className="district"
          onClick={() => {
            setChungbuktoggle(!chungbuktoggle);
            !chungbuktoggle && setMap(chungbuk.link);
          }}
        >
          {chungbuk.name}
        </label>
        {/*충북*/}
        <label
          className="district"
          onClick={() => {
            setChungnamtoggle(!chungnamtoggle);
            !chungnamtoggle && setMap(chungnam.link);
          }}
        >
          {chungnam.name}
        </label>
        {/*충남*/}
        <label
          className="district"
          onClick={() => {
            setDaejeontoggle(!daejeontoggle);
            !daejeontoggle && setMap(daejeon.link);
          }}
        >
          {daejeon.name}
        </label>
        {/*대전*/}
        <label
          className="district"
          onClick={() => {
            setSejongtoggle(!sejongtoggle);
            !sejongtoggle && setMap(sejong.link);
          }}
        >
          {sejong.name}
        </label>
        {/*세종*/}
        <label
          className="district"
          onClick={() => {
            setJeonbuktoggle(!jeonbuktoggle);
            !jeonbuktoggle && setMap(jeonbuk.link);
          }}
        >
          {jeonbuk.name}
        </label>
        {/*전북*/}
        <label
          className="district"
          onClick={() => {
            setJeonnamtoggle(!jeonnamtoggle);
            !jeonnamtoggle && setMap(jeonnam.link);
          }}
        >
          {jeonnam.name}
        </label>
        {/*전남*/}
        <label
          className="district"
          onClick={() => {
            setGwangjutoggle(!gwangjutoggle);
            !gwangjutoggle && setMap(gwangju.link);
          }}
        >
          {gwangju.name}
        </label>
        {/*광주*/}
        <label
          className="district"
          onClick={() => {
            setGyeonbuktoggle(!gyeongbuktoggle);
            !gyeongbuktoggle && setMap(gyeongbuk.link);
          }}
        >
          {gyeongbuk.name}
        </label>
        {/*경북*/}
        <label
          className="district"
          onClick={() => {
            setGyeonnamtoggle(!gyeongnamtoggle);
            !gyeongnamtoggle && setMap(gyeongnam.link);
          }}
        >
          {gyeongnam.name}
        </label>
        {/*경남*/}
        <label
          className="district"
          onClick={() => {
            setDaegutoggle(!daegutoggle);
            !daegutoggle && setMap(daegu.link);
          }}
        >
          {daegu.name}
        </label>
        {/*대구*/}
        <label
          className="district"
          onClick={() => {
            setUlsantoggle(!ulsantoggle);
            !ulsantoggle && setMap(ulsan.link);
          }}
        >
          {ulsan.name}
        </label>
        {/*울산*/}
        <label
          className="district"
          onClick={() => {
            setBusantoggle(!busantoggle);
            !busantoggle && setMap(busan.link);
          }}
        >
          {busan.name}
        </label>
        {/*부산*/}
      </div>
    </>
  );
};

export default Toggle;

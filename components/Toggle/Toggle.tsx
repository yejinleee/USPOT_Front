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

  const gyeongi_list = gyeongi.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(gyeongi.city[index].city_link);
        setSelectedcity(gyeongi.city[index].city_name);
      }}
      // onMouseOver = {()=>{setMap(gangwon.link)}} //시군에 마우스 오버하면 지도 바뀌는거
      // onMouseOut = {()=>{setMap(gyeongi.link)}} //렌더링양 에반데...~
    >
      {gyeongi.city[index].city_name}
    </div>
  ));
  const gangwon_list = gangwon.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(gangwon.city[index].city_link);
        setSelectedcity(gangwon.city[index].city_name);

      }}
    >
      {gangwon.city[index].city_name}
    </div>
  ));
  const chungnam_list = chungnam.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(chungnam.city[index].city_link);
        setSelectedcity(chungnam.city[index].city_name);

      }}
    >
      {chungnam.city[index].city_name}
    </div>
  ));
  const chungbuk_list = chungbuk.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(chungbuk.city[index].city_link);
        setSelectedcity(chungbuk.city[index].city_name);

      }}
    >
      {chungbuk.city[index].city_name}
    </div>
  ));
  const jeonnam_list = jeonnam.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(jeonnam.city[index].city_link);
        setSelectedcity(jeonnam.city[index].city_name);

      }}
    >
      {jeonnam.city[index].city_name}
    </div>
  ));
  const jeonbuk_list = jeonbuk.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(jeonbuk.city[index].city_link);
        setSelectedcity(jeonbuk.city[index].city_name);

      }}
    >
      {jeonbuk.city[index].city_name}
    </div>
  ));
  const gyeongnam_list = gyeongnam.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(gyeongnam.city[index].city_link);
        setSelectedcity(gyeongnam.city[index].city_name);

      }}
    >
      {gyeongnam.city[index].city_name}
    </div>
  ));
  const gyeongbuk_list = gyeongbuk.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(gyeongbuk.city[index].city_link);
        setSelectedcity(gyeongbuk.city[index].city_name);

      }}
    >
      {gyeongbuk.city[index].city_name}
    </div>
  ));
  const incheon_list = incheon.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(incheon.city[index].city_link);
        setSelectedcity(incheon.city[index].city_name);

      }}
    >
      {incheon.city[index].city_name}
    </div>
  ));
  const daejeon_list = daejeon.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(daejeon.city[index].city_link);
        setSelectedcity(daejeon.city[index].city_name);

      }}
    >
      {daejeon.city[index].city_name}
    </div>
  ));
  const daegu_list = daegu.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(daegu.city[index].city_link);
        setSelectedcity(daegu.city[index].city_name);

      }}
    >
      {daegu.city[index].city_name}
    </div>
  ));
  const busan_list = busan.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(busan.city[index].city_link);
        setSelectedcity(busan.city[index].city_name);

      }}
    >
      {busan.city[index].city_name}
    </div>
  ));
  const ulsan_list = ulsan.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(ulsan.city[index].city_link);
        setSelectedcity(ulsan.city[index].city_name);

      }}
    >
      {ulsan.city[index].city_name}
    </div>
  ));
  const gwangju_list = gwangju.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(gwangju.city[index].city_link);
        setSelectedcity(gwangju.city[index].city_name);

      }}
    >
      {gwangju.city[index].city_name}
    </div>
  ));
  const sejong_list = sejong.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(sejong.city[index].city_link);
        setSelectedcity(sejong.city[index].city_name);

      }}
    >
      {sejong.city[index].city_name}
    </div>
  ));

  function selectedalert(){
    if (selectedcity==='없음'){
      if (selectedcategory==='안'){
        return (alert("지역과 카테고리 모두 선택하여 주십시오"))
      }
      else{
        return (alert("지역을 선택하여 주십시오"))
      }
    }
    if (selectedcategory==='안'){
      if (selectedcity !=='없음'){
        return ( alert("카테고리를 선택하여 주십시오"))
      }
    }
  }
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
        <Link to={`/${selectedcity}/${selectedcategory}`} style={{ textDecoration: 'none', color: '#000000' }}>
          {selectedcity}의 추천 {selectedcategory} 보기 !
        </Link>
      </button>
=======
      {/*/!*1번) 암것도 없다가 카테고리랑 지역 둘다 고르면 버튼 생김. alert기능의미없음*!/*/}
      {selectedcity!=='없음' && selectedcategory!=='안' &&
      <Link to={`/${selectedcity}/${selectedcategory}`} style={{ textDecoration: 'none', color: '#000000' }}>
        <button className="gotosecondbtn" onClick={selectedalert}>
          {selectedcity}의 추천 {selectedcategory} 보기 !!
        </button>
      </Link>}

      {/*2번) 버튼은 계속 있는데 둘다 고르면 보러가기!! 부분을 눌러야 링크연결됨, alert유효*/}
      {/*<button className="gotosecondbtn" onClick={selectedalert}>*/}
      {/*  {selectedcity}의 추천 {selectedcategory}*/}
      {/*  {selectedcity!=='없음' && selectedcategory!=='안' &&*/}
      {/*  <Link to={`/second/${selectedcity}/${selectedcategory}`} style={{ textDecoration: 'none', color: '#000000' }}>*/}
      {/*       보러가기!!*/}
      {/*  </Link>}*/}
      {/*</button>*/}

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
        <div>{gyeongitoggle && gyeongi_list}</div>

        <label
          className="district"
          onClick={() => {
            setGangwontoggle(!gangwontoggle);
            !gangwontoggle && setMap(gangwon.link);
          }}
        >
          {gangwon.name}
        </label>{' '}
        <div>{gangwontoggle && gangwon_list}</div>
        <label
          className="district"
          onClick={() => {
            setIncheontoggle(!incheontoggle);
            !incheontoggle && setMap(incheon.link);
          }}
        >
          {incheon.name}
        </label>{' '}
        <div>{incheontoggle && incheon_list}</div>
        <label
          className="district"
          onClick={() => {
            setChungbuktoggle(!chungbuktoggle);
            !chungbuktoggle && setMap(chungbuk.link);
          }}
        >
          {chungbuk.name}
        </label>
        <div>{chungbuktoggle && chungbuk_list}</div>
        <label
          className="district"
          onClick={() => {
            setChungnamtoggle(!chungnamtoggle);
            !chungnamtoggle && setMap(chungnam.link);
          }}
        >
          {chungnam.name}
        </label>
        <div>{chungnamtoggle && chungnam_list}</div>
        <label
          className="district"
          onClick={() => {
            setDaejeontoggle(!daejeontoggle);
            !daejeontoggle && setMap(daejeon.link);
          }}
        >
          {daejeon.name}
        </label>
        <div>{daejeontoggle && daejeon_list}</div>
        <label
          className="district"
          onClick={() => {
            setSejongtoggle(!sejongtoggle);
            !sejongtoggle && setMap(sejong.link);
          }}
        >
          {sejong.name}
        </label>
        <div>{sejongtoggle && sejong_list}</div>
        <label
          className="district"
          onClick={() => {
            setJeonbuktoggle(!jeonbuktoggle);
            !jeonbuktoggle && setMap(jeonbuk.link);
          }}
        >
          {jeonbuk.name}
        </label>
        <div>{jeonbuktoggle && jeonbuk_list}</div>
        <label
          className="district"
          onClick={() => {
            setJeonnamtoggle(!jeonnamtoggle);
            !jeonnamtoggle && setMap(jeonnam.link);
          }}
        >
          {jeonnam.name}
        </label>
        <div>{jeonnamtoggle && jeonnam_list}</div>
        <label
          className="district"
          onClick={() => {
            setGwangjutoggle(!gwangjutoggle);
            !gwangjutoggle && setMap(gwangju.link);
          }}
        >
          {gwangju.name}
        </label>
        <div>{gwangjutoggle && gwangju_list}</div>
        <label
          className="district"
          onClick={() => {
            setGyeonbuktoggle(!gyeongbuktoggle);
            !gyeongbuktoggle && setMap(gyeongbuk.link);
          }}
        >
          {gyeongbuk.name}
        </label>
        <div>{gyeongbuktoggle && gyeongbuk_list}</div>
        <label
          className="district"
          onClick={() => {
            setGyeonnamtoggle(!gyeongnamtoggle);
            !gyeongnamtoggle && setMap(gyeongnam.link);
          }}
        >
          {gyeongnam.name}
        </label>
        <div>{gyeongnamtoggle && gyeongnam_list}</div>
        <label
          className="district"
          onClick={() => {
            setDaegutoggle(!daegutoggle);
            !daegutoggle && setMap(daegu.link);
          }}
        >
          {daegu.name}
        </label>
        <div>{daegutoggle && daegu_list}</div>
        <label
          className="district"
          onClick={() => {
            setUlsantoggle(!ulsantoggle);
            !ulsantoggle && setMap(ulsan.link);
          }}
        >
          {ulsan.name}
        </label>
        <div>{ulsantoggle && ulsan_list}</div>
        <label
          className="district"
          onClick={() => {
            setBusantoggle(!busantoggle);
            !busantoggle && setMap(busan.link);
          }}
        >
          {busan.name}
        </label>
        <div>{busantoggle && busan_list}</div>
      </div>
    </>
  );
};

export default Toggle;

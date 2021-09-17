import React, { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import './Toggle.css';
import Child from '@components/Category/child';
import Category from '@components/Category/category';
import Province from '@components/Category/Province';
import { type } from 'os';
import Citylist from '@components/Category/citylist';

const Toggle = () => {
  const [cate, setCate] = useState('안');

  const [seoultoggle, setSeoultoggle] = useState(false);
  const [gyeongitoggle, setGyeongitoggle] = useState(false);
  const [gangwontoggle, setGangwontoggle] = useState(false);

  const [selectedcity, setSelectedcity] = useState(''); //선택된도시 props로 넘겨주려고

  const pin = './images/pin.png';
  const [map, setMap] = useState(
    'https://user-images.githubusercontent.com/63544044/132854633-87a1c788-d972-4375-96bb-eacc081ec93b.png',
  );

  // const gyeongi_list = gyeongi.map((v) => (<div id={v} key={v}>{v}</div>));

  const [province, setProvince] = useState([] as any);
  const [provincelink, setProvincelink] = useState([] as any);
  const [gyeongi, setGyeongi] = useState([] as any);
  const [gangwon, setGangwon] = useState([] as any);
  const [chungnam, setChungnam] = useState([] as any);
  const [chungbuk, setcCungbuk] = useState([] as any);
  const [gyeongnam, setGyeongnam] = useState([] as any);
  const [gyeonbuk, setGyeonbuk] = useState([] as any);
  const [jeonbuk, setJeonbuk] = useState([] as any);
  const [jeonnam, setJeonnam] = useState([] as any);
  const [incheon, setIncheon] = useState([] as any);
  const [daejeon, setDajeon] = useState([] as any);
  const [gwangju, setGwangju] = useState([] as any);
  const [daegu, setDaegu] = useState([] as any);
  const [ulsan, setUlsan] = useState([] as any);
  const [busan, setBusan] = useState([] as any);
  const [sejong, setSejong] = useState([] as any);

  const [gyeongilink, setGyeongilink] = useState([] as any);
  const [gangwonlink, setGangwonlink] = useState([] as any);
  const [chungnamlink, setChungnamlink] = useState([] as any);
  const [chungbuklink, setcCungbuklink] = useState([] as any);
  const [gyeongnamlink, setGyeongnamlink] = useState([] as any);
  const [gyeonbuklink, setGyeonbuklink] = useState([] as any);
  const [jeonbuklink, setJeonbuklink] = useState([] as any);
  const [jeonnamlink, setJeonnamlink] = useState([] as any);
  const [incheonlink, setIncheonlink] = useState([] as any);
  const [daejeonlink, setDajeonlink] = useState([] as any);
  const [gwangjulink, setGwangjulink] = useState([] as any);
  const [daegulink, setDaegulink] = useState([] as any);
  const [ulsanlink, setUlsanlink] = useState([] as any);
  const [busanlink, setBusanlink] = useState([] as any);
  const [sejonglink, setSejonglink] = useState([] as any);

  useEffect(() => {
    axios.get('api/province/findprovince').then((response) => {
      for (var i = 0; i < response.data.data.length; i++) {
        setProvince((prev: any) => [...prev, response.data.data[i].name]);
        setProvincelink((prev: any) => [...prev, response.data.data[i].provinceLink]);
        for (var j = 0; j < response.data.data[i].cityList.length; j++) {
          if (i === 0) {
            setGyeongi((prev: any) => [...prev, response.data.data[i].cityList[j].name]);
            setGyeongilink((prev: any) => [...prev, response.data.data[i].cityList[j].cityLink]);
          } else if (i === 1) {
            setGangwon((prev: any) => [...prev, response.data.data[i].cityList[j].name]);
            setGangwonlink((prev: any) => [...prev, response.data.data[i].cityList[j].cityLink]);
          } else if (i === 2) {
            setChungnam((prev: any) => [...prev, response.data.data[i].cityList[j].name]);
            setChungnamlink((prev: any) => [...prev, response.data.data[i].cityList[j].cityLink]);
          } else if (i === 3) {
            setcCungbuk((prev: any) => [...prev, response.data.data[i].cityList[j].name]);
            setcCungbuklink((prev: any) => [...prev, response.data.data[i].cityList[j].cityLink]);
          } else if (i === 4) {
            setJeonnam((prev: any) => [...prev, response.data.data[i].cityList[j].name]);
            setJeonnamlink((prev: any) => [...prev, response.data.data[i].cityList[j].cityLink]);
          } else if (i === 5) {
            setJeonbuk((prev: any) => [...prev, response.data.data[i].cityList[j].name]);
            setJeonbuklink((prev: any) => [...prev, response.data.data[i].cityList[j].cityLink]);
          } else if (i === 6) {
            setGyeongnam((prev: any) => [...prev, response.data.data[i].cityList[j].name]);
            setGyeongnamlink((prev: any) => [...prev, response.data.data[i].cityList[j].cityLink]);
          } else if (i === 7) {
            setGyeonbuk((prev: any) => [...prev, response.data.data[i].cityList[j].name]);
            setGyeonbuklink((prev: any) => [...prev, response.data.data[i].cityList[j].cityLink]);
          } else if (i === 8) {
            setIncheon((prev: any) => [...prev, response.data.data[i].cityList[j].name]);
            setIncheonlink((prev: any) => [...prev, response.data.data[i].cityList[j].cityLink]);
          } else if (i === 9) {
            setDajeon((prev: any) => [...prev, response.data.data[i].cityList[j].name]);
            setDajeonlink((prev: any) => [...prev, response.data.data[i].cityList[j].cityLink]);
          } else if (i === 10) {
            setGwangju((prev: any) => [...prev, response.data.data[i].cityList[j].name]);
            setGwangjulink((prev: any) => [...prev, response.data.data[i].cityList[j].cityLink]);
          } else if (i === 11) {
            setDaegu((prev: any) => [...prev, response.data.data[i].cityList[j].name]);
            setDaegulink((prev: any) => [...prev, response.data.data[i].cityList[j].cityLink]);
          } else if (i === 12) {
            setUlsan((prev: any) => [...prev, response.data.data[i].cityList[j].name]);
            setUlsanlink((prev: any) => [...prev, response.data.data[i].cityList[j].cityLink]);
          } else if (i === 13) {
            setBusan((prev: any) => [...prev, response.data.data[i].cityList[j].name]);
            setBusanlink((prev: any) => [...prev, response.data.data[i].cityList[j].cityLink]);
          } else {
            setSejong((prev: any) => [...prev, response.data.data[i].cityList[j].name]);
            setSejonglink((prev: any) => [...prev, response.data.data[i].cityList[j].cityLink]);
          }
        }
      }
    });
  }, []);

  const gyeongi_list = gyeongi.map((v: string) => (
    <div id={v} key={v}>
      {v}
    </div>
  ));
  const gyeongi_link = gyeongilink.map((v: string) => (
    <div id={v} key={v}>
      {v}
      <br />
    </div>
  ));
  const gangwon_list = gangwon.map((v: string) => (
    <div id={v} key={v}>
      {v}
      <br />
    </div>
  ));

  return (
    <>
      {/*<Province city={names}></Province>*/}
      {/*<Citylist city={ggc}></Citylist>*/}
      <Category setCate={setCate} />
      <p>{cate} 골랐음</p>
      <Child setSelectedcity={setSelectedcity} />
      {/*Child : 선택한 city넘겨줘서 연결되는 컴포넌트. 테스트용 아마도 Child를 Second로 넘겨주거나 그런식*/}

      <img src={map} className="map" alt="map" />

      <div className="district_toggle">
        <label
          className="district"
          onClick={() => {
            setGyeongitoggle(!gyeongitoggle);
            !gyeongitoggle && setMap(provincelink[0]);
          }}
        >
          {province[0]}
        </label>{' '}
        {/*경기*/}
        <div>{gyeongitoggle && gyeongi_list}</div>
        <label
          className="district"
          onClick={() => {
            setGangwontoggle(!gangwontoggle);
            setMap(provincelink[1]);
          }}
        >
          {province[1]}
        </label>{' '}
        {/*강원*/}
        <div>{gangwontoggle && gangwon_list}</div>
        <label
          className="district"
          onClick={() => {
            setGangwontoggle(!gangwontoggle);
            setMap(provincelink[8]);
          }}
        >
          {province[8]}
        </label>{' '}
        {/*인천*/}
        {/*이 아래부터는 지역리스트 토글 안만들어둠. 아직데이터없어서! 위에거도 그냥 아무지역이나 한거긴 하구*/}
        <label
          className="district"
          onClick={() => {
            // setGangwontoggle(!gangwontoggle)
            setMap(provincelink[3]);
          }}
        >
          {province[3]}
        </label>{' '}
        {/*충북*/}
        <label
          className="district"
          onClick={() => {
            // setGangwontoggle(!gangwontoggle)
            setMap(provincelink[2]);
          }}
        >
          {province[2]}
        </label>{' '}
        {/*충남*/}
        <label
          className="district"
          onClick={() => {
            // setGangwontoggle(!gangwontoggle)
            setMap(provincelink[9]);
          }}
        >
          {province[9]}
        </label>{' '}
        {/*대전*/}
        <label
          className="district"
          onClick={() => {
            // setGangwontoggle(!gangwontoggle)
            // setMap(
            //   provincelink[]
            // );
          }}
        >
          세종특별시
        </label>
        <label
          className="district"
          onClick={() => {
            // setGangwontoggle(!gangwontoggle)
            setMap(provincelink[5]);
          }}
        >
          {province[5]}
        </label>{' '}
        {/*전북*/}
        <label
          className="district"
          onClick={() => {
            // setGangwontoggle(!gangwontoggle)
            setMap(provincelink[4]);
          }}
        >
          {province[4]}
        </label>{' '}
        {/*전남*/}
        <label
          className="district"
          onClick={() => {
            // setGangwontoggle(!gangwontoggle)
            setMap(provincelink[13]);
          }}
        >
          {province[13]}
        </label>{' '}
        {/*광주*/}
        <label
          className="district"
          onClick={() => {
            // setGangwontoggle(!gangwontoggle)
            setMap(provincelink[7]);
          }}
        >
          {province[7]}
        </label>{' '}
        {/*경북*/}
        <label
          className="district"
          onClick={() => {
            // setGangwontoggle(!gangwontoggle)
            setMap(provincelink[6]);
          }}
        >
          {province[6]}
        </label>{' '}
        {/*경남*/}
        <label
          className="district"
          onClick={() => {
            // setGangwontoggle(!gangwontoggle)
            setMap(provincelink[10]);
          }}
        >
          {province[10]}
        </label>{' '}
        {/*대구*/}
        <label
          className="district"
          onClick={() => {
            // setGangwontoggle(!gangwontoggle)
            setMap(provincelink[12]);
          }}
        >
          {province[12]}
        </label>{' '}
        {/*울산*/}
        <label
          className="district"
          onClick={() => {
            // setGangwontoggle(!gangwontoggle)
            setMap(provincelink[11]);
          }}
        >
          {province[11]}
        </label>{' '}
        {/*부산*/}
      </div>
    </>
  );
};

export default Toggle;

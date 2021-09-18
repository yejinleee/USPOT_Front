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

  const [selectedcity, setSelectedcity] = useState(''); //선택된도시 props로 넘겨주려고

  const [map, setMap] = useState(
    'https://user-images.githubusercontent.com/63544044/132854633-87a1c788-d972-4375-96bb-eacc081ec93b.png',
  );

  const [gyeongi, setGyeongi] = useState({
    id: '',
    name: '',
    link: '',
    city: [
      // {
      //   city_name: '',
      //   city_link: '',
      //   station: [],
      // },
    ],
  } as any);
  const [gangwon, setGangwon] = useState({
    id: '',
    name: '',
    link: '',
  } as any);
  const [chungnam, setChungnam] = useState({
    id: '',
    name: '',
    link: '',
  } as any);
  const [chungbuk, setcCungbuk] = useState({
    id: '',
    name: '',
    link: '',
  } as any);
  const [gyeongnam, setGyeongnam] = useState({
    id: '',
    name: '',
    link: '',
  } as any);
  const [gyeongbuk, setGyeongbuk] = useState({
    id: '',
    name: '',
    link: '',
  } as any);
  const [jeonbuk, setJeonbuk] = useState({
    id: '',
    name: '',
    link: '',
  } as any);
  const [jeonnam, setJeonnam] = useState({
    id: '',
    name: '',
    link: '',
  } as any);
  const [incheon, setIncheon] = useState({
    id: '',
    name: '',
    link: '',
  } as any);
  const [daejeon, setDajeon] = useState({
    id: '',
    name: '',
    link: '',
  } as any);
  const [gwangju, setGwangju] = useState({
    id: '',
    name: '',
    link: '',
  } as any);
  const [daegu, setDaegu] = useState({
    id: '',
    name: '',
    link: '',
  } as any);
  const [ulsan, setUlsan] = useState({
    id: '',
    name: '',
    link: '',
  } as any);
  const [busan, setBusan] = useState({
    id: '',
    name: '',
    link: '',
  } as any);
  const [sejong, setSejong] = useState({
    id: '',
    name: '',
    link: '',
  } as any);

  const [stationlist, setStationlist] = useState([] as any);

  useEffect(() => {
    axios.get('api/province/findprovince').then((response) => {
      for (var i = 0; i < response.data.data.length; i++) {
        if (i == 0) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            setGyeongi((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              city: [
                ...prev.city,
                {
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: stationlist,
                },
              ],
            }));
          }
        } else if (i === 1) {
          setGangwon({
            ...gangwon,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 2) {
          setChungnam({
            ...chungnam,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 3) {
          setcCungbuk({
            ...chungbuk,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 4) {
          setJeonnam({
            ...jeonnam,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 5) {
          setJeonbuk({
            ...jeonbuk,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 6) {
          setGyeongnam({
            ...gyeongnam,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 7) {
          setGyeongbuk({
            ...gyeongbuk,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 8) {
          setIncheon({
            ...incheon,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 9) {
          setDajeon({
            ...daejeon,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 10) {
          setDaegu({
            ...daegu,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 11) {
          setBusan({
            ...busan,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 12) {
          setUlsan({
            ...ulsan,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 13) {
          setGwangju({
            ...gwangju,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else {
          setSejong({
            ...sejong,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        }
      }
    });
  }, []);
  // gyeongi.city.map((v: any) => {
  //   console.log(v.city_name);
  // });
  console.log(gyeongi.city[1]);
  gyeongi.city.map((v: any) => {
    console.log(v.city_name);
  });
  // const gyeongi_list = gyeongi.map((v:string) => (<div id={v} key={v}>{v}</div>));

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
            !gyeongitoggle && setMap(gyeongi.link);
          }}
        >
          {gyeongi.name}
        </label>{' '}
        {/*경기*/}
        {/*<div>{gyeongitoggle && gyeongi_list}</div>*/}
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
        </label>{' '}
        {/*충북*/}
        <label
          className="district"
          onClick={() => {
            setChungnamtoggle(!chungnamtoggle);
            !chungnamtoggle && setMap(chungnam.link);
          }}
        >
          {chungnam.name}
        </label>{' '}
        {/*충남*/}
        <label
          className="district"
          onClick={() => {
            setDaejeontoggle(!daejeontoggle);
            !daejeontoggle && setMap(daejeon.link);
          }}
        >
          {daejeon.name}
        </label>{' '}
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
        </label>{' '}
        {/*전북*/}
        <label
          className="district"
          onClick={() => {
            setJeonnamtoggle(!jeonnamtoggle);
            !jeonnamtoggle && setMap(jeonnam.link);
          }}
        >
          {jeonnam.name}
        </label>{' '}
        {/*전남*/}
        <label
          className="district"
          onClick={() => {
            setGwangjutoggle(!gwangjutoggle);
            !gwangjutoggle && setMap(gwangju.link);
          }}
        >
          {gwangju.name}
        </label>{' '}
        {/*광주*/}
        <label
          className="district"
          onClick={() => {
            setGyeonbuktoggle(!gyeongbuktoggle);
            !gyeongbuktoggle && setMap(gyeongbuk.link);
          }}
        >
          {gyeongbuk.name}
        </label>{' '}
        {/*경북*/}
        <label
          className="district"
          onClick={() => {
            setGyeonnamtoggle(!gyeongnamtoggle);
            !gyeongnamtoggle && setMap(gyeongnam.link);
          }}
        >
          {gyeongnam.name}
        </label>{' '}
        {/*경남*/}
        <label
          className="district"
          onClick={() => {
            setDaegutoggle(!daegutoggle);
            !daegutoggle && setMap(daegu.link);
          }}
        >
          {daegu.name}
        </label>{' '}
        {/*대구*/}
        <label
          className="district"
          onClick={() => {
            setUlsantoggle(!ulsantoggle);
            !ulsantoggle && setMap(ulsan.link);
          }}
        >
          {ulsan.name}
        </label>{' '}
        {/*울산*/}
        <label
          className="district"
          onClick={() => {
            setBusantoggle(!busantoggle);
            !busantoggle && setMap(busan.link);
          }}
        >
          {busan.name}
        </label>{' '}
        {/*부산*/}
      </div>
    </>
  );
};

export default Toggle;

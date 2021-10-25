import React, { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import '@components/1page/Toggle.css';
import EnCategory from '@components/1page/en/Category/Encategory';
import EnContainer from '@components/1page/en/Container/EnContainer';

const Toggle = () => {
  const [selectedcategory, setSelectedcategory] = useState('안');
  const [selectedcity, setSelectedcity] = useState('없음'); //선택된도시 props로 넘겨주려고

  const [map, setMap] = useState('src/지도.png');

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

  const [stationlist, setStationlist] = useState([] as any);
  const [flag, setFlag] = useState(false);
  const [index, setIndex] = useState(0);

  const gyeongiindex = useRef(0);
  const gangwonindex = useRef(0);
  const chungnamindex = useRef(0);
  const chungbukindex = useRef(0);
  const jeonnamindex = useRef(0);
  const jeonbukindex = useRef(0);
  const gyeongnamindex = useRef(0);
  const gyeongbukindex = useRef(0);
  const incheonindex = useRef(0);
  const daejeonindex = useRef(0);
  const daeguindex = useRef(0);
  const busanindex = useRef(0);
  const ulsanindex = useRef(0);
  const gwangjuindex = useRef(0);
  const sejongindex = useRef(0);
  useEffect(() => {
    axios.get('/api/en/province/findall').then((response) => {
      for (var i = 0; i < response.data.data.length; i++) {
        setIndex(i);
        if (i === 0) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
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
                  city_id: response.data.data[i].cityList[j].cityid,
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: [],
                },
              ],
            }));
            setFlag(true);
          }
          setFlag(false);
        } else if (i === 1) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            setGangwon((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              city: [
                ...prev.city,
                {
                  city_id: response.data.data[i].cityList[j].cityid,
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: [],
                },
              ],
            }));
            setFlag(true);
          }
          setFlag(false);
        } else if (i === 2) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            setChungnam((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              city: [
                ...prev.city,
                {
                  city_id: response.data.data[i].cityList[j].cityid,
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: [],
                },
              ],
            }));
            setFlag(true);
          }
          setFlag(false);
        } else if (i === 3) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            setChungbuk((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              city: [
                ...prev.city,
                {
                  city_id: response.data.data[i].cityList[j].cityid,
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: [],
                },
              ],
            }));
            setFlag(true);
          }
          setFlag(false);
        } else if (i === 4) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            setJeonnam((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              city: [
                ...prev.city,
                {
                  city_id: response.data.data[i].cityList[j].cityid,
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: [],
                },
              ],
            }));
            setFlag(true);
          }
          setFlag(false);
        } else if (i === 5) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            setJeonbuk((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              city: [
                ...prev.city,
                {
                  city_id: response.data.data[i].cityList[j].cityid,
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: [],
                },
              ],
            }));
            setFlag(true);
          }
          setFlag(false);
        } else if (i === 6) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            setGyeongnam((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              city: [
                ...prev.city,
                {
                  city_id: response.data.data[i].cityList[j].cityid,
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: [],
                },
              ],
            }));
            setFlag(true);
          }
          setFlag(false);
        } else if (i === 7) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            setGyeongbuk((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              city: [
                ...prev.city,
                {
                  city_id: response.data.data[i].cityList[j].cityid,
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: [],
                },
              ],
            }));
            setFlag(true);
          }
          setFlag(false);
        } else if (i === 8) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            setIncheon((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              city: [
                ...prev.city,
                {
                  city_id: response.data.data[i].cityList[j].cityid,
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: [],
                },
              ],
            }));
            setFlag(true);
          }
          setFlag(false);
        } else if (i === 9) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            setDajeon((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              city: [
                ...prev.city,
                {
                  city_id: response.data.data[i].cityList[j].cityid,
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: [],
                },
              ],
            }));
            setFlag(true);
          }
          setFlag(false);
        } else if (i === 10) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            setDaegu((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              city: [
                ...prev.city,
                {
                  city_id: response.data.data[i].cityList[j].cityid,
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: [],
                },
              ],
            }));
            setFlag(true);
          }
          setFlag(false);
        } else if (i === 11) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            setBusan((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              city: [
                ...prev.city,
                {
                  city_id: response.data.data[i].cityList[j].cityid,
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: [],
                },
              ],
            }));
            setFlag(true);
          }
          setFlag(false);
        } else if (i === 12) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            setUlsan((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              city: [
                ...prev.city,
                {
                  city_id: response.data.data[i].cityList[j].cityid,
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: [],
                },
              ],
            }));
            setFlag(true);
          }
          setFlag(false);
        } else if (i === 13) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            setGwangju((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              city: [
                ...prev.city,
                {
                  city_id: response.data.data[i].cityList[j].cityid,
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: [],
                },
              ],
            }));
            setFlag(true);
          }
          setFlag(false);
        } else {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            setSejong((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              city: [
                ...prev.city,
                {
                  city_id: response.data.data[i].cityList[j].cityid,
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: [],
                },
              ],
            }));
            setFlag(true);
          }
          setFlag(false);
        }
      }
    });
  }, []);

  if (index === 0) {
    if (gyeongi.id != '') {
      if (flag) {
        if (stationlist != '') {
          gyeongi.city[gyeongiindex.current].station = stationlist;
          gyeongiindex.current += 1;
        }
      }
    }
  } else if (index === 1) {
    if (gangwon.id != '') {
      if (flag) {
        if (stationlist != '') {
          gangwon.city[gangwonindex.current].station = stationlist;
          gangwonindex.current += 1;
        }
      }
    }
  } else if (index === 2) {
    if (chungnam.id != '') {
      if (flag) {
        if (stationlist != '') {
          chungnam.city[chungnamindex.current].station = stationlist;
          chungnamindex.current += 1;
        }
      }
    }
  } else if (index === 3) {
    if (chungbuk.id != '') {
      if (flag) {
        if (stationlist != '') {
          chungbuk.city[chungbukindex.current].station = stationlist;
          chungbukindex.current += 1;
        }
      }
    }
  } else if (index === 4) {
    if (jeonnam.id != '') {
      if (flag) {
        if (stationlist != '') {
          jeonnam.city[jeonnamindex.current].station = stationlist;
          jeonnamindex.current += 1;
        }
      }
    }
  } else if (index === 5) {
    if (jeonbuk.id != '') {
      if (flag) {
        if (stationlist != '') {
          jeonbuk.city[jeonbukindex.current].station = stationlist;
          jeonbukindex.current += 1;
        }
      }
    }
  } else if (index === 6) {
    if (gyeongnam.id != '') {
      if (flag) {
        if (stationlist != '') {
          gyeongnam.city[gyeongnamindex.current].station = stationlist;
          gyeongnamindex.current += 1;
        }
      }
    }
  } else if (index === 7) {
    if (gyeongbuk.id != '') {
      if (flag) {
        if (stationlist != '') {
          gyeongbuk.city[gyeongbukindex.current].station = stationlist;
          gyeongbukindex.current += 1;
        }
      }
    }
  } else if (index === 8) {
    if (incheon.id != '') {
      if (flag) {
        if (stationlist != '') {
          incheon.city[incheonindex.current].station = stationlist;
          incheonindex.current += 1;
        }
      }
    }
  } else if (index === 9) {
    if (daejeon.id != '') {
      if (flag) {
        if (stationlist != '') {
          daejeon.city[daejeonindex.current].station = stationlist;
          daejeonindex.current += 1;
        }
      }
    }
  } else if (index === 10) {
    if (daegu.id != '') {
      if (flag) {
        if (stationlist != '') {
          daegu.city[daeguindex.current].station = stationlist;
          daeguindex.current += 1;
        }
      }
    }
  } else if (index === 11) {
    if (busan.id != '') {
      if (flag) {
        if (stationlist != '') {
          busan.city[busanindex.current].station = stationlist;
          busanindex.current += 1;
        }
      }
    }
  } else if (index === 12) {
    if (ulsan.id != '') {
      if (flag) {
        if (stationlist != '') {
          ulsan.city[ulsanindex.current].station = stationlist;
          ulsanindex.current += 1;
        }
      }
    }
  } else if (index === 13) {
    if (gwangju.id != '') {
      if (flag) {
        if (stationlist != '') {
          gwangju.city[gwangjuindex.current].station = stationlist;
          gwangjuindex.current += 1;
        }
      }
    }
  } else {
    if (sejong.id != '') {
      if (flag) {
        if (stationlist != '') {
          sejong.city[sejongindex.current].station = stationlist;
          sejongindex.current += 1;
        }
      }
    }
  }
  const gyeongi_list = gyeongi.city.map((v: string, index: number) => (
    <>
      <div
        id={v}
        key={index}
        className="citylist"
        onClick={() => {
          setMap(gyeongi.city[index].city_link);
          setSelectedcity(gyeongi.city[index].city_name);
        }}
      >
        <li className="city_li" style={{ color: '#F08080' }}>
          {gyeongi.city[index].city_name}
        </li>
        {map === gyeongi.city[index].city_link && (
          <ul className="station_ul">
            {gyeongi.city[index].station.map((li: any) => (
              <li style={{ color: '#F08080' }}>{li}</li>
            ))}
          </ul>
        )}
      </div>
    </>
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
      <li className="city_li" style={{ color: '#F08080' }}>
        {gangwon.city[index].city_name}
      </li>
      {map === gangwon.city[index].city_link && (
        <ul className="station_ul">
          {gangwon.city[index].station.map((li: any) => (
            <li style={{ color: '#F08080' }}>{li}</li>
          ))}
        </ul>
      )}
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
      <li className="city_li" style={{ color: '#F08080' }}>
        {chungnam.city[index].city_name}
      </li>
      {map === chungnam.city[index].city_link && (
        <ul className="station_ul">
          {chungnam.city[index].station.map((li: any) => (
            <li style={{ color: '#F08080' }}>{li}</li>
          ))}
        </ul>
      )}
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
      <li className="city_li" style={{ color: '#F08080' }}>
        {chungbuk.city[index].city_name}
      </li>
      {map === chungbuk.city[index].city_link && (
        <ul className="station_ul">
          {chungbuk.city[index].station.map((li: any) => (
            <li style={{ color: '#F08080' }}>{li}</li>
          ))}
        </ul>
      )}
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
      <li className="city_li" style={{ color: '#F08080' }}>
        {jeonnam.city[index].city_name}
      </li>
      {map === jeonnam.city[index].city_link && (
        <ul className="station_ul">
          {jeonnam.city[index].station.map((li: any) => (
            <li style={{ color: '#F08080' }}>{li}</li>
          ))}
        </ul>
      )}
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
      <li className="city_li" style={{ color: '#F08080' }}>
        {jeonbuk.city[index].city_name}
      </li>
      {map === jeonbuk.city[index].city_link && (
        <ul className="station_ul">
          {jeonbuk.city[index].station.map((li: any) => (
            <li style={{ color: '#F08080' }}>{li}</li>
          ))}
        </ul>
      )}
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
      <li className="city_li" style={{ color: '#F08080' }}>
        {gyeongnam.city[index].city_name}
      </li>
      {map === gyeongnam.city[index].city_link && (
        <ul className="station_ul">
          {gyeongnam.city[index].station.map((li: any) => (
            <li style={{ color: '#F08080' }}>{li}</li>
          ))}
        </ul>
      )}
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
      <li className="city_li" style={{ color: '#F08080' }}>
        {gyeongbuk.city[index].city_name}
      </li>
      {map === gyeongbuk.city[index].city_link && (
        <ul className="station_ul">
          {gyeongbuk.city[index].station.map((li: any) => (
            <li style={{ color: '#F08080' }}>{li}</li>
          ))}
        </ul>
      )}
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
      <li className="city_li" style={{ color: '#F08080' }}>
        {incheon.city[index].city_name}
      </li>
      {map === incheon.city[index].city_link && (
        <ul className="station_ul">
          {incheon.city[index].station.map((li: any) => (
            <li style={{ color: '#F08080' }}>{li}</li>
          ))}
        </ul>
      )}
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
      <li className="city_li" style={{ color: '#F08080' }}>
        {daejeon.city[index].city_name}
      </li>
      {map === daejeon.city[index].city_link && (
        <ul className="station_ul">
          {daejeon.city[index].station.map((li: any) => (
            <li style={{ color: '#F08080' }}>{li}</li>
          ))}
        </ul>
      )}
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
      <li className="city_li" style={{ color: '#F08080' }}>
        {daegu.city[index].city_name}
      </li>
      {map === daegu.city[index].city_link && (
        <ul className="station_ul">
          {daegu.city[index].station.map((li: any) => (
            <li style={{ color: '#F08080' }}>{li}</li>
          ))}
        </ul>
      )}
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
      <li className="city_li" style={{ color: '#F08080' }}>
        {busan.city[index].city_name}
      </li>
      {map === busan.city[index].city_link && (
        <ul className="station_ul">
          {busan.city[index].station.map((li: any) => (
            <li style={{ color: '#F08080' }}>{li}</li>
          ))}
        </ul>
      )}
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
      <li className="city_li" style={{ color: '#F08080' }}>
        {ulsan.city[index].city_name}
      </li>
      {map === ulsan.city[index].city_link && (
        <ul className="station_ul">
          {ulsan.city[index].station.map((li: any) => (
            <li style={{ color: '#F08080' }}>{li}</li>
          ))}
        </ul>
      )}
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
      <li className="city_li" style={{ color: '#F08080' }}>
        {gwangju.city[index].city_name}
      </li>
      {map === gwangju.city[index].city_link && (
        <ul className="station_ul">
          {gwangju.city[index].station.map((li: any) => (
            <li style={{ color: '#F08080' }}>{li}</li>
          ))}
        </ul>
      )}
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
      <li className="city_li" style={{ color: '#F08080' }}>
        {sejong.city[index].city_name}
      </li>
      {map === sejong.city[index].city_link && (
        <ul className="station_ul">
          {sejong.city[index].station.map((li: any) => (
            <li style={{ color: '#F08080' }}>{li}</li>
          ))}
        </ul>
      )}
    </div>
  ));

  function selectedalert() {
    if (selectedcity === '없음') {
      if (selectedcategory === '안') {
        return alert('Choose the DISTRICT and the CATEGORY');
      } else {
        return alert('Choose the DISTRICT');
      }
    }
    if (selectedcategory === '안') {
      if (selectedcity !== '없음') {
        return alert('Choose the CATEGORY');
      }
    }
  }

  return (
    <>
      <EnCategory setSelectedcategory={setSelectedcategory} />

      <img src={map} className="map" alt="map" />

      <EnContainer
        setGyeongitoggle={setGyeongitoggle}
        setGangwontoggle={setGangwontoggle}
        setChungnamtoggle={setChungnamtoggle}
        setChungbuktoggle={setChungbuktoggle}
        setGyeonnamtoggle={setGyeonnamtoggle}
        setGyeonbuktoggle={setGyeonbuktoggle}
        setJeonbuktoggle={setJeonbuktoggle}
        setJeonnamtoggle={setJeonnamtoggle}
        setIncheontoggle={setIncheontoggle}
        setDaejeontoggle={setDaejeontoggle}
        setGwangjutoggle={setGwangjutoggle}
        setDaegutoggle={setDaegutoggle}
        setUlsantoggle={setUlsantoggle}
        setBusantoggle={setBusantoggle}
        setSejongtoggle={setSejongtoggle}
        setMap={setMap}
        setSelectedcity={setSelectedcity}
      />

      <div className="district_toggle">
        <span style={{position:'absolute'}}>
        {selectedcity !== '없음' && selectedcategory !== '안' ? (
          <button className="gotosecondbtn" onClick={selectedalert}>
            <Link to={`/${selectedcity}/${selectedcategory}`} style={{ textDecoration: 'none', color: '#000000' }}>
              NEXT !!
            </Link>
          </button>
        ) : (
          <button className="gotosecondbtn" onClick={selectedalert}>
            NEXT
          </button>
        )}
        </span>
        <label
          className="district"
          onClick={() => {
            setGyeongitoggle(!gyeongitoggle);
            !gyeongitoggle && setMap(gyeongi.link);
          }}
          style={gyeongitoggle ? { background: '#F08080' } : { background: '' }}
        >
          <span style={gyeongitoggle ? { color: 'white' } : { color: '#D85959' }}>{gyeongi.name}</span>
        </label>
        {/*경기*/}
        <div>{gyeongitoggle && gyeongi_list}</div>
        <label
          className="district"
          onClick={() => {
            setGangwontoggle(!gangwontoggle);
            !gangwontoggle && setMap(gangwon.link);
          }}
          style={gangwontoggle ? { background: '#F08080' } : { background: '' }}
        >
          <span style={gangwontoggle ? { color: 'white' } : { color: '#D85959' }}>{gangwon.name}</span>
        </label>
        <div>{gangwontoggle && gangwon_list}</div>
        {/*<label*/}
        {/*  className="district"*/}
        {/*  onClick={() => {*/}
        {/*    setIncheontoggle(!incheontoggle);*/}
        {/*    !incheontoggle && setMap(incheon.link);*/}
        {/*  }}*/}
        {/*  style={incheontoggle ? { background: '#F08080' } : { background: '' }}*/}
        {/*>*/}
        {/*  <span style={incheontoggle ? { color: 'white' } : { color: '#D85959' }}>{incheon.name}</span>*/}
        {/*</label>*/}
        {/*<div>{incheontoggle && incheon_list}</div>*/}
        <label
          className="district"
          onClick={() => {
            setChungbuktoggle(!chungbuktoggle);
            !chungbuktoggle && setMap(chungbuk.link);
          }}
          style={chungbuktoggle ? { background: '#F08080' } : { background: '' }}
        >
          <span style={chungbuktoggle ? { color: 'white' } : { color: '#D85959' }}>{chungbuk.name}</span>
        </label>
        <div>{chungbuktoggle && chungbuk_list}</div>
        <label
          className="district"
          onClick={() => {
            setChungnamtoggle(!chungnamtoggle);
            !chungnamtoggle && setMap(chungnam.link);
          }}
          style={chungnamtoggle ? { background: '#F08080' } : { background: '' }}
        >
          <span style={chungnamtoggle ? { color: 'white' } : { color: '#D85959' }}>{chungnam.name}</span>
        </label>
        <div>{chungnamtoggle && chungnam_list}</div>
        {/*<label*/}
        {/*  className="district"*/}
        {/*  onClick={() => {*/}
        {/*    setDaejeontoggle(!daejeontoggle);*/}
        {/*    !daejeontoggle && setMap(daejeon.link);*/}
        {/*  }}*/}
        {/*  style={daejeontoggle ? { background: '#F08080' } : { background: '' }}*/}
        {/*>*/}
        {/*  <span style={daejeontoggle ? { color: 'white' } : { color: '#D85959' }}>{daejeon.name}</span>*/}
        {/*</label>*/}
        {/*<div>{daejeontoggle && daejeon_list}</div>*/}
        {/*<label*/}
        {/*  className="district"*/}
        {/*  onClick={() => {*/}
        {/*    setSejongtoggle(!sejongtoggle);*/}
        {/*    !sejongtoggle && setMap(sejong.link);*/}
        {/*  }}*/}
        {/*  style={sejongtoggle ? { background: '#F08080' } : { background: '' }}*/}
        {/*>*/}
        {/*  <span style={sejongtoggle ? { color: 'white' } : { color: '#D85959' }}>{sejong.name}</span>*/}
        {/*</label>*/}
        {/*<div>{sejongtoggle && sejong_list}</div>*/}
        <label
          className="district"
          onClick={() => {
            setJeonbuktoggle(!jeonbuktoggle);
            !jeonbuktoggle && setMap(jeonbuk.link);
          }}
          style={jeonbuktoggle ? { background: '#F08080' } : { background: '' }}
        >
          <span style={jeonbuktoggle ? { color: 'white' } : { color: '#D85959' }}>{jeonbuk.name}</span>
        </label>
        <div>{jeonbuktoggle && jeonbuk_list}</div>
        <label
          className="district"
          onClick={() => {
            setJeonnamtoggle(!jeonnamtoggle);
            !jeonnamtoggle && setMap(jeonnam.link);
          }}
          style={jeonnamtoggle ? { background: '#F08080' } : { background: '' }}
        >
          <span style={jeonnamtoggle ? { color: 'white' } : { color: '#D85959' }}>{jeonnam.name}</span>
        </label>
        <div>{jeonnamtoggle && jeonnam_list}</div>
        {/*<label*/}
        {/*  className="district"*/}
        {/*  onClick={() => {*/}
        {/*    setGwangjutoggle(!gwangjutoggle);*/}
        {/*    !gwangjutoggle && setMap(gwangju.link);*/}
        {/*  }}*/}
        {/*  style={gwangjutoggle ? { background: '#F08080' } : { background: '' }}*/}
        {/*>*/}
        {/*  <span style={gwangjutoggle ? { color: 'white' } : { color: '#D85959' }}>{gwangju.name}</span>*/}
        {/*</label>*/}
        {/*<div>{gwangjutoggle && gwangju_list}</div>*/}
        <label
          className="district"
          onClick={() => {
            setGyeonbuktoggle(!gyeongbuktoggle);
            !gyeongbuktoggle && setMap(gyeongbuk.link);
          }}
          style={gyeongbuktoggle ? { background: '#F08080' } : { background: '' }}
        >
          <span style={gyeongbuktoggle ? { color: 'white' } : { color: '#D85959' }}>{gyeongbuk.name}</span>
        </label>
        <div>{gyeongbuktoggle && gyeongbuk_list}</div>
        <label
          className="district"
          onClick={() => {
            setGyeonnamtoggle(!gyeongnamtoggle);
            !gyeongnamtoggle && setMap(gyeongnam.link);
          }}
          style={gyeongnamtoggle ? { background: '#F08080' } : { background: '' }}
        >
          <span style={gyeongnamtoggle ? { color: 'white' } : { color: '#D85959' }}>{gyeongnam.name}</span>
        </label>
        <div>{gyeongnamtoggle && gyeongnam_list}</div>
        <label
          className="district"
          onClick={() => {
            setDaegutoggle(!daegutoggle);
            !daegutoggle && setMap(daegu.link);
          }}
          style={daegutoggle ? { background: '#F08080' } : { background: '' }}
        >
          <span style={daegutoggle ? { color: 'white' } : { color: '#D85959' }}>{daegu.name}</span>
        </label>
        <div>{daegutoggle && daegu_list}</div>
        {/*<label*/}
        {/*  className="district"*/}
        {/*  onClick={() => {*/}
        {/*    setUlsantoggle(!ulsantoggle);*/}
        {/*    !ulsantoggle && setMap(ulsan.link);*/}
        {/*  }}*/}
        {/*  style={ulsantoggle ? { background: '#F08080' } : { background: '' }}*/}
        {/*>*/}
        {/*  <span style={ulsantoggle ? { color: 'white' } : { color: '#D85959' }}>{ulsan.name}</span>*/}
        {/*</label>*/}
        {/*<div>{ulsantoggle && ulsan_list}</div>*/}
        <label
          className="district"
          onClick={() => {
            setBusantoggle(!busantoggle);
            !busantoggle && setMap(busan.link);
          }}
          style={busantoggle ? { background: '#F08080' } : { background: '' }}
        >
          <span style={busantoggle ? { color: 'white' } : { color: '#D85959' }}>{busan.name}</span>
        </label>
        <div>{busantoggle && busan_list}</div>
      </div>
    </>
  );
};

export default Toggle;

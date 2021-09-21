import React, { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import './Toggle.css';
import Category from '@components/Category/category';

const Toggle = () => {
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
    axios.get('api/province/findprovince').then((response) => {
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
  }
  else if (index === 1) {
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


  //
  // const gyeongi_station = gyeongi.city.map((v:string, index:number)=>{
  //   if (gyeongi.id != '') {
  //     console.log(typeof(gyeongi.city[0].station[index]))
  //     console.log(v)
  //     // <div>{gyeongi.city[0].station[index]}
  //     // </div>
  //   }
  // })

  // console.log(gyeongi)
  // console.log(gyeongi.city)
  // console.log(gyeongi.city[0])
  // gyeongi.city.map((v: string, index: number) => {
  //   console.log(gyeongi.city[index].station);
  // });

  // gyeongi.city[index].station[1],
  //   gyeongi.city[index].station[2],
  //   gyeongi.city[index].station[4],

  // console.log(gyeongi.city[0].station)
  // const sta = gyeongi.city[0].station.map((v:string, index:number)=>{
  //   <div>
  //     {gyeongi.city[0].station[index]}
  //   </div>
  // })

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
        {gyeongi.city[index].city_name}
        {map===gyeongi.city[index].city_link && (
          <div>
            {gyeongi.city[index].station.map((li: any) => (
              <li>{li}</li>
            ))}
          </div>
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
      {gangwon.city[index].city_name}
      {map===gangwon.city[index].city_link && (
        <div>
          {gangwon.city[index].station.map((li: any) => (
            <li>{li}</li>
          ))}
        </div>
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
      {chungnam.city[index].city_name}
      {map===chungnam.city[index].city_link && (
        <div>
          {chungnam.city[index].station.map((li: any) => (
            <li>{li}</li>
          ))}
        </div>
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
      {chungbuk.city[index].city_name}
      {map===chungbuk.city[index].city_link && (
        <div>
          {chungbuk.city[index].station.map((li: any) => (
            <li>{li}</li>
          ))}
        </div>
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
      {jeonnam.city[index].city_name}
      {map===jeonnam.city[index].city_link && (
        <div>
          {jeonnam.city[index].station.map((li: any) => (
            <li>{li}</li>
          ))}
        </div>
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
      {jeonbuk.city[index].city_name}
      {map===jeonbuk.city[index].city_link && (
        <div>
          {jeonbuk.city[index].station.map((li: any) => (
            <li>{li}</li>
          ))}
        </div>
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
      {gyeongnam.city[index].city_name}
      {map===gyeongnam.city[index].city_link && (
        <div>
          {gyeongnam.city[index].station.map((li: any) => (
            <li>{li}</li>
          ))}
        </div>
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
      {gyeongbuk.city[index].city_name}
      {map===gyeongbuk.city[index].city_link && (
        <div>
          {gyeongbuk.city[index].station.map((li: any) => (
            <li>{li}</li>
          ))}
        </div>
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
      {incheon.city[index].city_name}
      {map===incheon.city[index].city_link && (
        <div>
          {incheon.city[index].station.map((li: any) => (
            <li>{li}</li>
          ))}
        </div>
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
      {daejeon.city[index].city_name}
      {map===daejeon.city[index].city_link && (
        <div>
          {daejeon.city[index].station.map((li: any) => (
            <li>{li}</li>
          ))}
        </div>
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
      {daegu.city[index].city_name}
      {map===daegu.city[index].city_link && (
        <div>
          {daegu.city[index].station.map((li: any) => (
            <li>{li}</li>
          ))}
        </div>
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
      {busan.city[index].city_name}
      {map===busan.city[index].city_link && (
        <div>
          {busan.city[index].station.map((li: any) => (
            <li>{li}</li>
          ))}
        </div>
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
      {ulsan.city[index].city_name}
      {map===ulsan.city[index].city_link && (
        <div>
          {ulsan.city[index].station.map((li: any) => (
            <li>{li}</li>
          ))}
        </div>
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
      {gwangju.city[index].city_name}
      {map===gwangju.city[index].city_link && (
        <div>
          {gwangju.city[index].station.map((li: any) => (
            <li>{li}</li>
          ))}
        </div>
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
      {sejong.city[index].city_name}
      {map===sejong.city[index].city_link && (
        <div>
          {sejong.city[index].station.map((li: any) => (
            <li>{li}</li>
          ))}
        </div>
      )}
    </div>
  ));

  function selectedalert() {
    if (selectedcity === '없음') {
      if (selectedcategory === '안') {
        return alert('지역과 카테고리 모두 선택하여 주십시오');
      } else {
        return alert('지역을 선택하여 주십시오');
      }
    }
    if (selectedcategory === '안') {
      if (selectedcity !== '없음') {
        return alert('카테고리를 선택하여 주십시오');
      }
    }
  }
  return (
    <>
      <Category setSelectedcategory={setSelectedcategory} />

      <img src={map} className="map" alt="map" />

      {/*/!*1번) 암것도 없다가 카테고리랑 지역 둘다 고르면 버튼 생김. alert기능의미없음*!/*/}
      {selectedcity !== '없음' && selectedcategory !== '안' && (
        <Link to={`/${selectedcity}/${selectedcategory}`} style={{ textDecoration: 'none', color: '#000000' }}>
          <button className="gotosecondbtn" onClick={selectedalert}>
            {selectedcity}의 추천 {selectedcategory} 보기 !!
          </button>
        </Link>
      )}

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

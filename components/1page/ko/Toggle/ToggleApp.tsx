import React, { useEffect, useRef, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import '@components/1page/Toggle.scss';
import Container from '@components/1page/ko/Container/Container';

const ToggleApp = () => {
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
  const [gwangjutoggle, setGwangjutoggle] = useState(false);

  const [toggles, setToggles] = useState([
    {
      id:1, //경기
      toggle:false
    },{
      id:2, //강원
      toggle:false
    },{
      id:3, //충남
      toggle:false
    },{
      id:4, //충븍
      toggle:false
    },{
      id:5, //전남
      toggle:false
    },{
      id:6, //전북
      toggle:false
    },{
      id:7, //경남
      toggle:false
    },{
      id:8, //경북
      toggle:false
    },{
      id:9, //인천
      toggle:false
    },{
      id:10, //대전
      toggle:false
    },{
      id:11, //대구
      toggle:false
    },{
      id:12, //부산
      toggle:false
    },{
      id:13, //광주
      toggle:false
    },
  ])

  const handleToggle = (n:number)=>{
    setToggles( toggles.map((each:any) =>
      each.id === n ? { ...each, toggle:!each.toggle}
      : each.toggle === true ? {...each, toggle:!each.toggle} : each
    ));
  }

  function settingCity(eachCity:any,eachIndex:any,stationList:any){
    if (eachCity.id != '') {
      if (flag) {
        if (stationList != '') {
          eachCity.city[eachIndex.current].station = stationList;
          eachIndex.current += 1;
        }
      }
    }
  }
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
    toggle: false,
  } as any);
  const [chungbuk, setChungbuk] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
    toggle: false,
  } as any);
  const [gyeongnam, setGyeongnam] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
    toggle: false,
  } as any);
  const [gyeongbuk, setGyeongbuk] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
    toggle: false,
  } as any);
  const [jeonbuk, setJeonbuk] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
    toggle: false,
  } as any);
  const [jeonnam, setJeonnam] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
    toggle: false,
  } as any);
  const [incheon, setIncheon] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
    toggle: false,
  } as any);
  const [daejeon, setDajeon] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
    toggle: false,
  } as any);
  const [gwangju, setGwangju] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
    toggle: false,
  } as any);
  const [daegu, setDaegu] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
    toggle: false,
  } as any);
  const [busan, setBusan] = useState({
    id: '',
    name: '',
    link: '',
    city: [],
    toggle: false,
  } as any);

  const [stationList, setStationList] = useState([] as any);
  const [flag, setFlag] = useState(false);
  const districtIndex= useRef(0);

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
  const gwangjuindex = useRef(0);

  function setEachDistrct(response:any,i:number,j:number){
    setStationList([]);
    setFlag(false);
    for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
      setStationList((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
    }
  }
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_DB_HOST + '/api/province/findall')
      .then((response) => {
        for (let i = 0; i < response.data.data.length; i++) {
          districtIndex.current = i;
          if (i === 0) {
            for (var j = 0; j < response.data.data[i].cityList.length; j++) {
              setEachDistrct(response,i,j);
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
            for (j = 0; j < response.data.data[i].cityList.length; j++) {
              setEachDistrct(response,i,j);
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
            for (j = 0; j < response.data.data[i].cityList.length; j++) {
              setEachDistrct(response,i,j);
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
            for (j = 0; j < response.data.data[i].cityList.length; j++) {
              setEachDistrct(response,i,j);
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
            for (j = 0; j < response.data.data[i].cityList.length; j++) {
              setEachDistrct(response,i,j);
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
            for (j = 0; j < response.data.data[i].cityList.length; j++) {
              setEachDistrct(response,i,j);
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
            for (j = 0; j < response.data.data[i].cityList.length; j++) {
              setEachDistrct(response,i,j);
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
            for (j = 0; j < response.data.data[i].cityList.length; j++) {
              setEachDistrct(response,i,j);
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
            for (j = 0; j < response.data.data[i].cityList.length; j++) {
              setEachDistrct(response,i,j);
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
            for (j = 0; j < response.data.data[i].cityList.length; j++) {
              setEachDistrct(response,i,j);
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
            for (j = 0; j < response.data.data[i].cityList.length; j++) {
              setEachDistrct(response,i,j);
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
            for (j = 0; j < response.data.data[i].cityList.length; j++) {
              setEachDistrct(response,i,j);
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
          } else {
            for (j = 0; j < response.data.data[i].cityList.length; j++) {
              setEachDistrct(response,i,j);
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
          }
        }
      })
      .catch((error) => {});
  }, []);

  if (districtIndex.current === 0) {
    // if (gyeongi.id != '') {
    //   if (flag) {
    //     if (stationList != '') {
    //       gyeongi.city[gyeongiindex.current].station = stationList;
    //       gyeongiindex.current += 1;
    //       console.log("성공");
    //
    //     }
    //   }
    // }
    settingCity(gyeongi,gyeongiindex,stationList);
  } else if (districtIndex.current === 1) {
    // if (gangwon.id != '') {
    //   if (flag) {
    //     if (stationList != '') {
    //       gangwon.city[gangwonindex.current].station = stationList;
    //       gangwonindex.current += 1;
    //     }
    //   }
    // }
    settingCity(gangwon,gangwonindex,stationList);

  } else if (districtIndex.current === 2) {
    if (chungnam.id != '') {
      if (flag) {
        if (stationList != '') {
          chungnam.city[chungnamindex.current].station = stationList;
          chungnamindex.current += 1;
        }
      }
    }
  } else if (districtIndex.current === 3) {
    if (chungbuk.id != '') {
      if (flag) {
        if (stationList != '') {
          chungbuk.city[chungbukindex.current].station = stationList;
          chungbukindex.current += 1;
        }
      }
    }
  } else if (districtIndex.current === 4) {
    if (jeonnam.id != '') {
      if (flag) {
        if (stationList != '') {
          jeonnam.city[jeonnamindex.current].station = stationList;
          jeonnamindex.current += 1;
        }
      }
    }
  } else if (districtIndex.current === 5) {
    if (jeonbuk.id != '') {
      if (flag) {
        if (stationList != '') {
          jeonbuk.city[jeonbukindex.current].station = stationList;
          jeonbukindex.current += 1;
        }
      }
    }
  } else if (districtIndex.current === 6) {
    if (gyeongnam.id != '') {
      if (flag) {
        if (stationList != '') {
          gyeongnam.city[gyeongnamindex.current].station = stationList;
          gyeongnamindex.current += 1;
        }
      }
    }
  } else if (districtIndex.current === 7) {
    if (gyeongbuk.id != '') {
      if (flag) {
        if (stationList != '') {
          gyeongbuk.city[gyeongbukindex.current].station = stationList;
          gyeongbukindex.current += 1;
        }
      }
    }
  } else if (districtIndex.current === 8) {
    if (incheon.id != '') {
      if (flag) {
        if (stationList != '') {
          incheon.city[incheonindex.current].station = stationList;
          incheonindex.current += 1;
        }
      }
    }
  } else if (districtIndex.current === 9) {
    if (daejeon.id != '') {
      if (flag) {
        if (stationList != '') {
          daejeon.city[daejeonindex.current].station = stationList;
          daejeonindex.current += 1;
        }
      }
    }
  } else if (districtIndex.current === 10) {
    if (daegu.id != '') {
      if (flag) {
        if (stationList != '') {
          daegu.city[daeguindex.current].station = stationList;
          daeguindex.current += 1;
        }
      }
    }
  } else if (districtIndex.current === 11) {
    if (busan.id != '') {
      if (flag) {
        if (stationList != '') {
          busan.city[busanindex.current].station = stationList;
          busanindex.current += 1;
        }
      }
    }
  } else {
    if (gwangju.id != '') {
      if (flag) {
        if (stationList != '') {
          gwangju.city[gwangjuindex.current].station = stationList;
          gwangjuindex.current += 1;
        }
      }
    }
  }

  const gyeongi_list = gyeongi.city.map((v: string, index: number) => (
    <div
      id={v}
      key={index}
      className="citylist"
      onClick={() => {
        setMap(gyeongi.city[index].city_link);
        setSelectedcity(gyeongi.city[index].city_name);
      }}
    >
      <li
        className="city_li"
        style={map === gyeongi.city[index].city_link ? { fontSize: '1.2em', fontWeight: 'bolder' } : { fontSize: '' }}
      >
        {gyeongi.city[index].city_name}
      </li>
      {map === gyeongi.city[index].city_link && (
        <ul className="station_ul">
          {gyeongi.city[index].station.map((li: any) => (
            <li className="station_li" key={li}>{li}</li>
          ))}
        </ul>
      )}
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
      <li className="city_li" style={map === gangwon.city[index].city_link ? { fontSize: '1.2em' } : { fontSize: '' }}>
        {gangwon.city[index].city_name}
      </li>
      {map === gangwon.city[index].city_link && (
        <ul className="station_ul">
          {gangwon.city[index].station.map((li: any) => (
            <li className="station_li" key={li}>{li}</li>
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
      <li className="city_li" style={map === chungnam.city[index].city_link ? { fontSize: '1.2em' } : { fontSize: '' }}>
        {chungnam.city[index].city_name}
      </li>
      {map === chungnam.city[index].city_link && (
        <ul className="station_ul">
          {chungnam.city[index].station.map((li: any) => (
            <li className="station_li" key={li}>{li}</li>
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
      <li className="city_li" style={map === chungbuk.city[index].city_link ? { fontSize: '1.2em' } : { fontSize: '' }}>
        {chungbuk.city[index].city_name}
      </li>
      {map === chungbuk.city[index].city_link && (
        <ul className="station_ul">
          {chungbuk.city[index].station.map((li: any) => (
            <li className="station_li" key={li}>{li}</li>
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
      <li className="city_li" style={map === jeonnam.city[index].city_link ? { fontSize: '1.2em' } : { fontSize: '' }}>
        {jeonnam.city[index].city_name}
      </li>
      {map === jeonnam.city[index].city_link && (
        <ul className="station_ul">
          {jeonnam.city[index].station.map((li: any) => (
            <li className="station_li" key={li}>{li}</li>
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
      <li className="city_li" style={map === jeonbuk.city[index].city_link ? { fontSize: '1.2em' } : { fontSize: '' }}>
        {jeonbuk.city[index].city_name}
      </li>
      {map === jeonbuk.city[index].city_link && (
        <ul className="station_ul">
          {jeonbuk.city[index].station.map((li: any) => (
            <li className="station_li" key={li}>{li}</li>
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
      <li
        className="city_li"
        style={map === gyeongnam.city[index].city_link ? { fontSize: '1.2em' } : { fontSize: '' }}
      >
        {gyeongnam.city[index].city_name}
      </li>
      {map === gyeongnam.city[index].city_link && (
        <ul className="station_ul">
          {gyeongnam.city[index].station.map((li: any) => (
            <li className="station_li" key={li}>{li}</li>
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
      <li
        className="city_li"
        style={map === gyeongbuk.city[index].city_link ? { fontSize: '1.2em' } : { fontSize: '' }}
      >
        {gyeongbuk.city[index].city_name}
      </li>
      {map === gyeongbuk.city[index].city_link && (
        <ul className="station_ul">
          {gyeongbuk.city[index].station.map((li: any) => (
            <li className="station_li" key={li}>{li}</li>
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
      <li className="city_li" style={map === incheon.city[index].city_link ? { fontSize: '1.2em' } : { fontSize: '' }}>
        {incheon.city[index].city_name}
      </li>
      {map === incheon.city[index].city_link && (
        <ul className="station_ul">
          {incheon.city[index].station.map((li: any) => (
            <li className="station_li" key={li}>{li}</li>
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
      <li className="city_li" style={map === daejeon.city[index].city_link ? { fontSize: '1.2em' } : { fontSize: '' }}>
        {daejeon.city[index].city_name}
      </li>
      {map === daejeon.city[index].city_link && (
        <ul className="station_ul">
          {daejeon.city[index].station.map((li: any) => (
            <li className="station_li" key={li}>{li}</li>
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
      <li className="city_li" style={map === daegu.city[index].city_link ? { fontSize: '1.2em' } : { fontSize: '' }}>
        {daegu.city[index].city_name}
      </li>
      {map === daegu.city[index].city_link && (
        <ul className="station_ul">
          {daegu.city[index].station.map((li: any) => (
            <li className="station_li" key={li}>{li}</li>
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
      <li className="city_li" style={map === busan.city[index].city_link ? { fontSize: '1.2em' } : { fontSize: '' }}>
        {busan.city[index].city_name}
      </li>
      {map === busan.city[index].city_link && (
        <ul className="station_ul">
          {busan.city[index].station.map((li: any) => (
            <li className="station_li" key={li}>{li}</li>
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
      <li className="city_li" style={map === gwangju.city[index].city_link ? { fontSize: '1.2em' } : { fontSize: '' }}>
        {gwangju.city[index].city_name}
      </li>
      {map === gwangju.city[index].city_link && (
        <ul className="station_ul">
          {gwangju.city[index].station.map((li: any) => (
            <li className="station_li" key={li}>{li}</li>
          ))}
        </ul>
      )}
    </div>
  ));

  function selectedalert() {
    return alert('지역을 선택하여 주세요');
  }

  var city_engtokor: { [key: string]: string } = {
    가평군: 'gapyeong',
    고양시: 'goyaong',
    수원시: 'suwon',
    강릉시: 'gangneung',
    춘천시: 'chuncheon',
    천안시: 'cheonan',
    단양군: 'danyang',
    청주시: 'cheongju',
    순천시: 'suncheon',
    전주시: 'jeonju',
    하동군: 'hadong',
    경주시: 'gyeongju',
    안동시: 'andong',
    인천: 'incheon',
    대전: 'daejeon',
    대구: 'daegu',
    부산: 'busan',
    광주: 'gwangju',
  };

  return (
    <>
      <img src={map} className="map" alt="map" />
      <h4 style={{ marginLeft: '6em' }}>어디로 떠나실건가요?</h4>

      <div className="district_toggle">
        <div className="nextbutton">
          {selectedcity !== '없음' ? (
            <button className="gotosecondbtn" id="citycatedone">
              <Link to={`/${city_engtokor[selectedcity]}`} style={{ textDecoration: 'none', color: 'rgb(92, 88, 88)' }}>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Let's Go!</span>
              </Link>
            </button>
          ) : (
            <button className="gotosecondbtn" onClick={selectedalert}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Let's Go</span>
            </button>
          )}
        </div>

        <Container
          selectedcity={selectedcity}
          toggles={toggles}
          setToggles={setToggles}
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
          setBusantoggle={setBusantoggle}
          setMap={setMap}
          setSelectedcity={setSelectedcity}
        />

        <label
          className="district"
          onClick={() => {
            handleToggle(1)
            setMap(gyeongi.link);
          }}
          id={toggles[0].toggle ? 'selecteddistrict' : 'notselecteddistrict'}
        >
          <span className="district_name" >{gyeongi.name}</span>
        </label>
        <div>{toggles[0].toggle && gyeongi_list}</div>

        <label
          className="district"
          onClick={() => {
            handleToggle(2)
            setMap(gangwon.link);
          }}
          id={toggles[1].toggle ? 'selecteddistrict' : 'notselecteddistrict'}
        >
          <span className="district_name">{gangwon.name}</span>
        </label>
        <div>{toggles[1].toggle && gangwon_list}</div>

        <label
          className="district"
          onClick={() => {
            handleToggle(3)
            setMap(incheon.link);
          }}
          id={toggles[2].toggle ? 'selecteddistrict' : 'notselecteddistrict'}
        >
          <span className="district_name">{incheon.name}</span>
        </label>
        <div>{toggles[2].toggle && incheon_list}</div>
        <label
          className="district"
          onClick={() => {
            handleToggle(4)
            setMap(chungbuk.link);
          }}
          id={toggles[3].toggle ? 'selecteddistrict' : 'notselecteddistrict'}
        >
          <span className="district_name">{chungbuk.name}</span>
        </label>
        <div>{toggles[3].toggle && chungbuk_list}</div>

        <label
          className="district"
          onClick={() => {
            handleToggle(5)
            setMap(chungnam.link);
          }}
          id={toggles[4].toggle ? 'selecteddistrict' : 'notselecteddistrict'}
        >
          <span className="district_name">{chungnam.name}</span>
        </label>
        <div>{toggles[4].toggle && chungnam_list}</div>
        <label
          className="district"
          onClick={() => {
            handleToggle(6)
            setMap(daejeon.link);
          }}
          id={toggles[5].toggle ? 'selecteddistrict' : 'notselecteddistrict'}
        >
          <span className="district_name">{daejeon.name}</span>
        </label>
        <div>{toggles[5].toggle && daejeon_list}</div>
        <label
          className="district"
          onClick={() => {
            handleToggle(7)
            setMap(jeonbuk.link);
          }}
          id={toggles[6].toggle ? 'selecteddistrict' : 'notselecteddistrict'}
        >
          <span className="district_name">{jeonbuk.name}</span>
        </label>
        <div>{toggles[6].toggle && jeonbuk_list}</div>
        <label
          className="district"
          onClick={() => {
            handleToggle(8)
            setMap(jeonnam.link);
          }}
          id={toggles[7].toggle ? 'selecteddistrict' : 'notselecteddistrict'}
        >
          <span className="district_name">{jeonnam.name}</span>
        </label>
        <div>{toggles[7].toggle && jeonnam_list}</div>
        <label
          className="district"
          onClick={() => {
            handleToggle(9)
            setMap(gwangju.link);
          }}
          id={toggles[8].toggle ? 'selecteddistrict' : 'notselecteddistrict'}
        >
          <span className="district_name">{gwangju.name}</span>
        </label>
        <div>{toggles[8].toggle && gwangju_list}</div>
        <label
          className="district"
          onClick={() => {
            handleToggle(10)
            setMap(gyeongbuk.link);
          }}
          id={toggles[9].toggle ? 'selecteddistrict' : 'notselecteddistrict'}
        >
          <span className="district_name">{gyeongbuk.name}</span>
        </label>
        <div>{toggles[9].toggle && gyeongbuk_list}</div>
        <label
          className="district"
          onClick={() => {
            handleToggle(11)
            setMap(gyeongnam.link);
          }}
          id={toggles[10].toggle ? 'selecteddistrict' : 'notselecteddistrict'}
        >
          <span className="district_name">{gyeongnam.name}</span>
        </label>
        <div>{toggles[10].toggle && gyeongnam_list}</div>
        <label
          className="district"
          onClick={() => {
            handleToggle(12)
            setMap(daegu.link);
          }}
          id={toggles[11].toggle ? 'selecteddistrict' : 'notselecteddistrict'}
        >
          <span className="district_name">{daegu.name}</span>
        </label>
        <div>{toggles[11].toggle && daegu_list}</div>
        <label
          className="district"
          onClick={() => {
            handleToggle(13)
            setMap(busan.link);
          }}
          id={toggles[12].toggle ? 'selecteddistrict' : 'notselecteddistrict'}
        >
          <span className="district_name">{busan.name}</span>
        </label>
        <div>{toggles[12].toggle && busan_list}</div>
      </div>
    </>
  );
};

export default ToggleApp;

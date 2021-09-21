import React, { FC, useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Getapi = (props: any) => {
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
        if (i == 0) {
          for (var j = 0; j < response.data.data[i].cityList.length; j++) {
            setStationlist([]);
            setFlag(false);
            for (var k = 0; k < response.data.data[i].cityList[j].stationList.length; k++) {
              setStationlist((prev: any) => [...prev, response.data.data[i].cityList[j].stationList[k].name]);
            }
            props.setGyeongi((prev: any) => ({
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
            props.setGangwon((prev: any) => ({
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
            props.setChungnam((prev: any) => ({
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
            props.setChungbuk((prev: any) => ({
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
            props.setJeonnam((prev: any) => ({
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
            props.setJeonbuk((prev: any) => ({
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
            props.setGyeongnam((prev: any) => ({
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
            props.setGyeongbuk((prev: any) => ({
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
            props.setIncheon((prev: any) => ({
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
            props.setDajeon((prev: any) => ({
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
            props.setDaegu((prev: any) => ({
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
            props.setBusan((prev: any) => ({
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
            props.setUlsan((prev: any) => ({
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
            props.setGwangju((prev: any) => ({
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
            props.setSejong((prev: any) => ({
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

  // if (index === 0) {
  //   if (props.gyeongi.id != '') {
  //     if (flag) {
  //       if (stationlist != '') {
  //         props.gyeongi.city[gyeongiindex.current].station = stationlist;
  //         gyeongiindex.current += 1;
  //       }
  //     }
  //   }
  // } else if (index === 1) {
  //   if (props.gangwon.id != '') {
  //     if (flag) {
  //       if (stationlist != '') {
  //         props.gangwon.city[gangwonindex.current].station = stationlist;
  //         gangwonindex.current += 1;
  //       }
  //     }
  //   }
  // } else if (index === 2) {
  //   if (props.chungnam.id != '') {
  //     if (flag) {
  //       if (stationlist != '') {
  //         props.chungnam.city[chungnamindex.current].station = stationlist;
  //         chungnamindex.current += 1;
  //       }
  //     }
  //   }
  // } else if (index === 3) {
  //   if (props.chungbuk.id != '') {
  //     if (flag) {
  //       if (stationlist != '') {
  //         props.chungbuk.city[chungbukindex.current].station = stationlist;
  //         chungbukindex.current += 1;
  //       }
  //     }
  //   }
  // } else if (index === 4) {
  //   if (props.jeonnam.id != '') {
  //     if (flag) {
  //       if (stationlist != '') {
  //         props.jeonnam.city[jeonnamindex.current].station = stationlist;
  //         jeonnamindex.current += 1;
  //       }
  //     }
  //   }
  // } else if (index === 5) {
  //   if (props.jeonbuk.id != '') {
  //     if (flag) {
  //       if (stationlist != '') {
  //         props.jeonbuk.city[jeonbukindex.current].station = stationlist;
  //         jeonbukindex.current += 1;
  //       }
  //     }
  //   }
  // } else if (index === 6) {
  //   if (props.gyeongnam.id != '') {
  //     if (flag) {
  //       if (stationlist != '') {
  //         props.gyeongnam.city[gyeongnamindex.current].station = stationlist;
  //         gyeongnamindex.current += 1;
  //       }
  //     }
  //   }
  // } else if (index === 7) {
  //   if (props.gyeongbuk.id != '') {
  //     if (flag) {
  //       if (stationlist != '') {
  //         props.gyeongbuk.city[gyeongbukindex.current].station = stationlist;
  //         gyeongbukindex.current += 1;
  //       }
  //     }
  //   }
  // } else if (index === 8) {
  //   if (props.incheon.id != '') {
  //     if (flag) {
  //       if (stationlist != '') {
  //         props.incheon.city[incheonindex.current].station = stationlist;
  //         incheonindex.current += 1;
  //       }
  //     }
  //   }
  // } else if (index === 9) {
  //   if (props.daejeon.id != '') {
  //     if (flag) {
  //       if (stationlist != '') {
  //         props.daejeon.city[daejeonindex.current].station = stationlist;
  //         daejeonindex.current += 1;
  //       }
  //     }
  //   }
  // } else if (index === 10) {
  //   if (props.daegu.id != '') {
  //     if (flag) {
  //       if (stationlist != '') {
  //         props.daegu.city[daeguindex.current].station = stationlist;
  //         daeguindex.current += 1;
  //       }
  //     }
  //   }
  // } else if (index === 11) {
  //   if (props.busan.id != '') {
  //     if (flag) {
  //       if (stationlist != '') {
  //         props.busan.city[busanindex.current].station = stationlist;
  //         busanindex.current += 1;
  //       }
  //     }
  //   }
  // } else if (index === 12) {
  //   if (props.ulsan.id != '') {
  //     if (flag) {
  //       if (stationlist != '') {
  //         props.ulsan.city[ulsanindex.current].station = stationlist;
  //         ulsanindex.current += 1;
  //       }
  //     }
  //   }
  // } else if (index === 13) {
  //   if (props.gwangju.id != '') {
  //     if (flag) {
  //       if (stationlist != '') {
  //         props.gwangju.city[gwangjuindex.current].station = stationlist;
  //         gwangjuindex.current += 1;
  //       }
  //     }
  //   }
  // } else {
  //   if (props.sejong.id != '') {
  //     if (flag) {
  //       if (stationlist != '') {
  //         props.sejong.city[sejongindex.current].station = stationlist;
  //         sejongindex.current += 1;
  //       }
  //     }
  //   }
  // }

  return <></>;
};

export default Getapi;

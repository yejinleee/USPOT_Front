import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

const Getapi = (props :any) => {

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
            props.setGyeongi((prev: any) => ({
              ...prev,
              id: i + 1,
              name: response.data.data[i].name,
              link: response.data.data[i].provinceLink,
              cities : [...prev.cities,response.data.data[i].cityList[j].name],
              cities_link : [...prev.cities_link,response.data.data[i].cityList[j].cityLink],
              city: [
                ...prev.city,
                {
                  city_name: response.data.data[i].cityList[j].name,
                  city_link: response.data.data[i].cityList[j].cityLink,
                  station: stationlist,
                },
              ],
            }));
            // console.log(gyeongi);
          }
        } else if (i === 1) {
          props.setGangwon({
            ...props.gangwon,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 2) {
          props.setChungnam({
            ...props.chungnam,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 3) {
          props.setChungbuk({
            ...props.chungbuk,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 4) {
          props.setJeonnam({
            ...props.jeonnam,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 5) {
          props.setJeonbuk({
            ...props.jeonbuk,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 6) {
          props.setGyeongnam({
            ...props.gyeongnam,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 7) {
          props.setGyeongbuk({
            ...props.gyeongbuk,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 8) {
          props.setIncheon({
            ...props.incheon,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 9) {
          props.setDajeon({
            ...props.daejeon,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 10) {
          props.setDaegu({
            ...props.daegu,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 11) {
          props.setBusan({
            ...props.busan,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 12) {
          props.setUlsan({
            ...props.ulsan,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else if (i === 13) {
          props.setGwangju({
            ...props.gwangju,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        } else {
          props.setSejong({
            ...props.sejong,
            id: i + 1,
            name: response.data.data[i].name,
            link: response.data.data[i].provinceLink,
          });
        }
      }
    });
  }, []);


  return (
    <>

    </>
  );
};

export default Getapi;
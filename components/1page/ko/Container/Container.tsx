import React from 'react';
import { useState } from 'react';
import JSONDATA from './info.json';
import '@components/1page/Container.css';
import { Link } from 'react-router-dom';

const Container = (props: any) => {
  const [searchTerm, setSearchTerm] = useState('');

  const selectCity = (value: any) => {
    if (value.id === 1) {
      props.setGyeongitoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
    } else if (value.id === 2) {
      props.setGangwontoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
    } else if (value.id === 3) {
      props.setChungnamtoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
    } else if (value.id === 4) {
      props.setChungbuktoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
    } else if (value.id === 5) {
      props.setJeonnamtoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
    } else if (value.id === 6) {
      props.setJeonbuktoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
    } else if (value.id === 7) {
      props.setGyeonnamtoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
    } else if (value.id === 8) {
      props.setGyeonbuktoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
    } else if (value.id === 9) {
      props.setIncheontoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
    } else if (value.id === 10) {
      props.setDaejeontoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
    } else if (value.id === 11) {
      props.setDaegutoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
    } else if (value.id === 12) {
      props.setBusantoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
    } else if (value.id === 13) {
      props.setUlsantoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
    } else if (value.id === 14) {
      props.setGwangjutoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
    } else {
      props.setSejongtoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
    }
  };

  function selectedalert() {
    if (props.selectedcity === '없음') {
      if (props.selectedcategory === '안') {
        return alert('지역과 카테고리 모두 선택하여 주십시오');
      } else {
        return alert('지역을 선택하여 주십시오');
      }
    }
    if (props.selectedcategory === '안') {
      if (props.selectedcity !== '없음') {
        return alert('카테고리를 선택하여 주십시오');
      }
    }
  }
  return (
    <div className="App">

      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="container">
        {JSONDATA.filter((val: any) => {
          if (searchTerm == '') {
            return val;
          } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((val: any, key: any) => {
          return (
            <div className="contry" key={key}>
              <p onClick={() => selectCity(val)}>{val.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;

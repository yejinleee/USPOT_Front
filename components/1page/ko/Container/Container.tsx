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
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setSejongtoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 2) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(true);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setSejongtoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 3) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(true);
      props.setDaejeontoggle(false);
      props.setSejongtoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 4) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(true);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setSejongtoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 5) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setSejongtoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(true);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 6) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setSejongtoggle(false);
      props.setJeonbuktoggle(true);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 7) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setSejongtoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(true);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 8) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setSejongtoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(true);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 9) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(true);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setSejongtoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 10) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(true);
      props.setSejongtoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 11) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setSejongtoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(true);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 12) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setSejongtoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(true);
    } else if (value.id === 13) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setSejongtoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(true);
      props.setBusantoggle(false);
    } else if (value.id === 14) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setSejongtoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(true);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setSejongtoggle(true);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
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

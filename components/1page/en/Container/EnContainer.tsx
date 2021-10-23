import React from 'react';
import { useState } from 'react';
import JSONDATA from './eninfo.json';
import '@components/1page/Container.css';

const EnContainer = (props: any) => {
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

export default EnContainer;

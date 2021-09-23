import React from 'react';
import { useState } from 'react';
import JSONDATA from './info.json';
import './Container.css';

const Container = (props: any) => {
  const [searchTerm, setSearchTerm] = useState('');

  const selectCity = (id: any, link: any) => {
    if (id === 1) {
      props.setGyeongitoggle(true);
      props.setMap(link);
    } else if (id === 2) {
      props.setGangwontoggle(true);
      props.setMap(link);
    } else if (id === 3) {
      props.setChungnamtoggle(true);
      props.setMap(link);
    } else if (id === 4) {
      props.setChungbuktoggle(true);
      props.setMap(link);
    } else if (id === 5) {
      props.setJeonnamtoggle(true);
      props.setMap(link);
    } else if (id === 6) {
      props.setJeonbuktoggle(true);
      props.setMap(link);
    } else if (id === 7) {
      props.setGyeonnamtoggle(true);
      props.setMap(link);
    } else if (id === 8) {
      props.setGyeonbuktoggle(true);
      props.setMap(link);
    } else if (id === 9) {
      props.setIncheontoggle(true);
      props.setMap(link);
    } else if (id === 10) {
      props.setDaejeontoggle(true);
      props.setMap(link);
    } else if (id === 11) {
      props.setDaegutoggle(true);
      props.setMap(link);
    } else if (id === 12) {
      props.setBusantoggle(true);
      props.setMap(link);
    } else if (id === 13) {
      props.setUlsantoggle(true);
      props.setMap(link);
    } else if (id === 14) {
      props.setGwangjutoggle(true);
      props.setMap(link);
    } else {
      props.setSejongtoggle(true);
      props.setMap(link);
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
              <p onClick={() => selectCity(val.id, val.cityLink)}>{val.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;

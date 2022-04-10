import React from 'react';
import { useState } from 'react';
import JSONDATA from './info.json';
import '@components/1page/Container.scss';

const Container = (props: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleToggle = (n:number)=>{
    props.setToggles( props.toggles.map((each:any) =>
      each.id === n ? { ...each, toggle:!each.toggle}
        : each.toggle === true ? {...each, toggle:!each.toggle} : each
    ));
  }
  const selectCity = (value: any) => {
    if (value.id === 1) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      handleToggle(1);
    } else if (value.id === 2) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      handleToggle(2);
    } else if (value.id === 3) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      handleToggle(3)
    } else if (value.id === 4) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      handleToggle(4)
    } else if (value.id === 5) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      handleToggle(5)
    } else if (value.id === 6) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      handleToggle(6)
    } else if (value.id === 7) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      handleToggle(7)
    } else if (value.id === 8) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      handleToggle(8)
    } else if (value.id === 9) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      handleToggle(9)
    } else if (value.id === 10) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      handleToggle(10)
    } else if (value.id === 11) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      handleToggle(11)
    } else if (value.id === 12) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      handleToggle(12)
    } else {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      handleToggle(13);
    }
  };

  return (
    <div className="Searchinput">
      <input
        type="text"
        placeholder="가고싶은 지역을 검색하세요"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        style={{ width: '15em' }}
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

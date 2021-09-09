import React from 'react';
import { useState } from 'react';
import JSONDATA from './info.json';
import './Container.css';

const Container = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
              <p>{val.name}</p>
              {/* <img src={val.beach_img}/> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;

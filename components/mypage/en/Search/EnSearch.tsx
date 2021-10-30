import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Container = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [station, setStation] = useState([] as any);

  // useEffect(() => {
  //   axios.get()
  // })

  return (
    <div className="Searchinput">
      {/* <input
        type="text"
        placeholder="어디로 떠나실건가요?"
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
      </div> */}
    </div>
  );
};

export default Container;

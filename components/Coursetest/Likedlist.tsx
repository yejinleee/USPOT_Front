import React, { FC, memo, useEffect, useMemo, useState } from 'react';
// import { Link, Route } from 'react-router-dom';
// import './Slide.css';
// import Thumbnail from '@components/Thumbnail/Thumbnail';
import axios from 'axios';
// import Top5Mapevent from '@components/KaKao/Top5Mapevent';
// import { imageSearch } from './image';

interface Props {
  selectedcity: string;
  selectedcategory: string;
}


const Likedlist =() => {

  const [namelist, setNamelist] = useState([] as any);
  const [placeidlist,setPlaceidlist] = useState([] as any);

  useEffect(() => {
    axios.get(`/api/myplace/findall/1`).then(async (response) => {
      console.log(response.data.data);
      for (var i = 0; i < response.data.data.length; i++) {
        setNamelist((prev: any) => [...prev, response.data.data[i].name]);
        setPlaceidlist((prev:any) => [...prev, response.data.data[i].id])
      }
    });
  }, []);
  console.log('장소id', placeidlist)
  // console.log('이름만 저장 namelist', namelist);

  const likedlist: any = namelist.map((v: string, index: number) => (
    <>
      <div id={v} key={index}>
        {namelist[index]}
      </div>
    </>
  ));


  return (
    <>
      <div className="Likedlist">
        <div>[하트 누른 장소들 목록]</div>
        <div className='likedlist' style={{ display: 'inline-block' }}>
          {likedlist}
        </div>
      </div>
    </>
  );
}

export default Likedlist;
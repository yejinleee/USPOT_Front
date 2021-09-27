import React, { FC, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import path from 'path';
interface Props {
  arrange: string;
  type: number;
  distance: number;
}
const Getapi: FC<Props> = ({ children, arrange, type, distance }) => {
  let api = process.env.REACT_APP_TOUR_API_KEY;
  let number = 5;
  let pnumber = 1;
  let mapX = 127.5091156306887;
  let mapY = 34.8867806675504;
  var datas = 'not exist';
  const [data, setData] = useState([] as any);

  useEffect(() => {
    axios
      .get(
        `http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList?serviceKey=${api}&numOfRows=${number}&pageNo=${pnumber}&MobileOS=ETC&MobileApp=AppTest&arrange=${arrange}&contentTypeId=${type}&mapX=${mapX}&mapY=${mapY}&radius=${distance}&listYN=Y&_type=json`,
      )
      .then((response) => {
        // console.log(response);
        setData(response.data.response.body.items.item);
      });
  }, [datas]);

  console.log(data);
  if (data) {
    datas = data.map((v: any) => {
      return (
        <>
          <div>{v.title}</div>
          <img src={v.firstimage}></img>
        </>
      );
    });
  } else {
    datas = 'not exist';
  }

  return <>{datas}</>;
};

export default Getapi;

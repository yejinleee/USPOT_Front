import React, { FC, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import 'dotenv/config';
const Getapi = (props: any) => {
  //   axios
  //     .get(
  //       'http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList?serviceKey=qPBQqkfK5VN9ttMHs2vVx8bBzoISmiPscnXpOzHI%2BtdnbDUGFk23OXcg7rFq%2BA3t7g%2B7yHayVWbvu4pb%2FxewnA%3D%3D&numOfRows=10&pageNo=2&MobileOS=ETC&MobileApp=AppTest&arrange=E&contentTypeId=38&mapX=126.981611&mapY=37.568477&radius=1000&listYN=Y&_type=json',
  //     )
  //     .then((response) => {
  //       console.log(response.data.response.body.items.item[0].addr1);
  //       console.log(response.data.response.body.items.item[0].title);
  //       console.log(response.data.response.body.items.item[0].firstimage);
  //     });
  console.log(process.env.REACT_APP_KAKAO_MAP_KEY);
  return <></>;
};

export default Getapi;
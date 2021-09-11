import React, {FC, memo, useMemo, useState} from 'react';
import Slide from "@components/Slide/Slide";

interface Props {
  city : string;
}

const Second=()=> {
  const city="~선택한 장소~"
  return(
    <>
      <Slide city={city}> </Slide>
      <div className="top5map" style={{background:"#d9dfe4", height:"250px"}}>top5장소 카카오 맵</div>
    </>

  );

}

export default Second;

// 이게 /pages/로 가야할지 모르겠다  ? ?
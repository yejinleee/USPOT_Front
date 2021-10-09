import React, { FC, useCallback, useEffect, useState } from 'react';


interface Props{
  placename:any,
  placeaddr:any,
  placedist:any,
  placeimg:any,
}

const Likekto : FC<Props> =({placename,placeaddr,placedist,placeimg})=>{

  const [like0,setLike0] = useState(false); //초기0 누르면1 눌렀다 빼면 2 //처음렌더링대 false라 else문들어갈까봐
  const [like1,setLike1] = useState(false);
  const [like2,setLike2] = useState(false);
  const [like3,setLike3] = useState(false);
  const [like4,setLike4] = useState(false);

  function func_div(e:number){ // e번째 장소의 이름 주소 거리 이미지 나오는 div 리턴하는 함수
    return (
      <>
        <div>
          <div className="placename">{placename[e]}</div>
          <div className="placeaddr">{placeaddr[e]}</div>
          <div className="placedist">{placedist[e]}m</div>
          <img src={placeimg[e]} className="placeimg" alt="alt"/>
        </div>
      </>
    )
  } //func_div

  // console.log(placename.length);


  return (
    <>
      {/*{func_div(0)}*/}

    </>
  )
}

export default Likekto;
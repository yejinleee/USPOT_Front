import React, {FC, memo, useMemo, useState} from 'react';
// import styled from "styled-components";
import './Slide.css';
// import {scryRenderedComponentsWithType} from "react-dom/test-utils";

interface Props {
  city : string;
}

const Slide : FC<Props> = ({children, city }) => {

  const pic1 = "https://user-images.githubusercontent.com/81412212/132859482-98355de1-63a3-41ea-b7f6-f8ce34f758f0.jpg"
  const pic2 = "https://user-images.githubusercontent.com/81412212/132859641-e6650092-45a9-4b17-b2ad-6fe8ef06a161.png"
  const pic3 = "https://user-images.githubusercontent.com/81412212/132859644-e57852f7-7e2f-4d9a-95d0-b8ff678e8a52.jpg"
  const pic4 = "https://user-images.githubusercontent.com/81412212/132859652-bf4c8160-b59e-4857-9f4c-62dfd4039ad1.jpg"
  const pic5 = "https://user-images.githubusercontent.com/81412212/132859719-38e290d8-8757-4864-8ac3-ebdaf6e4beb1.jpg"

  const [btn_pic, setBtn_pic] = useState(1);
  // 이걸 자리 번호별 transform 값으로 지정해두자. 주로 바뀌는게 transform: translateX 랑 translate 일듯
  const [start,setStart] = useState(0);

  const [imgloc,setImgloc]=useState(['carousel_card_item center','carousel_card_item right','carousel_card_item leftback','carousel_card_item rightback','carousel_card_item left']);

  return (

    <>
      {/*<div>2페이지 : {btn_pic}번그림 관광명소 TOP 5</div>*/}
      <div className="carousel">
        <div className="carousel_card">
          {/*<div className="top5_carousel_container" style={ top5slide()}>*/}
          <div className="top5_carousel_container">
            <div className={imgloc[start]}>
              {/*여기에 style={btn_pic ===각번호 ? view_pic3 : view_pic5} 머이런식으로*/}
              <div className="carousel-card-mask"> </div>
              <img src={pic1} alt="pic"/>
            </div>
            <div className={imgloc[(start+1)%5]}>
              <div className="carousel-card-mask"> </div>
              <img src={pic2} alt="pic"/>
            </div>
            <div className={imgloc[(start+2)%5]}>
              <div className="carousel-card-mask"> </div>
              <img src={pic3} alt="pic"/>
            </div>
            <div className={imgloc[(start+3)%5]}>
              <div className="carousel-card-mask"> </div>
              <img src={pic4} alt="pic"/>
            </div>
            <div className={imgloc[(start+4)%5]}>
              <div className="carousel-card-mask"> </div>
              <img src={pic5} alt="pic"/>
            </div>
          </div>

          <div className="carousel-card-pager-zoomable">
            <span><button onClick={ () => {setBtn_pic(1); setStart(0)}} className={btn_pic ===1 ? "btn_now" : "btn1"}>1</button></span>
            <span><button onClick={ () => {setBtn_pic(2); setStart(4)}} className={btn_pic ===2 ? "btn_now" :  "btn2"}>2</button></span>
            <span><button onClick={ () => {setBtn_pic(3); setStart(3)}} className={btn_pic ===3 ? "btn_now" :  "btn3"}>3</button></span>
            <span><button onClick={ () => {setBtn_pic(4); setStart(2)}} className={btn_pic ===4 ? "btn_now" :  "btn4"}>4</button></span>
            <span><button onClick={ () => {setBtn_pic(5); setStart(1)}} className={btn_pic ===5 ? "btn_now" :  "btn5"}>5</button></span>
          </div>
        </div>
      </div>


      {/*<button className="btn3">3</button>*/}
    </>

  );


}
export default Slide;

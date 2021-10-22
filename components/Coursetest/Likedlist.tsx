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
  useEffect(() => {
    axios.get(`/api/myplace/findall/1`).then(async (response) => {
      // console.log(response.data.data);
      for (var i = 0; i < response.data.data.length; i++) {
        setNamelist((prev: any) => [...prev, response.data.data[i].name]);
      }
      // setTop5data(response.data.data);
      // for (var i = 0; i < 5; i++) {
      //   setTop5name((prev: any) => [...prev, response.data.data[i].name]);
      //   setTop5phone((prev: any) => [...prev, response.data.data[i].phone]);
      //   setTop5add((prev: any) => [...prev, response.data.data[i].address]);
      //   setTop5placeid((prev: any) => [...prev, response.data.data[i].id]);
      //   setMapx((prev: any) => [...prev, response.data.data[i].location_x]);
      //   setMapy((prev: any) => [...prev, response.data.data[i].location_y]);
      // }
    });
  }, []);
  console.log('이름만 저장 namelist', namelist);

  // data.map((v:string) =>(
  //   console.log(v);
  // ));

  const likedlist: any = namelist.map((v: string, index: number) => (
    <>
      <div id={v} key={index}>
        {namelist[index]}
      </div>
    </>
  ));


  return (
    <>
      <div>[하트 누른 장소들 목록]</div>
      <div className='likedlist' style={{ display: 'inline-block' }}>
        {likedlist}
      </div>
    </>
  );
}

export default Likedlist;
//
// const Slide: FC<Props> = ({ children, selectedcity, selectedcategory }) => {
//   const [pic1, setPic1] = useState('' as any);
//   const [pic2, setPic2] = useState('' as any);
//   const [pic3, setPic3] = useState('' as any);
//   const [pic4, setPic4] = useState('' as any);
//   const [pic5, setPic5] = useState('' as any);
//   const [btn_pic, setBtn_pic] = useState(1);
//   // 이걸 자리 번호별 transform 값으로 지정해두자. 주로 바뀌는게 transform: translateX 랑 translate 일듯
//   const [start, setStart] = useState(0);
//
//   const [imgloc, setImgloc] = useState([
//     'carousel_card_item center',
//     'carousel_card_item right',
//     'carousel_card_item leftback',
//     'carousel_card_item rightback',
//     'carousel_card_item left',
//   ]);
//
//   const [top5name, setTop5name] = useState([] as any);
//   const [top5phone, setTop5phone] = useState([] as any);
//   const [top5add, setTop5add] = useState([] as any);
//   const [top5placeid, setTop5placeid] = useState([] as any);
//   const [mapx, setMapx] = useState([] as any);
//   const [mapy, setMapy] = useState([] as any);
//   const [top5data, setTop5data] = useState([] as any);
//   var dic: { [key: string]: number } = {
//     가평군: 1,
//     광명시: 2,
//     연천군: 3,
//     남양주시: 4,
//     파주시: 5,
//     동두천시: 6,
//     화성시: 7,
//     양평군: 8,
//     고양시: 9,
//     평택시: 10,
//     수원시: 11,
//     안양시: 12,
//     오산시: 13,
//     의정부시: 14,
//     강릉시: 15,
//     춘천시: 16,
//     정선군: 17,
//     삼척시: 18,
//     태백시: 19,
//     동해시: 20,
//     원주시: 21,
//     횡성군: 22,
//     철원군: 23,
//     평창군: 24,
//     영월군: 25,
//     논산시: 26,
//     계룡시: 27,
//     공주시: 28,
//     홍성군: 29,
//     보령시: 30,
//     아산시: 31,
//     서천군: 32,
//     천안시: 33,
//     예산군: 34,
//     영동군: 35,
//     단양군: 36,
//     청주시: 37,
//     충주시: 38,
//     제천시: 39,
//     증평군: 40,
//     옥천군: 41,
//     음성군: 42,
//     곡성군: 43,
//     광양시: 44,
//     순천시: 45,
//     나주시: 46,
//     화순군: 47,
//     보성군: 48,
//     목포시: 49,
//     무안군: 50,
//     장성군: 51,
//     함평군: 52,
//     여수시: 53,
//     군산시: 54,
//     김제시: 55,
//     익산시: 56,
//     전주시: 57,
//     정읍시: 58,
//     완주군: 59,
//     임실군: 60,
//     남원시: 61,
//     창원시: 62,
//     밀양시: 63,
//     진주시: 64,
//     하동군: 65,
//     김해시: 66,
//     사천시: 67,
//     양산시: 68,
//     함안군: 69,
//     영덕군: 70,
//     구미시: 71,
//     예천군: 72,
//     경주시: 73,
//     경산시: 74,
//     청도군: 75,
//     봉화군: 76,
//     영천시: 77,
//     상주시: 78,
//     군위군: 79,
//     영주시: 80,
//     포항시: 81,
//     의성군: 82,
//     문경시: 83,
//     칠곡군: 84,
//     안동시: 85,
//     김천시: 86,
//     인천: 87,
//     대전: 88,
//     대구: 89,
//     부산: 90,
//     울산: 91,
//     광주: 92,
//     세종: 93,
//   };
//   var dic_category: { [key: string]: number } = {
//     관광명소: 1,
//     음식점: 2,
//     카페: 3,
//   };
//   let imageSrc = `/src/icon/${dic_category[selectedcategory]}.png`;
//   useEffect(() => {
//     axios.get(`/api/place/findtop5/${dic[selectedcity]}/${dic_category[selectedcategory]}`).then(async (response) => {
//       setTop5data(response.data.data);
//       for (var i = 0; i < 5; i++) {
//         setTop5name((prev: any) => [...prev, response.data.data[i].name]);
//         setTop5phone((prev: any) => [...prev, response.data.data[i].phone]);
//         setTop5add((prev: any) => [...prev, response.data.data[i].address]);
//         setTop5placeid((prev: any) => [...prev, response.data.data[i].id]);
//         setMapx((prev: any) => [...prev, response.data.data[i].location_x]);
//         setMapy((prev: any) => [...prev, response.data.data[i].location_y]);
//       }
//
//       for (var i = 0; i < 5; i++) {
//         const name = response.data.data[i].name;
//         const params = {
//           query: name,
//           sort: 'accuracy',
//           size: 5,
//         };
//         const { data } = await imageSearch(params);
//
//         if (i === 0) {
//           setPic1(data.documents[0].image_url);
//         } else if (i === 1) {
//           setPic2(data.documents[0].image_url);
//         } else if (i === 2) {
//           setPic3(data.documents[3].image_url);
//         } else if (i === 3) {
//           setPic4(data.documents[1].image_url);
//         } else {
//           setPic5(data.documents[0].image_url);
//         }
//       }
//     });
//   }, []);
//
//   return (
//     <>
//       <div className="carousel">
//         <div className="carousel_card">
//           {/*<div className="top5_carousel_container" style={ top5slide()}>*/}
//           <div className="top5_carousel_container">
//             <div className={imgloc[start]}>
//               {/*여기에 style={btn_pic ===각번호 ? view_pic3 : view_pic5} 머이런식으로*/}
//               <div className="carousel-card-mask">
//                 <img src={pic1} alt="pic" className="carousel-img" />
//                 <span>
//                   <p>{top5name[0]}</p>
//                   <p>{top5phone[0]}</p>
//                   <p>{top5add[0]}</p>
//                 </span>
//               </div>
//             </div>
//             <div className={imgloc[(start + 1) % 5]}>
//               <div className="carousel-card-mask">
//                 <img src={pic2} alt="pic" className="carousel-img" />
//                 <span>
//                   <p>{top5name[1]}</p>
//                   <p>{top5phone[1]}</p>
//                   <p>{top5add[1]}</p>
//                 </span>
//               </div>
//             </div>
//             <div className={imgloc[(start + 2) % 5]}>
//               <div className="carousel-card-mask">
//                 <img src={pic3} alt="pic" className="carousel-img" />
//                 <span>
//                   <p>{top5name[2]}</p>
//                   <p>{top5phone[2]}</p>
//                   <p>{top5add[2]}</p>
//                 </span>
//               </div>
//             </div>
//             <div className={imgloc[(start + 3) % 5]}>
//               <div className="carousel-card-mask">
//                 <img src={pic4} alt="pic" className="carousel-img" />
//                 <span>
//                   <p>{top5name[3]}</p>
//                   <p>{top5phone[3]}</p>
//                   <p>{top5add[3]}</p>
//                 </span>
//               </div>
//             </div>
//             <div className={imgloc[(start + 4) % 5]}>
//               <div className="carousel-card-mask">
//                 <img src={pic5} alt="pic" className="carousel-img" />
//                 <span>
//                   <p>{top5name[4]}</p>
//                   <p>{top5phone[4]}</p>
//                   <p>{top5add[4]}</p>
//                 </span>
//               </div>
//             </div>
//           </div>
//
//           <div className="carousel-card-pager-zoomable">
//             <span>
//               <button
//                 onClick={() => {
//                   setBtn_pic(1);
//                   setStart(0);
//                 }}
//                 className="carousel-btn"
//                 id={btn_pic === 1 ? 'btn_now' : 'btn1'}
//               >
//                 1
//               </button>
//             </span>
//             <span>
//               <button
//                 onClick={() => {
//                   setBtn_pic(2);
//                   setStart(4);
//                 }}
//                 className="carousel-btn"
//                 id={btn_pic === 2 ? 'btn_now' : 'btn2'}
//               >
//                 2
//               </button>
//             </span>
//             <span>
//               <button
//                 onClick={() => {
//                   setBtn_pic(3);
//                   setStart(3);
//                 }}
//                 className="carousel-btn"
//                 id={btn_pic === 3 ? 'btn_now' : 'btn3'}
//               >
//                 3
//               </button>
//             </span>
//             <span>
//               <button
//                 onClick={() => {
//                   setBtn_pic(4);
//                   setStart(2);
//                 }}
//                 className="carousel-btn"
//                 id={btn_pic === 4 ? 'btn_now' : 'btn4'}
//               >
//                 4
//               </button>
//             </span>
//             <span>
//               <button
//                 onClick={() => {
//                   setBtn_pic(5);
//                   setStart(1);
//                 }}
//                 className="carousel-btn"
//                 id={btn_pic === 5 ? 'btn_now' : 'btn5'}
//               >
//                 5
//               </button>
//             </span>
//           </div>
//         </div>
//       </div>
//
//       <button className="gotothirdbtn">
//         <Link
//           to={{
//             pathname: `/${selectedcity}/${selectedcategory}/more`,
//             state: {
//               mapx: mapx[btn_pic - 1],
//               mapy: mapy[btn_pic - 1],
//             },
//           }}
//           style={{ textDecoration: 'none', color: '#000000' }}
//         >
//           주변장소 더 보기
//         </Link>
//       </button>
//
//       <Top5Mapevent top5data={top5data} imageSrc={imageSrc} top5name={top5name} top5placeid={top5placeid} />
//       <Thumbnail selectedcity={selectedcity} selectedcategory={selectedcategory} btn_pic={btn_pic} />
//     </>
//   );
// };
// export default Slide;

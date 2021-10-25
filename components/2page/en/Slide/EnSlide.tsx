import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import { Link, Route, RouteChildrenProps } from 'react-router-dom';
import '@components/2page/Slide.css';
import axios from 'axios';
import EnThumbnail from '@components/2page/en/Thumbnail/EnThumbnail';
import EnTop5Mapevent from '@components/2page/en/KaKaoMap/EnTop5Mapevent';
import { imageSearch } from './image';
import { History, LocationState } from 'history';

interface Props {
  selectedcity: string;
  selectedcategory: string;
  history: History<LocationState>;
}

const EnSlide: FC<Props> = (props: Props) => {
  const [pic1, setPic1] = useState('' as any);
  const [pic2, setPic2] = useState('' as any);
  const [pic3, setPic3] = useState('' as any);
  const [pic4, setPic4] = useState('' as any);
  const [pic5, setPic5] = useState('' as any);
  const [btn_pic, setBtn_pic] = useState(1);
  // 이걸 자리 번호별 transform 값으로 지정해두자. 주로 바뀌는게 transform: translateX 랑 translate 일듯
  const [start, setStart] = useState(0);

  const [imgloc, setImgloc] = useState([
    'carousel_card_item center',
    'carousel_card_item right',
    'carousel_card_item leftback',
    'carousel_card_item rightback',
    'carousel_card_item left',
  ]);

  const [top5name, setTop5name] = useState([] as any);
  const [top5phone, setTop5phone] = useState([] as any);
  const [top5add, setTop5add] = useState([] as any);
  const [top5placeid, setTop5placeid] = useState([] as any);
  const [mapx, setMapx] = useState([] as any);
  const [mapy, setMapy] = useState([] as any);
  const [top5data, setTop5data] = useState([] as any);
  const [placeurl,setPlaceurl] = useState( [] as any);

  var dic: { [key: string]: number } = {
    suwong:11,
    Gangneung:15,
    danyang:36,
    cheonan:33,
    jeonju:57,
    suncheon:45,
    gyeonju:73,
    andong:85,
    hadong:65,
    daegu:89,
    busan:90,
  };
  var dic_category: { [key: string]: number } = {
    관광명소: 1,
    음식점: 2,
    카페: 3,
  };
  let imageSrc = `/src/icon/${dic_category[props.selectedcategory]}.png`;
  useEffect(() => {
    axios
      .get(`/api/en/place/findtop5/${dic[props.selectedcity]}/${dic_category[props.selectedcategory]}`)
      .then(async (response) => {
        setTop5data(response.data.data);
        for (var i = 0; i < 5; i++) {
          setTop5name((prev: any) => [...prev, response.data.data[i].name]);
          setTop5phone((prev: any) => [...prev, response.data.data[i].phone]);
          setTop5add((prev: any) => [...prev, response.data.data[i].address]);
          setTop5placeid((prev: any) => [...prev, response.data.data[i].id]);
          setMapx((prev: any) => [...prev, response.data.data[i].location_x]);
          setMapy((prev: any) => [...prev, response.data.data[i].location_y]);
          setPlaceurl( (prev:any) => [...prev, response.data.data[i].placeUrl]);
        }
        // console.log('탑data',response.data);
        for (var i = 0; i < 5; i++) {
          const name = response.data.data[i].name;
          const params = {
            query: name,
            sort: 'accuracy',
            size: 5,
          };
          const { data } = await imageSearch(params);

          if (i === 0) {
            setPic1('https://storep-phinf.pstatic.net/ogq_5a0024180a88a/original_6.png?type=p100_100');
          } else if (i === 1) {
            setPic2(data.documents[0].image_url);
          } else if (i === 2) {
            setPic3(data.documents[3].image_url);
          } else if (i === 3) {
            setPic4(data.documents[1].image_url);
          } else {
            setPic5(data.documents[0].image_url);
          }
        }
      })
      .catch((error) => {});
  }, []);
  var selectedplace;
  selectedplace = top5name[btn_pic-1];

  return (
    <>
      <div className="carousel">
        <div className="carousel_card">
          {/*<div className="top5_carousel_container" style={ top5slide()}>*/}
          <div className="top5_carousel_container">
            <div className={imgloc[start]}>
              {/*여기에 style={btn_pic ===각번호 ? view_pic3 : view_pic5} 머이런식으로*/}
              <div className="carousel-card-mask">
                <img src={pic1} alt="pic" className="carousel-img" />
                <span>
                  <p>{top5name[0]}</p>
                  <p>{top5phone[0]}</p>
                  <p>{top5add[0]}</p>
                </span>
              </div>
            </div>
            <div className={imgloc[(start + 1) % 5]}>
              <div className="carousel-card-mask">
                <img src={pic2} alt="pic" className="carousel-img" />
                <span>
                  <p>{top5name[1]}</p>
                  <p>{top5phone[1]}</p>
                  <p>{top5add[1]}</p>
                </span>
              </div>
            </div>
            <div className={imgloc[(start + 2) % 5]}>
              <div className="carousel-card-mask">
                <img src={pic3} alt="pic" className="carousel-img" />
                <span>
                  <p>{top5name[2]}</p>
                  <p>{top5phone[2]}</p>
                  <p>{top5add[2]}</p>
                </span>
              </div>
            </div>
            <div className={imgloc[(start + 3) % 5]}>
              <div className="carousel-card-mask">
                <img src={pic4} alt="pic" className="carousel-img" />
                <span>
                  <p>{top5name[3]}</p>
                  <p>{top5phone[3]}</p>
                  <p>{top5add[3]}</p>
                </span>
              </div>
            </div>
            <div className={imgloc[(start + 4) % 5]}>
              <div className="carousel-card-mask">
                <img src={pic5} alt="pic" className="carousel-img" />
                <span>
                  <p>{top5name[4]}</p>
                  <p>{top5phone[4]}</p>
                  <p>{top5add[4]}</p>
                </span>
              </div>
            </div>
          </div>

          <div className="carousel-card-pager-zoomable">
            <span>
              <button
                onClick={() => {
                  setBtn_pic(1);
                  setStart(0);
                }}
                className="carousel-btn"
                id={btn_pic === 1 ? 'btn_now' : 'btn1'}
              >
                1
              </button>
            </span>
            <span>
              <button
                onClick={() => {
                  setBtn_pic(2);
                  setStart(4);
                }}
                className="carousel-btn"
                id={btn_pic === 2 ? 'btn_now' : 'btn2'}
              >
                2
              </button>
            </span>
            <span>
              <button
                onClick={() => {
                  setBtn_pic(3);
                  setStart(3);
                }}
                className="carousel-btn"
                id={btn_pic === 3 ? 'btn_now' : 'btn3'}
              >
                3
              </button>
            </span>
            <span>
              <button
                onClick={() => {
                  setBtn_pic(4);
                  setStart(2);
                }}
                className="carousel-btn"
                id={btn_pic === 4 ? 'btn_now' : 'btn4'}
              >
                4
              </button>
            </span>
            <span>
              <button
                onClick={() => {
                  setBtn_pic(5);
                  setStart(1);
                }}
                className="carousel-btn"
                id={btn_pic === 5 ? 'btn_now' : 'btn5'}
              >
                5
              </button>
            </span>
          </div>
        </div>
      </div>

      <button className="gotothirdbtn">
        <Link
          to={{
            pathname: `/${props.selectedcity}/${props.selectedcategory}/more`,
            state: {
              selectedplace: top5name[btn_pic - 1],
              mapx: mapx[btn_pic - 1],
              mapy: mapy[btn_pic - 1],
              top5placeid: top5placeid[btn_pic - 1],
            },
          }}
          style={{ textDecoration: 'none', color: '#000000' }}
        >
          View More !
        </Link>
      </button>
      <EnTop5Mapevent
        top5data={top5data}
        imageSrc={imageSrc}
        top5name={top5name}
        top5placeid={top5placeid}
        placeurl={placeurl}
        history={props.history}
      />
      <EnThumbnail
        selectedcity={props.selectedcity}
        selectedcategory={props.selectedcategory}
        btn_pic={btn_pic}
        history={props.history}
        selectedplace={selectedplace}
      />
    </>
  );
};
export default EnSlide;

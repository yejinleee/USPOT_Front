import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Slide.scss';
import Thumbnail from '@components/2page/ko/Thumbnail/Thumbnail';
import axios from 'axios';
import Top5Mapevent from '@components/2page/ko/KaKaoMap/Top5Mapevent';
import { History, LocationState } from 'history';

interface Props {
  selectedcity: string;
  selectedcategory: string;
  history: History<LocationState>;
}

const Slide: FC<Props> = (props: Props) => {
  const [pic1, setPic1] = useState('' as any);
  const [pic2, setPic2] = useState('' as any);
  const [pic3, setPic3] = useState('' as any);
  const [pic4, setPic4] = useState('' as any);
  const [pic5, setPic5] = useState('' as any);
  const [btn_pic, setBtn_pic] = useState(1);
  const [start, setStart] = useState(0);

  var imgloc = ['carousel_card_item center',
    'carousel_card_item right',
    'carousel_card_item leftback',
    'carousel_card_item rightback',
    'carousel_card_item left']

  const [top5name, setTop5name] = useState([] as any);
  const [top5phone, setTop5phone] = useState([] as any);
  const [top5add, setTop5add] = useState([] as any);
  const [top5placeid, setTop5placeid] = useState([] as any);
  const [mapx, setMapx] = useState([] as any);
  const [mapy, setMapy] = useState([] as any);
  const [top5data, setTop5data] = useState([] as any);
  const [placeurl, setPlaceurl] = useState([] as any);
  const [station, setStation] = useState([] as any);

  var dic: { [key: string]: number } = {
    gapyeong: 1,
    goyaong: 9,
    suwon: 11,
    gangneung: 15,
    chuncheon: 16,
    cheonan: 33,
    danyang: 36,
    cheongju: 37,
    suncheon: 45,
    jeonju: 57,
    hadong: 65,
    gyeongju: 73,
    andong: 85,
    incheon: 87,
    daejeon: 88,
    daegu: 89,
    busan: 90,
    gwangju: 92,
  };
  var dic_name: { [key: string]: string } = {
    gapyeong: '가평군',
    goyaong: '고양시',
    suwon: '수원시',
    gangneung: '강릉시',
    chuncheon: '춘천시',
    cheonan: '천안시',
    danyang: '단양군',
    cheongju: '청주시',
    suncheon: '순천시',
    jeonju: '전주시',
    hadong: '하동군',
    gyeongju: '경주시',
    andong: '안동시',
    incheon: '인천',
    daejeon: '대전',
    daegu: '대구',
    busan: '부산',
    gwangju: '광주',
  };
  var dic_category: { [key: string]: number } = {
    관광명소: 1,
    음식점: 2,
    카페: 3,
  };
  let imageSrc = `/src/icon/${dic_category[props.selectedcategory]}.png`;
  useEffect(() => {
    axios
      .get(
        `/api/place/findtop5/${dic[props.selectedcity]}/${dic_category[props.selectedcategory]}`)
      .then(async (response) => {
        setTop5data(response.data.data);
        for (var i = 0; i < 5; i++) {
          setTop5name((prev: any) => [...prev, response.data.data[i].name]);
          setTop5phone((prev: any) => [...prev, response.data.data[i].phone]);
          setTop5add((prev: any) => [...prev, response.data.data[i].address]);
          setTop5placeid((prev: any) => [...prev, response.data.data[i].id]);
          setMapx((prev: any) => [...prev, response.data.data[i].location_x]);
          setMapy((prev: any) => [...prev, response.data.data[i].location_y]);
          setPlaceurl((prev: any) => [...prev, response.data.data[i].placeUrl]);
          if (i === 0) {
            setPic1(response.data.data[i].image);
          } else if (i === 1) {
            setPic2(response.data.data[i].image);
          } else if (i === 2) {
            setPic3(response.data.data[i].image);
          } else if (i === 3) {
            setPic4(response.data.data[i].image);
          } else {
            setPic5(response.data.data[i].image);
          }
        }
      })
      .catch((error) => {});
    axios
      .get(process.env.REACT_APP_DB_HOST + `/api/station/${dic[props.selectedcity]}`)
      .then((response) => {
        setStation(response.data.data);
      })
      .then((error) => {});
  }, []);

  var selectedplace;
  selectedplace = top5name[btn_pic - 1];
  function next() {
    if (btn_pic === 1) {
      setStart(4);
    } else if (btn_pic === 2) {
      setStart(3);
    } else if (btn_pic === 3) {
      setStart(2);
    } else if (btn_pic === 4) {
      setStart(1);
    } else if (btn_pic === 5) {
      setStart(0);
    }
    if (btn_pic === 4) {
      setBtn_pic(5);
    } else {
      setBtn_pic((btn_pic + 1) % 5);
    }
  }
  function left() {
    if (start === 1) {
      setStart(2);
    } else if (start === 2) {
      setStart(3);
    } else if (start === 3) {
      setStart(4);
    } else if (start === 4) {
      setStart(0);
    } else if (start === 0) {
      setStart(1);
    }
    if (btn_pic === 1) {
      setBtn_pic(5);
    } else {
      setBtn_pic((btn_pic - 1) % 5);
    }
  }
  var dic_router: { [key: string]: string } = {
    관광명소: 'attraction',
    음식점: 'restaurant',
    카페: 'cafe',
  };

  return (
    <>
      <div className="title">
        <h2 style={{ marginBottom: '0px', marginTop: '0.8em' }}>
          {dic_name[props.selectedcity]}의 {props.selectedcategory} TOP5{' '}
        </h2>
      </div>
      <div className="carousel">
        <div className="carousel_card">
          <div className="top5_carousel_container">
            <button className="왼쪽으로" onClick={left}>
              {' '}
              (({' '}
            </button>
            <button className="오른쪽으로" onClick={next}>
              {' '}
              )){' '}
            </button>

            <div className={imgloc[start]}>
              <div className="carousel-card-mask">
                <img src={pic1} alt="pic" className="carousel-img" />
                <span className="carousel_span">
                  <p className="top5name_p">{top5name[0]}</p>
                  <p className="top5phone_p">{top5phone[0]}</p>
                  <p className="top5add_p">{top5add[0]}</p>
                </span>
              </div>
            </div>
            <div className={imgloc[(start + 1) % 5]}>
              <div className="carousel-card-mask">
                <img src={pic2} alt="pic" className="carousel-img" />
                <span className="carousel_span">
                  <p className="top5name_p">{top5name[1]}</p>
                  <p className="top5phone_p">{top5phone[1]}</p>
                  <p className="top5add_p">{top5add[1]}</p>
                </span>
              </div>
            </div>
            <div className={imgloc[(start + 2) % 5]}>
              <div className="carousel-card-mask">
                <img src={pic3} alt="pic" className="carousel-img" />
                <span className="carousel_span">
                  <p className="top5name_p">{top5name[2]}</p>
                  <p className="top5phone_p">{top5phone[2]}</p>
                  <p className="top5add_p">{top5add[2]}</p>
                </span>
              </div>
            </div>
            <div className={imgloc[(start + 3) % 5]}>
              <div className="carousel-card-mask">
                <img src={pic4} alt="pic" className="carousel-img" />
                <span className="carousel_span">
                  <p className="top5name_p">{top5name[3]}</p>
                  <p className="top5phone_p">{top5phone[3]}</p>
                  <p className="top5add_p">{top5add[3]}</p>
                </span>
              </div>
            </div>
            <div className={imgloc[(start + 4) % 5]}>
              <div className="carousel-card-mask">
                <img src={pic5} alt="pic" className="carousel-img" />
                <span className="carousel_span">
                  <p className="top5name_p">{top5name[4]}</p>
                  <p className="top5phone_p">{top5phone[4]}</p>
                  <p className="top5add_p">{top5add[4]}</p>
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

      <div id="gotothird_div">
        <button className="gotothirdbutton">
          <Link
            to={{
              pathname: `/${props.selectedcity}/${dic_router[props.selectedcategory]}/more`,
              state: {
                selectedplace: top5name[btn_pic - 1],
                mapx: mapx[btn_pic - 1],
                mapy: mapy[btn_pic - 1],
                top5placeid: top5placeid[btn_pic - 1],
              },
            }}
            style={{ textDecoration: 'none', color: 'rgb(92, 88, 88)' }}
            id="gotothird_link"
          >
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">주변장소 더보기</span>
          </Link>
        </button>
      </div>

      <div className="top5mapevent" style={{ position: 'relative', width: '100%' }}>
        <Top5Mapevent
          top5data={top5data}
          imageSrc={imageSrc}
          top5name={top5name}
          top5placeid={top5placeid}
          placeurl={placeurl}
          history={props.history}
          stationlist={station}
        />
      </div>
      <Thumbnail
        selectedcity={props.selectedcity}
        selectedcategory={props.selectedcategory}
        btn_pic={btn_pic}
        history={props.history}
        selectedplace={selectedplace}
      />
    </>
  );
};
export default Slide;

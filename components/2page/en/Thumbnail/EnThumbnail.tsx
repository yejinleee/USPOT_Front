import React, { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import '@components/2page/Thumbnail.scss';
import EnYoutubeMapevent from '@components/2page/en/KaKaoMap/EnYoutubeMapevent';
import EnYoutubeMapRsp from '@components/2page/en/KaKaoMap/EnYoutubeMapRsp';
import { History, LocationState } from 'history';

interface Props {
  selectedcity: any;
  selectedcategory: string;
  btn_pic: number;
  history: History<LocationState>;
  selectedplace:any;
}

// selcetedcity지역의 selectedcategory 카테고리에 해당되는 장소 top5 중 btn_pic번째 장소의 유튜브 보여주는것

const EnThumbnail: FC<Props> = ({ children, selectedcity, selectedcategory, btn_pic, history,selectedplace }) => {
  const [vloglist, setVloglist] = useState([] as any); //브이로그 id들 저장할 배열
  const [map, setMap] = useState(false);
  const [id, setId] = useState(null);
  const [vlogplaceid,setVlogplaceid] = useState([] as any);
  var dic: { [key: string]: number } = {
    가평군: 1,
    광명시: 2,
    연천군: 3,
    남양주시: 4,
    파주시: 5,
    동두천시: 6,
    화성시: 7,
    양평군: 8,
    고양시: 9,
    평택시: 10,
    수원시: 11,
    안양시: 12,
    오산시: 13,
    의정부시: 14,
    강릉시: 15,
    춘천시: 16,
    정선군: 17,
    삼척시: 18,
    태백시: 19,
    동해시: 20,
    원주시: 21,
    횡성군: 22,
    철원군: 23,
    평창군: 24,
    영월군: 25,
    논산시: 26,
    계룡시: 27,
    공주시: 28,
    홍성군: 29,
    보령시: 30,
    아산시: 31,
    서천군: 32,
    천안시: 33,
    예산군: 34,
    영동군: 35,
    단양군: 36,
    청주시: 37,
    충주시: 38,
    제천시: 39,
    증평군: 40,
    옥천군: 41,
    음성군: 42,
    곡성군: 43,
    광양시: 44,
    순천시: 45,
    나주시: 46,
    화순군: 47,
    보성군: 48,
    목포시: 49,
    무안군: 50,
    장성군: 51,
    함평군: 52,
    여수시: 53,
    군산시: 54,
    김제시: 55,
    익산시: 56,
    전주시: 57,
    정읍시: 58,
    완주군: 59,
    임실군: 60,
    남원시: 61,
    창원시: 62,
    밀양시: 63,
    진주시: 64,
    하동군: 65,
    김해시: 66,
    사천시: 67,
    양산시: 68,
    함안군: 69,
    영덕군: 70,
    구미시: 71,
    예천군: 72,
    경주시: 73,
    경산시: 74,
    청도군: 75,
    봉화군: 76,
    영천시: 77,
    상주시: 78,
    군위군: 79,
    영주시: 80,
    포항시: 81,
    의성군: 82,
    문경시: 83,
    칠곡군: 84,
    안동시: 85,
    김천시: 86,
    인천: 87,
    대전: 88,
    대구: 89,
    부산: 90,
    울산: 91,
    광주: 92,
    세종: 93,
  };
  var dic_category: { [key: string]: number } = {
    관광명소: 1,
    음식점: 2,
    카페: 3,
  };
  useEffect(() => {
    setVloglist([]);
    axios
      .get(`/api/en/place/findtop5/${dic[selectedcity]}/${dic_category[selectedcategory]}`)
      .then((response) => {
        if (response.data.data[btn_pic - 1].vlog_list.length >= 5) {
          var number = 5;
        } else {
          number = response.data.data[btn_pic - 1].vlog_list.length;
        }
        for (var j = 0; j < number; j++) {
          setVlogplaceid((prev: any) => [...prev, response.data.data[j].id]);
          setVloglist((prev: any) => [...prev, response.data.data[btn_pic - 1].vlog_list[j].url]);
        }
    })
    .catch((error) => {});
  }, [btn_pic]);

  const [clickedvlog, setClickedvlog] = useState(-1);

  return (
    <>
      <div className="thumbnail_text">
        View more vlogs in {selectedplace}!
      </div>
      <div className="youtube_all" style={{overflowY:'hidden'}}>
        {vloglist !== [] &&
          vloglist.map((datas: any, i: any) => (
            <div key={i} className="youtube_each">
              <iframe
                width="336"
                height="188"
                src={`https://www.youtube.com/embed/${datas}?controls=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                className="underline-hover-btn"
                onClick={() => {
                  setMap(true);
                  setId(datas);
                  setClickedvlog(i);
                }}
              >
                <div className="gomap"
                     id={clickedvlog===i ? "clickedvlog":"notclickedvlog"}
                >More places in this video</div>
              </button>
            </div>
          ))}
      </div>
      <br/>
      {map && <>
        <div className="youtubemapevent" style={{ position: 'relative', width:'100%' }}>
          <EnYoutubeMapevent videoid={id} history={history} vlogplaceid={vlogplaceid} />
        </div>
        <div className="youtubemapevent_response" style={{ position: 'relative', width:'100%' }}>
          <EnYoutubeMapRsp videoid={id} history={history} vlogplaceid={vlogplaceid} />
        </div>
      </>}
    </>
  );
};

export default EnThumbnail;

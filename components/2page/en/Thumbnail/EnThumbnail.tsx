import React, { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import '@components/2page/Thumbnail.css';
import EnYoutubeMapevent from '@components/2page/en/KaKaoMap/EnYoutubeMapevent';
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
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [vlogplaceid,setVlogplaceid] = useState([] as any);
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
  useEffect(() => {
    setVloglist([]);
    axios.get(`/api/en/place/findtop5/${dic[selectedcity]}/${dic_category[selectedcategory]}`).then((response) => {
      // console.log('/findtop5/././ response.data.data : ',response.data.data)
      for (var j = 0; j < response.data.data[btn_pic - 1].vlog_list.length; j++) {
        console.log('카카오맵검색 id:(이거없으면에러나서,,)',response.data.data[j].id); //있어야 id 에러안나
        setVlogplaceid((prev: any) => [...prev, response.data.data[j].id]);
        setVloglist((prev: any) => [...prev, response.data.data[btn_pic - 1].vlog_list[j].url]);
      }
    })
    .catch((error) => {});
  }, [btn_pic]);
  return (
    <>
      <div className="youtube_all" style={{overflowY:'hidden'}}>
        <br/>
        View more vlogs in {selectedplace}!
        <br />
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
              ></iframe>
              <button
                className="youtubebutton"
                onClick={() => {
                  setMap(true);
                  setId(datas);
                }}
              >
                More places in this video
              </button>
            </div>
          ))}
      </div>
      <br/>
      {map && <EnYoutubeMapevent videoid={id} history={history} vlogplaceid={vlogplaceid}/>}
    </>
  );
};

export default EnThumbnail;

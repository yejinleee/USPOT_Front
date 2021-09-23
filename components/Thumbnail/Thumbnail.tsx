import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import Slide from '@components/Slide/Slide';
import Layout from '@layouts/Layouts';
import axios from 'axios';

interface Props {
  selectedcity: any;
  selectedcategory: string;
}

const Thumbnail : FC<Props> = ({children, selectedcity,selectedcategory }) => {
  // const selectedcity = props.match.params.selectedcity;
  // const selectedcategory = props.match.params.selectedcategory;
  //
  // let data = ['7I_UkvpJhqM','97fFo6qMU6s','Bkiq64Y8VHk','B-vV0NVcOh0','cx1ZJrclkAI']
  // return (
  //   <>
  //     <div>
  //       <div>
  //         {data.map((datas: any, i: any) => (
  //           <iframe width="280" height="157" src={`https://www.youtube.com/embed/${datas}?controls=0`}
  //                   title="YouTube video player" frameBorder="0"
  //                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //                   allowFullScreen></iframe>
  //         ))}
  //       </div>
  //     </div>
  //
  //
  //   </>
  // );

// //////////////
// //   캐러셀에서 선택한 장소를 {selectedplace}라 한다
  const [selectedplace,setSelectedplace] = useState('순천만습지1')
  const [vloglist,setVloglist] = useState([] as any); //브이로그 id들 저장할 배열
///////////////////

  var dic : { [key :string]:number} = {
    '가평군':1,'광명시':2,'연천군':3,'남양주시':4,'파주시':5,'동두천시':6,'화성시':7,'양평군':8,'고양시':9,'평택시':10,'수원시':11,'안양시':12,'오산시':13,'의정부시':14
  };
  var dic_category : {[key : string]:number} ={
    '관광명소':1,'음식점':2,'카페':3
  }

  useEffect(() => {
    axios.get(`/api/place/findtop5/${dic[selectedcity]}/${dic_category[selectedcategory]}`).then((response) => {
      for (var i = 0; i < response.data.data.length; i++) {
        if (response.data.data[i].name ===  selectedplace) {
          for (var j = 0; j < response.data.data[i].vlog_list.length; j++) {
            setVloglist((prev: any) => [...prev, response.data.data[i].vlog_list[j].url]);
          }
          break
        }
      }
    })
  },[]);


  return (
    <>
      <div>
         {vloglist.map((datas: any, i: any) => (
           <iframe width="280" height="157" src={`https://www.youtube.com/embed/${datas}?controls=0`}
                   title="YouTube video player" frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen></iframe>
         ))}
       </div>

    </>
  )



};

export default Thumbnail;

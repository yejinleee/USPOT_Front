import React, { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import './Toggle.css';
import Child from '@components/Category/child';
import Category from '@components/Category/category';
import Province from '@components/Category/Province';
import { type } from 'os';
import Citylist from '@components/Category/citylist';

const gyeongi = ['가평', '광명', '연천','남양주','파주','동두천','하남','양평','고양','평택','수원','안양','오산','의정부']
const gangwon = ['강릉', '춘천', '정선','삼척','태백','동해','원주','횡성','철원','영동','평창','영월']

const Toggle =() =>{

    const [cate,setCate]=useState("안");

    const [seoultoggle, setSeoultoggle] = useState(false);
    const [gyeongitoggle, setGyeongitoggle] = useState(false);
    const [gangwontoggle, setGangwontoggle] = useState(false);

    const [selectedcity, setSelectedcity] = useState(""); //선택된도시 props로 넘겨주려고

    const pin = "./images/pin.png"
    const [map, setMap] = useState("https://user-images.githubusercontent.com/63544044/132854633-87a1c788-d972-4375-96bb-eacc081ec93b.png");


    // const gyeongi_list = gyeongi.map((v) => (<div id={v} key={v}>{v}</div>));
    const gangwon_list = gangwon.map((v) => (<div id={v} key={v}>{v}<br/></div>));

    const [loading,setLoading] = useState([]);
    const [names, setNames] = useState([] as any);

    const [ggc, setGgc] = useState([] as any);

    useEffect(() => {
        axios.get('api/province/findprovince').then((response) => {
            for (var i = 0; i < response.data.data.length; i++) {
                setNames((prev: any) => [...prev, response.data.data[i].name]);
            }
            for (var j =0; j<response.data.data[0].cityList.length;j++){
                // console.log(j);
                setGgc((prev:any) => [...prev, response.data.data[0].cityList[j].name]);
            }
            // console.log(response.data.data[0].cityList[0].name)

        });
    }, []);

    // console.log(names);
    console.log(ggc);
    const gyeongi_list = ggc.map((v:string) => (<div id={v} key={v}>{v}</div>));


    return (
        <>
            {ggc}
            {/*<Province city={names}></Province>*/}
            {/*<Citylist city={ggc}></Citylist>*/}
            <Category setCate= {setCate} />
            <p>{cate} 골랐음</p>
            <Child setSelectedcity={setSelectedcity} />
            {/*Child : 선택한 city넘겨줘서 연결되는 컴포넌트. 테스트용 아마도 Child를 Second로 넘겨주거나 그런식*/}

            <img src={map} className="map" alt="map"/>

            <div className="district_toggle">
                <label className="district" onClick={() => {
                    setGyeongitoggle(!gyeongitoggle);
                    !gyeongitoggle && setMap('https://user-images.githubusercontent.com/63544044/132631033-9d4b6c68-a18f-48f5-a7a9-f2da3468a899.png')
                }}>{names[0]}</label> {/*경기*/}
                <div>{gyeongitoggle && gyeongi_list}</div>

                <label className="district" onClick={() => {
                    setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631035-ac204099-5480-4818-8afd-8163a4e6a55a.png');
                }}>{names[1]}</label> {/*강원*/}
                <div>{gangwontoggle && gangwon_list}</div>

                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631039-1469d02f-562b-4328-bca2-4a0738b5d55f.png');
                }}>{names[8]}</label> {/*인천*/}

                {/*이 아래부터는 지역리스트 토글 안만들어둠. 아직데이터없어서! 위에거도 그냥 아무지역이나 한거긴 하구*/}
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631025-fdc2acb4-2c7c-470a-8f17-9bb7eadd1adc.png');
                }}>{names[3]}</label> {/*충북*/}
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631030-7f92ec22-61c1-45c8-9600-722d1607fcf2.png');
                }}>{names[2]}</label> {/*충남*/}
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631044-64cdc1ff-2d25-4ed5-a9b5-532aecf5ce92.png');
                }}>{names[9]}</label> {/*대전*/}
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631027-4fd07a2c-5adc-431c-bdfd-0252e7ccc881.png');
                }}>세종특별시</label>
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631056-3058f55a-b7da-48c3-9bdc-738f1a2bf574.png');
                }}>{names[5]}</label> {/*전북*/}
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631055-2b867230-c0d0-455e-84ac-aebe2e3d58f2.png');
                }}>{names[4]}</label> {/*전남*/}
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631052-6f73100b-4fc2-4d8f-bd75-d748faafd2ed.png');
                }}>{names[13]}</label> {/*광주*/}
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631022-fba1b11e-4264-4fef-a36d-6818a3fe8d14.png');
                }}>{names[7]}</label> {/*경북*/}
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631061-94d8f762-e3e8-4237-8993-572f194b8fe0.png');
                }}>{names[6]}</label> {/*경남*/}
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631051-75838840-96a7-4077-8c75-dfa32cf9b958.png');
                }}>{names[10]}</label> {/*대구*/}
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631048-3c9f127f-0618-4e7f-b538-abb195243d5d.png');
                }}>{names[12]}</label> {/*울산*/}
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631047-b884cd46-4ce2-4ff1-ab9e-a77ec81e6838.png');
                }}>{names[11]}</label> {/*부산*/}

            </div>
        </>
    );
}

export default Toggle;
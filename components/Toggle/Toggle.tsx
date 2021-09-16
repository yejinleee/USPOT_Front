import React, {FC,memo, useCallback, useMemo, useState} from 'react';

import './Toggle.css';
import Child from '@components/Category/child';
import Category from '@components/Category/category'

const gyeongi = ['가평', '광명', '연천','남양주','파주','동두천','하남','양평','고양','평택','수원','안양','오산','의정부']
const gangwon = ['강릉', '춘천', '정선','삼척','태백','동해','원주','횡성','철원','영동','평창','영월']

const chungnam = ['논산','계룡','공주','홍성','아산','서천','천안','예산']
const chungbuk = ['영동','단양','청주','서천','제천','증평','옥천','음성']
const jeonnam = ['곡성','광양','순천','나주','화순','고성','보성','목포','무안','장성','함평','여수']
const jeonbuk = ['군산','김제','김천','익산','전주','정읍','원주','임실']
const gyeongnam = ['함안','창원','밀양','진주','하동','김해','사천','양산']
const gyeonbuk = ['영덕','구미','예천','경주','경산','청도','남원','양산','봉화','영천','상주','군위','영주','포항','의성','문경','칠곡','영월','안동']
const seoul = ['홍대', '성수', '종로']
// !! 광역시 아직 안함, 서울 제외해야함

// interface Props {
//     city : string;
// }

// const Toggle : FC<Props> = ({ city }) => {
    
const Toggle =() =>{

    const [cate,setCate]=useState("안");

    const [seoultoggle, setSeoultoggle] = useState(false);
    const [gyeongitoggle, setGyeongitoggle] = useState(false);
    const [gangwontoggle, setGangwontoggle] = useState(false);
    const [pin_top, setPin_top] = useState('17%');
    const [pin_left, setPin_left] = useState('68%');

    const [selectedcity, setSelectedcity] = useState("");
    // city = selectedcity;

    const pin = "./images/pin.png"
    const [map, setMap] = useState("https://user-images.githubusercontent.com/63544044/132854633-87a1c788-d972-4375-96bb-eacc081ec93b.png");

    const gyeongiMouseover = (area: string) => {
        if (area === '광명') {
            console.log('!!!!"')
            setPin_left('\'15%\'')
            console.log(pin_left)
        }
    }
    console.log(pin_top)

    const seoul_list = seoul.map((v) => (<div id={v} key={v}>{v}<br/></div>));
    const gyeongi_list = gyeongi.map((v) => (<div id={v} key={v} onMouseOver={() => gyeongiMouseover(v)}>{v}</div>));
    const gangwon_list = gangwon.map((v) => (<div id={v} key={v}>{v}<br/></div>));

    // const onClickSeoul = useCallback( () => {
    //     setSeoultoggle(!seoultoggle); 이게 작동안함 ㅠㅠㅠㅠㅠㅠㅠ왜왜왜???
    //     console.log(seoultoggle);
    //     {!seoultoggle && setMap('https://user-images.githubusercontent.com/63544044/132631037-6b6a923a-1b62-4e5e-927a-f957fb568f54.png')}
    // },[]);

    return (
        <>
            <Category setCate= {setCate} />
            <p>{cate} 골랐음</p>
            <Child setSelectedcity={setSelectedcity} />
            {/*Child : 선택한 city넘겨줘서 연결되는 컴포넌트. 테스트용*/}

            <img src={map} className="map" alt="map"/>
            {/*<img src={pin} className="pin" alt="pin" style={{top : {pin_top}, left : {pin_left}}}/>*/}
            <img src={pin} className="pin" alt="pin" style={{top: pin_top, left: pin_left}}/>
            {/*!! 왜변수로 안들어가나요 style={top:'15%'} 이렇게 왜 안되유 ㅠㅠㅠ*/}

            <div className="district_toggle">
                <label className="district" onClick={() => {
                    setSeoultoggle(!seoultoggle)
                    setSelectedcity("seoul")
                    {!seoultoggle && setMap('https://user-images.githubusercontent.com/63544044/132631037-6b6a923a-1b62-4e5e-927a-f957fb568f54.png')}
                }}>서울</label>
                <div>{seoultoggle && seoul_list}</div>
                <label className="district" onClick={() => {
                    setGyeongitoggle(!gyeongitoggle);
                    !gyeongitoggle && setMap('https://user-images.githubusercontent.com/63544044/132631033-9d4b6c68-a18f-48f5-a7a9-f2da3468a899.png')
                }}>경기도</label>
                <div>{gyeongitoggle && gyeongi_list}</div>

                <label className="district" onClick={() => {
                    setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631035-ac204099-5480-4818-8afd-8163a4e6a55a.png');
                }}>강원도</label>
                <div>{gangwontoggle && gangwon_list}</div>

                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631039-1469d02f-562b-4328-bca2-4a0738b5d55f.png');
                }}>인천광역시</label>

                {/*이 아래부터는 지역리스트 토글 안만들어둠. 아직데이터없어서! 위에거도 그냥 아무지역이나 한거긴 하구*/}
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631025-fdc2acb4-2c7c-470a-8f17-9bb7eadd1adc.png');
                }}>충청북도</label>
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631030-7f92ec22-61c1-45c8-9600-722d1607fcf2.png');
                }}>충청남도</label>
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631044-64cdc1ff-2d25-4ed5-a9b5-532aecf5ce92.png');
                }}>대전광역시</label>
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631027-4fd07a2c-5adc-431c-bdfd-0252e7ccc881.png');
                }}>세종특별시</label>
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631056-3058f55a-b7da-48c3-9bdc-738f1a2bf574.png');
                }}>전라북도</label>
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631055-2b867230-c0d0-455e-84ac-aebe2e3d58f2.png');
                }}>전라남도</label>
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631052-6f73100b-4fc2-4d8f-bd75-d748faafd2ed.png');
                }}>광주광역시</label>
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631022-fba1b11e-4264-4fef-a36d-6818a3fe8d14.png');
                }}>경상북도</label>
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631061-94d8f762-e3e8-4237-8993-572f194b8fe0.png');
                }}>경상남도</label>
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631051-75838840-96a7-4077-8c75-dfa32cf9b958.png');
                }}>대구광역시</label>
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631048-3c9f127f-0618-4e7f-b538-abb195243d5d.png');
                }}>울산광역시</label>
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631047-b884cd46-4ce2-4ff1-ab9e-a77ec81e6838.png');
                }}>부산광역시</label>

            </div>
        </>
    );
}

export default Toggle;
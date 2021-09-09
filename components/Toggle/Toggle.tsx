import React, {memo, useMemo,useState} from 'react';
import './Toggle.css';

const Toggle =() => {

    const gyeongi = ['가평', '광명', '연천']
    const gangwon = ['강릉', '춘천', '정선']
    const seoul = ['홍대', '성수', '종로']
    const [gyeongitoggle, setGyeongitoggle] = useState(false);
    const [gangwontoggle, setGangwontoggle] = useState(false);
    const [seoultoggle, setSeoultoggle] = useState(false);

    const [selectedcity, setSelectedcity] = useState("");

    const gyeongi_list = gyeongi.map((v) => (<div id={v}>{v}</div>));
    const gangwon_list = () => {
        return (
            gangwon.map((v) => (<li id={v}>{v}<br/></li>))
        );
    }
    const seoul_list = () => {
        return (
            seoul.map((v) => (<li id={v}>{v}<br/></li>))
        );
    }
    const pin = "./images/pin.png"
    const [map,setMap] = useState("https://user-images.githubusercontent.com/63544044/132631054-f0f98cf9-a37a-486d-bed2-44108b247314.jpeg");

    return (
        <>
            <img src={map} className="map" alt="map"/>
            <img src={pin} className="pin" alt="pin"/>

            <div className="district_toggle">
                <label className="district" onClick={() => {
                    setSeoultoggle(!seoultoggle);
                    setSelectedcity("seoul");
                    setMap('https://user-images.githubusercontent.com/63544044/132631037-6b6a923a-1b62-4e5e-927a-f957fb568f54.png');
                }}>서울</label>
                <div>{seoultoggle && seoul_list()}</div>
                <label className="district" onClick={() => {
                    setGyeongitoggle(!gyeongitoggle);
                    setMap('https://user-images.githubusercontent.com/63544044/132631033-9d4b6c68-a18f-48f5-a7a9-f2da3468a899.png');
                }}>경기도</label>
                <div>{gyeongitoggle && gyeongi_list}</div>
                <label className="district" onClick={() => {
                    // setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631039-1469d02f-562b-4328-bca2-4a0738b5d55f.png');
                }}>인천광역시</label>
                <label className="district" onClick={() => {
                    setGangwontoggle(!gangwontoggle)
                    setMap('https://user-images.githubusercontent.com/63544044/132631035-ac204099-5480-4818-8afd-8163a4e6a55a.png');
                }}>강원도</label>
                <div>{gangwontoggle && gangwon_list()}</div>

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
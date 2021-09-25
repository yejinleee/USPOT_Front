import React, {createRef, FC, memo, useMemo, useRef, useState} from 'react';
import {useEffect} from "react";
// import "./styles.css";
import './Controller.css'

const Controller =() =>{
    const [selectedOrder,setSelectedOrder] = useState("");  //선택한 정렬기준 : popularity (or) distance
    const selectedDistance = useRef(0);

    const [selectedCate,setSelectedCate] = useState("");
    const selectedCategory = useRef("");
    const [value,onChange]=useState(1);

    const [checkedInputs, setCheckedInputs] = useState([]as any);

    const changeHandler = (checked:any, id:any) => {
        if (checked) {
            setCheckedInputs([...checkedInputs, id]);
        } else {
            // 체크 해제
            setCheckedInputs(checkedInputs.filter((el:any) => el !== id));
        }
    };

    // useEffect(()=>{
    //     const ele = document.querySelector('.buble');
    //     if (ele) {
    //         ele.style.left = `${Number(value / 200)}px`;
    //     }
    // })

    const clickPopularity=() =>{
        setSelectedOrder("popularity");
    }
    const clickDistance=()=>{
        setSelectedOrder("distance");
    }

    const [ inputStatus, setInputStatus ] = useState('')

    const handleClickRadioButton = (radioBtnName :any) => {
        setInputStatus(radioBtnName)
    }

    return (
        <>
            <div className="input_radio">
                <form>
                    <input type="radio" name="food" id="ipt1" className="c" value="치킨" checked/>
                    <label htmlFor="ip1t" className="ccc">치킨</label>
                    <input type="radio" name="food" id="ipt2" className="c" value="피자"/>
                    <label htmlFor="ipt2" className="ccc">피자</label>
                    <input type="radio" name="food" id="ipt3" className="c" value="짜장면"/>
                    <label htmlFor="ipt3" className="ccc">짜장</label>
                    <input type="radio" name="food" id="ipt4" className="c" value="짬뽕"/>
                    <label htmlFor="ipt4" className="ccc">짬뽕</label>
                </form>
            </div>
            {/*왜 두번선택을 해야 선택이되는지..*/}
            {/*렌더링 새로되면 날라감*/}



            {/*슬라이더*/}
            <div className="slider-parent">
                0
                <input type="range" min="1" max="20000" value={value}
                       // onChange={({ target: { value: radius } }) => {
                       //     onChange(radius);
                       // }}
                    // 이렇게가 jsx코든데 뭐 왜 tsx안바껴주냐고
                />
                20km
                <div className="buble">
                    {value}m
                </div>
            </div>
            <br />


            {/*인기순거리순*/}
            {/*selectedOrder를 바꾸는 함수를 만들어서 onClick에서 호출하면*/}
            {/*웹페이지 실행이 안됨. Toomanyrender 샬라샬라 오류 ;;*/}
            <div className="order">
                <button onClick={clickPopularity} className = {selectedOrder==="popularity" ? "selected" : "unselected"}>인기순</button>
                <button onClick={clickDistance} className = {selectedOrder==="distance" ? "selected" : "unselected"}>거리순</button>
            </div>
            {selectedOrder}



            {/*<div className = "category">*/}
            {/*    <input*/}
            {/*        id={"aaa"}*/}
            {/*        type="checkbox"*/}
            {/*        onChange={(e)=>{*/}
            {/*            changeHandler(e.currentTarget.checked, 'aaa')*/}
            {/*        }}*/}
            {/*        checked={checkedInputs.includes('aaa') ? true : false}*/}
            {/*    />*/}
            {/*    <input*/}
            {/*    id={"bb"}*/}
            {/*    type="checkbox"*/}
            {/*    onChange={(e)=>{*/}
            {/*        changeHandler(e.currentTarget.checked, 'bb')*/}
            {/*    }}*/}
            {/*    checked={checkedInputs.includes('bb') ? true : false}*/}
            {/*    />*/}
            {/*</div>*/}


            {/*<button onClick={() => {selectedCategory.current ="tour"}}>관광명소</button>*/}
            {/*<button onClick={() => {selectedCategory.current ="RES"}}>식당</button>*/}
            <div className="category">
                <button className = {selectedCate==="TOR" ? "selected" : "unselected"}>관광명소</button>
                <button className = {selectedCate==="RES" ? "selected" : "unselected"}>음식점</button>
                <button className = {selectedCate==="CAF" ? "selected" : "unselected"}>카페</button>
            </div>
            <br/>
            <br/>
            <br/>


            {/*샌드비*/}
            <ul>
                <li className = "icon_li custom-control">
                    <input type="checkbox" className="cate" id="cate_li" value="편의점" />
                    <label className="custom" htmlFor="cate_li">
                        <div className="cate_1">편의점</div>
                    </label>
                </li>
            </ul>

        </>
    )

};

export default Controller
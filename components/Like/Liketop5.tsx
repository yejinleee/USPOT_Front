import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { History, LocationState } from 'history';
import './Liketop5.css';

interface Props {
  top5name: any;
  top5placeid: any;
  history: History<LocationState>;
}

const Liketop5: FC<Props> = (props: Props) => {
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  // console.log('top5placeid',props.top5placeid);
  const [like0, setLike0] = useState(0); //초기0 누르면1 눌렀다 빼면 2 //처음렌더링대 false라 else문들어갈까봐
  const [like1, setLike1] = useState(0);
  const [like2, setLike2] = useState(0);
  const [like3, setLike3] = useState(0);
  const [like4, setLike4] = useState(0);

  const [apiplaceid, setApilaceid] = useState([] as any);

  useEffect(() => { //DB에 저장된 즐찾목록의 id들만 가져와서 apilistid 배열에 저장
    axios.get(`/api/myplace/findall/1`).then(async (response) => {
    // axios.get(`/api/myplace/findall/${memberid}`).then(async (response) => {
      /////////////////////////////////////이거 왜 memberid로 안될가요~???
      for (var i = 0; i < response.data.data.length; i++) {
        setApilaceid((prev: any) => [...prev, response.data.data[i].placeId]);
      }
    });
  }, []);
  console.log('apiplaceid',apiplaceid)

  function func_post(e: number) {
    var ethplaceid = props.top5placeid[e];
    console.log('즐겨찾기 할 id:', memberid, 'placeid', ethplaceid);

    if (memberid === 0) {
      alert('로그인하세욥');
      console.log(props.history);
      return props.history.push('/login');
    } else {
      axios
        .post(
          `/api/myplace/add/${memberid}/${props.top5placeid[e]}`,
          { memberid, ethplaceid },
          { withCredentials: true }, //post에선 3번째자리에 설정
        )
        .then(() => {
          console.log('넣어진 id: ', memberid, 'placeid', ethplaceid);
        })
        .catch((error) => {});
    }
  }
  function func_delete(e: number) {
    // var ethplaceid = top5placeid[e];
    console.log('즐겨찾기에서 지울 id: ', memberid, 'placeid', props.top5placeid[e]);

    axios
      .delete(`/api/myplace/deletebyplace/${memberid}/${props.top5placeid[e]}`)
      .then(() => {
        console.log('지워진 id: ', memberid, 'placeid', props.top5placeid[e]);
      })
      .catch((error) => {});
  }

  function heart(i:number) {

    if (i===0 && like0===0){
      return(
        <span className="tlike">{(apiplaceid.find((e: number) => e === props.top5placeid[i])) === props.top5placeid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===0 && like0!==0){
      console.log('0은???????????',like0)

      return(
          <span className="tlike">{like0 === 1 ? '💛' : '🤍'}</span>
        )
    }
    else if (i===1 && like1===0){

      return(
        <span className="tlike">{(apiplaceid.find((e: number) => e === props.top5placeid[i])) === props.top5placeid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===1 && like1!==0){
      return(
        <span className="tlike">{like1 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===2 && like2===0){
      return(
        <span className="tlike">{(apiplaceid.find((e: number) => e === props.top5placeid[i])) === props.top5placeid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===2 && like2!==0){
      return(
        <span className="tlike">{like2 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===3 && like3===0){
      return(
        <span className="tlike">{(apiplaceid.find((e: number) => e === props.top5placeid[i])) === props.top5placeid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===3 && like3!==0){
      return(
        <span className="tlike">{like3 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===4 && like4===0){
      return(
        <span className="tlike">{(apiplaceid.find((e: number) => e === props.top5placeid[i])) === props.top5placeid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===4 && like4!==0){
      return(
        <span className="tlike">{like4 === 1 ? '💛' : '🤍'}</span>
      )
    }
  } //heart
  function func(e: number) {
    var el;
    var i;
    var ethplaceid = props.top5placeid[e];
    if (e === 0) {
      // if (like0 === 0 || like0 === 2) {
      //   //처음 onClick때 setlike 한게 func에 반영 안되서 이렇게 해야할듯
      //   func_post(e);
      // } else if (like0 === 1) {
      //   func_delete(e);
      // }
      // // like0 === 1 ? setLike0(2) : setLike0(1);
      // // (apiplaceid.find((e:number)=>e===props.top5placeid[0]))===props.top5placeid[0] ? setLike0(1) : setLike0(0);

      // 처음상태 0, 누르면 1 빼면 2
      // DB에 있어서 색들어와있을때는 0
      // 눌렀는데 지금 0인상태면
      // console.log('filtered',apiplaceid);
      console.log('DB목록에 그값 있다면 그 값',(apiplaceid.find((i: number) => i === props.top5placeid[e])));
      console.log('id',(props.top5placeid[e]));
      console.log('불리언',(apiplaceid.find((e: number) => e === props.top5placeid[e])) === props.top5placeid[e]);

      if (like0===0){

        //0인ㅇ상태인데 DB에 있는거면
        if ((apiplaceid.find((i: number) => i === props.top5placeid[e])) === props.top5placeid[e]){
          console.log('ㄷ여기들어가');
          setLike0(2);
          func_delete(e);
          setApilaceid(apiplaceid.filter((el:number) => el !==props.top5placeid[e]));
        }
        else{
          console.log('아님여기냐ㅑㅑㅑ');
          setLike0(1);
          func_post(e);
        }
      }
      // if (like0===0){
      //   if ((apiplaceid.find((e: number) => e === props.top5placeid[e])) === props.top5placeid[e]){
      //     setLike0(2);
      //     console.log('22222222222222222222========',like0)
      //     func_delete(e);
      //     setApilaceid(apiplaceid.filter((el:number) => el !==props.top5placeid[e]));
      //   }
      //   else{
      //     setLike0(1);
      //     func_post(e);
      //   }
      // }
      else if (like0===1){
        setLike0(2);
        func_delete(e);
      }
      else if (like0===2){
        setLike0(1);
        func_post(e);
      }
    } else if (e === 1) {
      console.log('DB목록에 그값 있다면 그 값',(apiplaceid.find((i: number) => i === props.top5placeid[e])));
      console.log('id',(props.top5placeid[e]));
      console.log('불리언',(apiplaceid.find((e: number) => e === props.top5placeid[e])) === props.top5placeid[e]);
      if (like1===0){
        //0인ㅇ상태인데 DB에 있는거면
        if ((apiplaceid.find((i:number) => i === props.top5placeid[e])) === props.top5placeid[e]){
          setLike1(2);
          func_delete(e);
          setApilaceid(apiplaceid.filter((el:number) => el !==props.top5placeid[e]));
        }
        else{
          setLike1(1);
          func_post(e);
        }
      }
      else if (like1===1){
        setLike1(2);
        func_delete(e);
      }
      else if (like1===2){
        setLike1(1);
        func_post(e);
      }
    } else if (e === 2) {
      console.log('DB목록에 그값 있다면 그 값',(apiplaceid.find((i: number) => i === props.top5placeid[e])));
      console.log('id',(props.top5placeid[e]));
      console.log('불리언',(apiplaceid.find((e: number) => e === props.top5placeid[e])) === props.top5placeid[e]);
      // if (like2 === 0 || like2 === 2) {
      //   func_post(e);
      // } else if (like2 === 1) {
      //   func_delete(e);
      // }
      if (like2===0){
        if ((apiplaceid.find((i: number) => i === props.top5placeid[e])) === props.top5placeid[e]){
          setLike2(2);
          func_delete(e);
          setApilaceid(apiplaceid.filter((el:number) => el !==props.top5placeid[e]));
        }
        else{
          setLike2(1);
          func_post(e);
        }
      }
      else if (like2===1){
        setLike2(2);
        func_delete(e);
      }
      else if (like2===2){
        setLike2(1);
        func_post(e);
      }
    } else if (e === 3) {
      // if (like3 === 0 || like3 === 2) {
      //   func_post(e);
      // } else if (like3 === 1) {
      //   func_delete(e);
      // }
      if (like3===0){
        if ((apiplaceid.find((i: number) => i === props.top5placeid[e])) === props.top5placeid[e]){
          setLike3(2);
          func_delete(e);
          setApilaceid(apiplaceid.filter((el:number) => el !==props.top5placeid[e]));
        }
        else{
          setLike3(1);
          func_post(e);
        }
      }
      else if (like3===1){
        setLike3(2);
        func_delete(e);
      }
      else if (like3===2){
        setLike3(1);
        func_post(e);
      }
    } else if (e === 4) {
      // if (like4 === 0 || like4 === 2) {
      //   func_post(e);
      // } else if (like4 === 1) {
      //   func_delete(e);
      // }
      if (like4===0){
        if ((apiplaceid.find((i: number) => i === props.top5placeid[e])) === props.top5placeid[e]){
          setLike4(2);
          func_delete(e);
          setApilaceid(apiplaceid.filter((el:number) => el !==props.top5placeid[e]));
        }
        else{
          setLike4(1);
          func_post(e);
        }
      }
      else if (like4===1){
        setLike4(2);
        func_delete(e);
      }
      else if (like4===2){
        setLike4(1);
        func_post(e);
      }
    }
  } //func
  // console.log('2가 즐찾되어있는상태였는지',apiplaceid.find((e:number)=>e===2),(apiplaceid.find((e:number)=>e===props.top5placeid[0]))===props.top5placeid[0]); //즐찾한 장소의 id들중 2가 있다면 True
  // // // console.log(props.top5placeid[0])
  // // console.log('리턴밖',like0);
  // console.log(apiplaceid);
  return (
    <>
      <div style={{ position: 'relative' }}>
        <span>
          <ul id="top5">
            <li className="ticon_li custom-control">
              {like0}
              <input
                type="checkbox"
                className="tcate"
                id="tlistidx0"
                onClick={() => {
                  func(0);
                  // like1 === 1 ? setLike1(2) : setLike1(1);
                }}
                value="0"
              />
              <label className="tcustom" htmlFor="tlistidx0">
                {heart(0)}
                {/* DB에 있어서 색하트 인경우는 아직 like0가 0일테니까 버튼눌렀는데 0이면 2로 2면 1로 1이면 2로 바꾸면 되징않을까*/}
                {/*<span className="tlike">{like0 === 0 ? '💛' : '🤍'}</span>*/}
                {/*<span className="tlike">{(apiplaceid.find((e:number)=>e===props.top5placeid[0]))===props.top5placeid[0] ?  (like0 ===1 ? '💛' : '🤍') :(like0 ===1 ? '💛' : '🤍') }</span>*/}
                <span className="tlikeplace">{props.top5name[0]}</span>
              </label>
            </li>
            <li className="ticon_li custom-control">
              {like1}
              <input
                type="checkbox"
                className="tcate"
                id="tlistidx1"
                onClick={() => {
                  func(1);
                  // like1 === 1 ? setLike1(2) : setLike1(1);
                }}
                value="1"
              />
              <label className="tcustom" htmlFor="tlistidx1">
                {heart(1)}
                {/*<span className="tlike">{like1 === 1 ? '💛' : '🤍'}</span>*/}
                <span className="tlikeplace"> {props.top5name[1]}</span>
              </label>
            </li>
            <li className="ticon_li custom-control">
              <input
                type="checkbox"
                className="tcate"
                id="tlistidx2"
                onClick={() => {
                  func(2);
                  // like2 === 1 ? setLike2(2) : setLike2(1);
                }}
                value="2"
              />
              <label className="tcustom" htmlFor="tlistidx2">
                {heart(2)}
                {/*<span className="tlike">{like2 === 1 ? '💛' : '🤍'}</span>*/}
                <span className="tlikeplace"> {props.top5name[2]}</span>
              </label>
            </li>
            <li className="ticon_li custom-control">
              <input
                type="checkbox"
                className="tcate"
                id="tlistidx3"
                onClick={() => {
                  func(3);
                  // like3 === 1 ? setLike3(2) : setLike3(1);
                }}
                value="3"
              />
              {/*{func(3)}*/}
              <label className="tcustom" htmlFor="tlistidx3">
                {heart(3)}
                {/*<span className="tlike">{like3 === 1 ? '💛' : '🤍'}</span>*/}
                <span className="tlikeplace"> {props.top5name[3]}</span>
              </label>
            </li>
            <li className="ticon_li custom-control">
              <input
                type="checkbox"
                className="tcate"
                id="tlistidx4"
                onClick={() => {
                  func(4);
                  // like4 === 1 ? setLike4(2) : setLike4(1);
                }}
                value="4"
              />
              {/*{func(4)}*/}
              <label className="tcustom" htmlFor="tlistidx4">
                {heart(4)}
                {/*<span className="tlike">{like4 === 1 ? '💛' : '🤍'}</span>*/}
                <span className="tlikeplace"> {props.top5name[4]}</span>
              </label>
            </li>
          </ul>
        </span>
      </div>
    </>
  );
};

export default Liketop5;

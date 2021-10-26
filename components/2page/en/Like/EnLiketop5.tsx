import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { History, LocationState } from 'history';
import '@components/2page/Liketop5.css';
import { Link } from 'react-router-dom';

interface Props {
  top5name: any;
  top5placeid: any;
  placeurl: any;
  history: History<LocationState>;
}

const EnLiketop5: FC<Props> = (props: Props) => {
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

  const [dblikedlist, setDblikedlist] = useState([] as any);
  useEffect(() => { //DB에 저장된 즐찾목록의 id들만 가져와서 apilistid 배열에 저장
    axios.get(`/api/en/myplace/findall/${memberid}`)
      .then(async (response) => {
    // axios.get(`/api/myplace/findall/1`).then(async (response) => {
      for (var i = 0; i < response.data.data.length; i++) {
        setDblikedlist((prev: any) => [...prev, response.data.data[i].placeId]);
      }
    })
      .catch((error) => {});
  }, []);

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
          `/api/en/myplace/add/${memberid}/${props.top5placeid[e]}`,
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
      .delete(`/api/en/myplace/deletebyplace/${memberid}/${props.top5placeid[e]}`)
      .then(() => {
        console.log('지워진 id: ', memberid, 'placeid', props.top5placeid[e]);
      })
      .catch((error) => {});
  }

  function heart(i:number) {
    if (i===0 && like0===0){
      return(
        <span className="tlike">{(dblikedlist.find((e: number) => e === props.top5placeid[i])) === props.top5placeid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===0 && like0!==0){
      return(
          <span className="tlike">{like0 === 1 ? '💛' : '🤍'}</span>
        )
    }
    else if (i===1 && like1===0){
      return(
        <span className="tlike">{(dblikedlist.find((e: number) => e === props.top5placeid[i])) === props.top5placeid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===1 && like1!==0){
      return(
        <span className="tlike">{like1 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===2 && like2===0){
      return(
        <span className="tlike">{(dblikedlist.find((e: number) => e === props.top5placeid[i])) === props.top5placeid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===2 && like2!==0){
      return(
        <span className="tlike">{like2 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===3 && like3===0){
      return(
        <span className="tlike">{(dblikedlist.find((e: number) => e === props.top5placeid[i])) === props.top5placeid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===3 && like3!==0){
      return(
        <span className="tlike">{like3 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===4 && like4===0){
      return(
        <span className="tlike">{(dblikedlist.find((e: number) => e === props.top5placeid[i])) === props.top5placeid[i] ? '💛' : '🤍'}</span>
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
    if (e === 0) {
      // console.log('DB목록에 그값 있다면 그 값',(dblikedlist.find((i: number) => i === props.top5placeid[e])));
      // console.log('id',(props.top5placeid[e]));
      // console.log('불리언',(dblikedlist.find((e: number) => e === props.top5placeid[e])) === props.top5placeid[e]);
      if (like0===0){ //0인상태인데 DB에 있는거면
        if ((dblikedlist.find((i: number) => i === props.top5placeid[e])) === props.top5placeid[e]){
          setLike0(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.top5placeid[e]));
        }
        else{
          setLike0(1);
          func_post(e);
        }
      }
      else if (like0===1){
        setLike0(2);
        func_delete(e);
      }
      else if (like0===2){
        setLike0(1);
        func_post(e);
      }
    } else if (e === 1) {
      if (like1===0){
        if ((dblikedlist.find((i:number) => i === props.top5placeid[e])) === props.top5placeid[e]){
          setLike1(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.top5placeid[e]));
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
      if (like2===0){
        if ((dblikedlist.find((i: number) => i === props.top5placeid[e])) === props.top5placeid[e]){
          setLike2(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.top5placeid[e]));
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
      if (like3===0){
        if ((dblikedlist.find((i: number) => i === props.top5placeid[e])) === props.top5placeid[e]){
          setLike3(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.top5placeid[e]));
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
      if (like4===0){
        if ((dblikedlist.find((i: number) => i === props.top5placeid[e])) === props.top5placeid[e]){
          setLike4(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.top5placeid[e]));
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

  return (
    <>
      <div style={{ position: 'relative' }}>
        <span>
          <ul id="top5">
            <li className="ticon_li custom-control">
              <input
                type="checkbox"
                className="tcate"
                id="tlistidx0"
                onClick={() => {
                  func(0);
                }}
                value="0"
              />
              <label className="tcustom">
                <label htmlFor="tlistidx0">
                  {heart(0)}
                </label>
                <span className="tlikeplace" onClick={() => window.open(`${props.placeurl[0]}`, '_blank')}> {props.top5name[0]}</span>
              </label>
            </li>
            <li className="ticon_li custom-control">
              <input
                type="checkbox"
                className="tcate"
                id="tlistidx1"
                onClick={() => {
                  func(1);
                }}
                value="1"
              />
              <label className="tcustom">
                <label htmlFor="tlistidx1">
                  {heart(1)}
                </label>
                <span className="tlikeplace" onClick={() => window.open(`${props.placeurl[1]}`, '_blank')}> {props.top5name[1]}</span>
              </label>
            </li>
            <li className="ticon_li custom-control">
              <input
                type="checkbox"
                className="tcate"
                id="tlistidx2"
                onClick={() => {
                  func(2);
                }}
                value="2"
              />
              <label className="tcustom">
                <label htmlFor="tlistidx2">
                  {heart(2)}
                </label>
                <span className="tlikeplace" onClick={() => window.open(`${props.placeurl[2]}`, '_blank')}> {props.top5name[2]}</span>
              </label>
            </li>
            <li className="ticon_li custom-control">
              <input
                type="checkbox"
                className="tcate"
                id="tlistidx3"
                onClick={() => {
                  func(3);
                }}
                value="3"
              />
              <label className="tcustom">
                <label htmlFor="tlistidx3">
                  {heart(3)}
                </label>
                <span className="tlikeplace" onClick={() => window.open(`${props.placeurl[3]}`, '_blank')}> {props.top5name[3]}</span>
              </label>
            </li>
            <li className="ticon_li custom-control">
              <input
                type="checkbox"
                className="tcate"
                id="tlistidx4"
                onClick={() => {
                  func(4);
                }}
                value="4"
              />
              <label className="tcustom">
                <label htmlFor="tlistidx4">
                  {heart(4)}
                </label>
                <span className="tlikeplace" onClick={() => window.open(`${props.placeurl[4]}`, '_blank')}> {props.top5name[4]}</span>
              </label>
            </li>
          </ul>
        </span>
      </div>
    </>
  );
};

export default EnLiketop5;

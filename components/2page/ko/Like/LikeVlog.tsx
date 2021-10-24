import React, { FC, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './LikeVlog.css';
import { History, LocationState } from 'history';

interface Props {
  vlogplacename: any; //vlog에서 방문한 장소들 목록
  vlogpid: any; //vlog 유튜브번호 CKvzYfkgTyc이런거
  history: History<LocationState>;
  vlogplaceid:any;
}
const LikeVlog: FC<Props> = (props: Props) => {
  console.log('vlogplacename',props.vlogplacename);

  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  var len = props.vlogplacename.length;

  const [like0, setLike0] = useState(0); //초기0 누르면1 눌렀다 빼면 2 //처음렌더링대 false라 else문들어갈까봐
  const [like1, setLike1] = useState(0);
  const [like2, setLike2] = useState(0);
  const [like3, setLike3] = useState(0);
  const [like4, setLike4] = useState(0);
  const [like5, setLike5] = useState(0);
  const [like6, setLike6] = useState(0);
  const [like7, setLike7] = useState(0);
  const [like8, setLike8] = useState(0);
  const [like9, setLike9] = useState(0);
  const [like10, setLike10] = useState(0);
  const [like11, setLike11] = useState(0);
  const [like12, setLike12] = useState(0);
  const [like13, setLike13] = useState(0);
  const [like14, setLike14] = useState(0);
  const [like15, setLike15] = useState(0);
  const [like16, setLike16] = useState(0);
  const [like17, setLike17] = useState(0);
  const [like18, setLike18] = useState(0);
  const [like19, setLike19] = useState(0);

  console.log('vlogplaceid',props.vlogplaceid);

  const [dblikedlist, setDblikedlist] = useState([] as any);
  useEffect(() => { //DB에 저장된 즐찾목록의 id들만 가져와서 dblikedlist 배열에 저장
      axios.get(`/api/myplace/findall/1`).then(async (response) => {
    // axios.get(`/api/myplace/findall/${memberid}`).then(async (response) => {
      for (var i = 0; i < response.data.data.length; i++) {
        setDblikedlist((prev: any) => [...prev, response.data.data[i].placeId]);
      }
    });
  }, []);

  function func_post(e: number) {
    console.log('즐겨찾기 할 id:', memberid, 'placeid', ethplaceid);

    var ethplaceid = props.vlogplacename[e];
    if (memberid === 0) {
      alert('로그인하세욥');
      return props.history.push('/login');
    } else {
      axios
        .post(
          `/api/myplace/add/${memberid}/${props.vlogplacename[e]}`,
          { memberid, ethplaceid },
          { withCredentials: true }, //post에선 3번째자리에 설정
        )
        .then(() => {
          console.log('넣어진 id: ', memberid, 'placeid', ethplaceid);
        })
        .catch((error) => {});
      // axios
      //   .post(
      //     `/api/myplace/add/${memberid}/${props.vlogpid[e]}`,
      //     { memberid, ethplaceid },
      //     { withCredentials: true }, //post에선 3번째자리에 설정
      //   )
      //   .then(() => {
      //     console.log('넣어진 id: ', memberid, 'placeid', ethplaceid);
      //   })
      //   .catch((error) => {});
    }
  }
  function func_delete(e: number) {
    console.log('즐겨찾기에서 지울 id:', memberid, 'place명', props.vlogplacename[e]);

    axios
      .delete(`/api/myplace/deletebymyplace/${memberid}/${props.vlogplacename[e]}`)
      .then(() => {
        console.log('지워진 id: ', memberid, 'place명', props.vlogplacename[e]);
      })
      .catch((error) => {});
  }

  function heart(i:number){
    if (i===0 && like0===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===0 && like0!==0){
      return(
        <span className="like">{like0 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===1 && like1===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===1 && like1!==0){
      return(
        <span className="like">{like1 === 1 ? '💛' : '🤍'}</span>
      )
    }

    else if (i===2 && like2===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===2 && like2!==0){
      return(
        <span className="like">{like2 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===3 && like3===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===3 && like3!==0){
      return(
        <span className="like">{like3 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===4 && like4===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===4 && like4!==0){
      return(
        <span className="like">{like4 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===5 && like5===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===5 && like5!==0){
      return(
        <span className="like">{like5 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===6 && like6===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===6 && like6!==0){
      return(
        <span className="like">{like6 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===7 && like7===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===7 && like7!==0){
      return(
        <span className="like">{like7 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===8 && like8===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===8 && like8!==0){
      return(
        <span className="like">{like8 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===9 && like9===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===9 && like9!==0){
      return(
        <span className="like">{like9 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===10 && like10===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===10 && like10!==0){
      return(
        <span className="like">{like10 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===11 && like11===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===11 && like11!==0){
      return(
        <span className="like">{like11 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===12 && like12===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===12 && like12!==0){
      return(
        <span className="like">{like12 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===13 && like13===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===13 && like13!==0){
      return(
        <span className="like">{like13 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===14 && like14===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===14 && like14!==0){
      return(
        <span className="like">{like14 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===15 && like15===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===15 && like15!==0){
      return(
        <span className="like">{like15 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===16 && like16===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===16 && like16!==0){
      return(
        <span className="like">{like16 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===17 && like17===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===17 && like17!==0){
      return(
        <span className="like">{like17 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===18 && like18===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===18 && like18!==0){
      return(
        <span className="like">{like18 === 1 ? '💛' : '🤍'}</span>
      )
    }
    else if (i===19 && like19===0){
      return(
        <span className="like">{(dblikedlist.find((e: number) => e === props.vlogplaceid[i])) === props.vlogplaceid[i] ? '💛' : '🤍'}</span>
      )
    }
    else if (i===19 && like19!==0){
      return(
        <span className="like">{like19 === 1 ? '💛' : '🤍'}</span>
      )
    }
  }//heart

  function func(e: number) {
    var el;
    var i;
    if (e === 0) {
      if (like0===0){
        if ((dblikedlist.find((i: number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike0(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
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
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike1(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
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
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike2(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
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
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike3(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
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
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike4(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
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
    } else if (e === 5) {
      if (like5===0){
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike5(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
        }
        else{
          setLike5(1);
          func_post(e);
        }
      }
      else if (like5===1){
        setLike5(2);
        func_delete(e);
      }
      else if (like5===2){
        setLike5(1);
        func_post(e);
      }
    } else if (e === 6) {
      if (like6===0){
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike6(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
        }
        else{
          setLike6(1);
          func_post(e);
        }
      }
      else if (like6===1){
        setLike6(2);
        func_delete(e);
      }
      else if (like6===2){
        setLike6(1);
        func_post(e);
      }
    } else if (e === 7) {
      if (like7===0){
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike7(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
        }
        else{
          setLike7(1);
          func_post(e);
        }
      }
      else if (like7===1){
        setLike7(2);
        func_delete(e);
      }
      else if (like7===2){
        setLike7(1);
        func_post(e);
      }
    } else if (e === 8) {
      if (like8===0){
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike8(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
        }
        else{
          setLike8(1);
          func_post(e);
        }
      }
      else if (like8===1){
        setLike8(2);
        func_delete(e);
      }
      else if (like8===2){
        setLike8(1);
        func_post(e);
      }
    } else if (e === 9) {
      if (like9===0){
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike9(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
        }
        else{
          setLike9(1);
          func_post(e);
        }
      }
      else if (like9===1){
        setLike9(2);
        func_delete(e);
      }
      else if (like9===2){
        setLike9(1);
        func_post(e);
      }
    } else if (e === 10) {
      if (like10===0){
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike10(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
        }
        else{
          setLike10(1);
          func_post(e);
        }
      }
      else if (like10===1){
        setLike10(2);
        func_delete(e);
      }
      else if (like10===2){
        setLike10(1);
        func_post(e);
      }
    } else if (e === 11) {
      if (like11===0){
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike11(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
        }
        else{
          setLike11(1);
          func_post(e);
        }
      }
      else if (like11===1){
        setLike11(2);
        func_delete(e);
      }
      else if (like11===2){
        setLike11(1);
        func_post(e);
      }
    } else if (e === 12) {
      if (like12===0){
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike12(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
        }
        else{
          setLike12(1);
          func_post(e);
        }
      }
      else if (like12===1){
        setLike12(2);
        func_delete(e);
      }
      else if (like12===2){
        setLike12(1);
        func_post(e);
      }
    } else if (e === 13) {
      if (like13===0){
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike13(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
        }
        else{
          setLike13(1);
          func_post(e);
        }
      }
      else if (like13===1){
        setLike13(2);
        func_delete(e);
      }
      else if (like13===2){
        setLike13(1);
        func_post(e);
      }
    } else if (e === 14) {
      if (like14===0){
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike14(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
        }
        else{
          setLike14(1);
          func_post(e);
        }
      }
      else if (like14===1){
        setLike14(2);
        func_delete(e);
      }
      else if (like14===2){
        setLike14(1);
        func_post(e);
      }
    } else if (e === 15) {
      if (like15===0){
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike15(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
        }
        else{
          setLike15(1);
          func_post(e);
        }
      }
      else if (like15===1){
        setLike15(2);
        func_delete(e);
      }
      else if (like15===2){
        setLike15(1);
        func_post(e);
      }
    } else if (e === 16) {
      if (like16===0){
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike16(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
        }
        else{
          setLike16(1);
          func_post(e);
        }
      }
      else if (like16===1){
        setLike16(2);
        func_delete(e);
      }
      else if (like16===2){
        setLike16(1);
        func_post(e);
      }
    } else if (e === 17) {
      if (like17===0){
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike17(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
        }
        else{
          setLike17(1);
          func_post(e);
        }
      }
      else if (like17===1){
        setLike17(2);
        func_delete(e);
      }
      else if (like17===2){
        setLike17(1);
        func_post(e);
      }
    } else if (e === 18) {
      if (like18===0){
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike18(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
        }
        else{
          setLike18(1);
          func_post(e);
        }
      }
      else if (like18===1){
        setLike18(2);
        func_delete(e);
      }
      else if (like18===2){
        setLike18(1);
        func_post(e);
      }
    } else {
      if (like19===0){
        if ((dblikedlist.find((i:number) => i === props.vlogplaceid[e])) === props.vlogplaceid[e]){
          setLike19(2);
          func_delete(e);
          setDblikedlist(dblikedlist.filter((el:number) => el !==props.vlogplaceid[e]));
        }
        else{
          setLike19(1);
          func_post(e);
        }
      }
      else if (like19===1){
        setLike19(2);
        func_delete(e);
      }
      else if (like19===2){
        setLike19(1);
        func_post(e);
      }
    }
  } //func

  function makelike0() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx0"
            onClick={() => {
              func(0);
            }}
          />
          <label className="custom" htmlFor="listidx0">
            {heart(0)}
            <span className="likeplace">{props.vlogplacename[0]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike1() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx1"
            onClick={() => {
              func(1);
            }}
          />
          <label className="custom" htmlFor="listidx1">
            {heart(1)}
            <span className="likeplace">{props.vlogplacename[1]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike2() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx2"
            onClick={() => {
              func(2);
            }}
          />
          <label className="custom" htmlFor="listidx2">
            {heart(2)}
            <span className="likeplace">{props.vlogplacename[2]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike3() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx3"
            onClick={() => {
              func(3);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx3">
            {heart(3)}
            <span className="likeplace">{props.vlogplacename[3]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike4() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx4"
            onClick={() => {
              func(4);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx4">
            {heart(4)}
            <span className="likeplace">{props.vlogplacename[4]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike5() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx5"
            onClick={() => {
              func(5);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx5">
            {heart(5)}
            <span className="likeplace">{props.vlogplacename[5]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike6() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx6"
            onClick={() => {
              func(6);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx6">
            {heart(6)}
            <span className="likeplace">{props.vlogplacename[6]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike7() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx7"
            onClick={() => {
              func(7);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx7">
            {heart(7)}
            <span className="likeplace">{props.vlogplacename[7]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike8() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx8"
            onClick={() => {
              func(8);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx8">
            {heart(8)}
            <span className="likeplace">{props.vlogplacename[8]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike9() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx9"
            onClick={() => {
              func(9);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx9">
            {heart(9)}
            <span className="likeplace">{props.vlogplacename[9]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike10() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx10"
            onClick={() => {
              func(10);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx10">
            {heart(10)}
            <span className="likeplace">{props.vlogplacename[10]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike11() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx11"
            onClick={() => {
              func(11);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx11">
            {heart(11)}
            <span className="likeplace">{props.vlogplacename[11]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike12() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx12"
            onClick={() => {
              func(12);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx12">
            {heart(12)}
            <span className="likeplace">{props.vlogplacename[12]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike13() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx13"
            onClick={() => {
              func(13);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx13">
            {heart(13)}
            <span className="likeplace">{props.vlogplacename[13]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike14() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx14"
            onClick={() => {
              func(14);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx14">
            {heart(14)}
            <span className="likeplace">{props.vlogplacename[14]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike15() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx15"
            onClick={() => {
              func(15);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx15">
            {heart(15)}
            <span className="likeplace">{props.vlogplacename[15]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike16() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx16"
            onClick={() => {
              func(16);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx16">
            {heart(16)}
            <span className="likeplace">{props.vlogplacename[16]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike17() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx17"
            onClick={() => {
              func(17);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx17">
            {heart(17)}
            <span className="likeplace">{props.vlogplacename[17]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike18() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx18"
            onClick={() => {
              func(18);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx18">
            {heart(18)}
            <span className="likeplace">{props.vlogplacename[18]}</span>
          </label>
        </li>
      </>
    );
  }
  function makelike19() {
    return (
      <>
        <li className="icon_li custom-control">
          <input
            type="checkbox"
            className="cate"
            id="listidx19"
            onClick={() => {
              func(19);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx19">
            {heart(19)}
            <span className="likeplace">{props.vlogplacename[19]}</span>
          </label>
        </li>
      </>
    );
  }
  function make() {
    //웹페이지에 표시할 태그들. return에서 호출
    if (len === 1) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">{makelike0()}</ul>
            </span>
          </div>
        </>
      );
    } else if (len === 2) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 3) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 4) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 5) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
                {makelike4()}
                {makelike5()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 6) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
                {makelike4()}
                {makelike5()}
                {makelike6()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 7) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
                {makelike4()}
                {makelike5()}
                {makelike6()}
                {makelike7()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 8) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
                {makelike4()}
                {makelike5()}
                {makelike6()}
                {makelike7()}
                {makelike8()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 9) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
                {makelike4()}
                {makelike5()}
                {makelike6()}
                {makelike7()}
                {makelike8()}
                {makelike9()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 10) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
                {makelike4()}
                {makelike5()}
                {makelike6()}
                {makelike7()}
                {makelike8()}
                {makelike9()}
                {makelike10()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 11) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
                {makelike4()}
                {makelike5()}
                {makelike6()}
                {makelike7()}
                {makelike8()}
                {makelike9()}
                {makelike10()}
                {makelike11()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 12) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
                {makelike4()}
                {makelike5()}
                {makelike6()}
                {makelike7()}
                {makelike8()}
                {makelike9()}
                {makelike10()}
                {makelike11()}
                {makelike12()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 13) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
                {makelike4()}
                {makelike5()}
                {makelike6()}
                {makelike7()}
                {makelike8()}
                {makelike9()}
                {makelike10()}
                {makelike11()}
                {makelike12()}
                {makelike13()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 14) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
                {makelike4()}
                {makelike5()}
                {makelike6()}
                {makelike7()}
                {makelike8()}
                {makelike9()}
                {makelike10()}
                {makelike11()}
                {makelike12()}
                {makelike13()}
                {makelike14()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 15) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
                {makelike4()}
                {makelike5()}
                {makelike6()}
                {makelike7()}
                {makelike8()}
                {makelike9()}
                {makelike10()}
                {makelike11()}
                {makelike12()}
                {makelike13()}
                {makelike14()}
                {makelike15()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 16) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
                {makelike4()}
                {makelike5()}
                {makelike6()}
                {makelike7()}
                {makelike8()}
                {makelike9()}
                {makelike10()}
                {makelike11()}
                {makelike12()}
                {makelike13()}
                {makelike14()}
                {makelike15()}
                {makelike16()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 17) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
                {makelike4()}
                {makelike5()}
                {makelike6()}
                {makelike7()}
                {makelike8()}
                {makelike9()}
                {makelike10()}
                {makelike11()}
                {makelike12()}
                {makelike13()}
                {makelike14()}
                {makelike15()}
                {makelike16()}
                {makelike17()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 18) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
                {makelike4()}
                {makelike5()}
                {makelike6()}
                {makelike7()}
                {makelike8()}
                {makelike9()}
                {makelike10()}
                {makelike11()}
                {makelike12()}
                {makelike13()}
                {makelike14()}
                {makelike15()}
                {makelike16()}
                {makelike17()}
                {makelike18()}
              </ul>
            </span>
          </div>
        </>
      );
    } else if (len === 19) {
      return (
        <>
          <div style={{ position: 'relative' }}>
            <span>
              <ul id="vlog">
                {makelike0()}
                {makelike1()}
                {makelike2()}
                {makelike3()}
                {makelike4()}
                {makelike5()}
                {makelike6()}
                {makelike7()}
                {makelike8()}
                {makelike9()}
                {makelike10()}
                {makelike11()}
                {makelike12()}
                {makelike13()}
                {makelike14()}
                {makelike15()}
                {makelike16()}
                {makelike17()}
                {makelike18()}
                {makelike19()}
              </ul>
            </span>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  }

  return <>{make()}</>;
};

export default LikeVlog;
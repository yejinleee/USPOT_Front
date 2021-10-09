import axios from 'axios';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import useSWR from 'swr';
import useInput from '@pages/Signup/useinput';
import fetcher from '@utils/fetcher';
import './Like.css'

interface Props {
  // top5data: any;
  top5name: any;
  top5placeid:any;
}

const Like :FC<Props> = ({children,top5name, top5placeid}) => {
  // const {data,error,revalidate} = useSWR('/api/savemember',fetcher); //로그인후에 데이터를 전해줄 api //유저정보가 data에 담길 것임
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [memberid, setMemberid]=useState(0);
  const [placeid, setPlaceid]=useState(0);

  const onSubmit = useCallback(
    (idx,placeid) => {
      // e.preventDefault();
      // setLogInError(false);
      // console.log("cc")

      console.log('누른거 탑몇:', idx,'placdid:',placeid);

      {/*
      멤버아이디랑 하트누른 장소아이디를 api에 보내는거
      1. API 주소 이게 맞나?
      2. 멤버 아이디는 로그인할때 뜨는 id : 910348495 막이런긴 숫자
      3. 플레이스아이디는 어디에서 가져와? http://localhost:8080/api/place/findtop5/1/1 여기 api 봐도 key값 중에 placeid 없는데... 한광공 장소들에선??
      4. 이것들 해결되면 post 되는지 확인

      하트 누르는거 노답
      1. top5일떈 5개 노가다 만든다 쳐도. vlog밑에 장소거나 한광공에선 몇개일지 모르는데 동적으로 해야하는데 어떡하지. 젤문제 해결하고싶네유 편안하게 , , ,
      2. onCLick에 여러가지이벤트하려면 다 함수여야 하는것 같다.

      */}


      // api보내는코드 위에 문제해결하면서 고치고 활성화
      // axios
      //   .post(
      //     `/api/myplace/add/${memberid}/${e}`,
      //     { memberid, e },
      //     {withCredentials:true} //post에선 3번째자리에 설정
      //   )
      //   .then(() => {
      //     // revalidate();
      //   })
      //   .catch((error) => {
      //     setLogInError(error.response?.data?.statusCode === 401);
      //   });
    },
    [memberid],
    //[memberid,idx]
    //왜 idx에 빨간..
  );



  const [like0,setLike0] = useState(0); //초기0 누르면1 눌렀다 빼면 2 //처음렌더링대 false라 else문들어갈까봐
  const [like1,setLike1] = useState(0);
  const [like2,setLike2] = useState(0);
  const [like3,setLike3] = useState(0);
  const [like4,setLike4] = useState(0);
  // const [likearray, setLikearray]=useState([0,0,0,0,0]);
  //배열로 어떻게 하는거지
  console.log('처음 like값',like0)

  function func_post(e:number){
    var ethplaceid = top5placeid[e];
    console.log('즐겨찾기 할 id: ',memberid, 'placeid',ethplaceid);

    // axios.post(
    //     `/api/myplace/add/${memberid}/${top5placeid[e]}`,
    //     { memberid, ethplaceid },
    //     {withCredentials:true} //post에선 3번째자리에 설정
    //   )
    //   .then(() => {
    //     console.log('넣을 id: ',memberid, 'placeid',ethplaceid);
    //   })
    //   .catch((error) => {
    //     setLogInError(error.response?.data?.statusCode === 401);
    //   });
  }
  function func_delete(e:number){
    var ethplaceid = top5placeid[e];
    console.log('즐겨찾기에서 지울 id: ',memberid, 'placeid',ethplaceid);

    // axios.delete(
    //     `/api/myplace/deletebyplace/${memberid}/${top5placeid[e]}`)
    //   .then(() => {
    //     console.log('넣을 id: ',memberid, 'placeid',ethplaceid);
    //   })
    //   .catch((error) => {
    //     setLogInError(error.response?.data?.statusCode === 401);
    //   });
  }

  function func_like0(e:number){
    console.log('전',like0);
    like0===1? setLike0(2):setLike0(1);
    console.log('후',like0);
  }
  function func1(e:number) {   //onCLick이벤트 여러개이려면 함수여야해서
    var ethplaceid = top5placeid[e];

    //함수화할랬더니
    //
    // // var [iscolored,setIscolored]=useState(false);
    // var iscolored=false;
    //
    // if (e===0){
    //   console.log('l0 :',like0)
    //   console.log('0번',iscolored)
    //   like0===1? iscolored=true : iscolored=false;
    //   // setIscolored(true):setIscolored(false);
    // }
    // else if (e===1){
    //   like1===1? iscolored=true : iscolored=false;
    //
    //   // like1===1? setIscolored(true):setIscolored(false);
    // }
    // else if (e===2){
    //   like2===1? iscolored=true : iscolored=false;
    //   // like2===1? setIscolored(true):setIscolored(false);
    // }
    // else if (e===3){
    //   like3===1? iscolored=true : iscolored=false;
    //
    //   // like3===1? setIscolored(true):setIscolored(false);
    // }
    // else if (e===4){
    //   like4===1? iscolored=true : iscolored=false;
    //
    //   // like4===1? setIscolored(true):setIscolored(false);
    // }
    //
    // if (iscolored){
    //   console.log('즐겨찾기 할 id: ',memberid, 'placeid',placeid);

    if (e===0){

      if(like0===0 || like0===2) {    //처음 onClick때 setlike 한게 func1에 반영 안되서 이렇게 해야할듯
        func_post(e);
      }
      else if (like0===1){
        func_delete(e);
      }
    }
    else if (e===1){
      if(like1===0 || like1===2) {
        func_post(e);
      }
      else if (like1===1){
        func_delete(e);
      }
    }
    else if (e===2){
      if(like2===0 || like2===2) {
        func_post(e);
      }
      else if (like2===1){
        func_delete(e);
      }
    }
    else if (e===3){
      if(like3===0 || like3===2) {
        func_post(e);
      }
      else if (like3===1){
        func_delete(e);
      }
    }
    else if (e===4){
      if(like4===0 || like4===2) {
        func_post(e);
      }
      else if (like4===1){
        func_delete(e);
      }
    }


    // if (e===0){
    //   if (like0===1) {
    //     console.log('like0 :',like0);
    //     console.log('즐겨찾기 할 id: ',memberid, 'placeid',placeid);
    //
    //     // axios.post(
    //     //     `/api/myplace/add/${memberid}/${top5placeid[0]}`,
    //     //     { memberid, placeid },
    //     //     {withCredentials:true} //post에선 3번째자리에 설정
    //     //   )
    //     //   .then(() => {
    //     //     console.log('지울 id: ',memberid, 'placeid',placeid);
    //     //   })
    //     //   .catch((error) => {
    //     //     setLogInError(error.response?.data?.statusCode === 401);
    //     //   });
    //   } else if (like0===2){
    //     console.log('즐겨찾기에서 지울 id: ',memberid, 'placeid',placeid);
    //     // axios.delete(
    //     //     `/api/myplace/deletebyplace/${memberid}/${top5placeid[1]}`)
    //     //   .then(() => {
    //     //     // revalidate();
    //     //   })
    //     //   .catch((error) => {
    //     //     setLogInError(error.response?.data?.statusCode === 401);
    //     //   });
    //   }
    // }
    // else  if (e===1){
    //   if (like1===1) {
    //     console.log('like0 :',like0);
    //     console.log('즐겨찾기 할 id: ',memberid, 'placeid',placeid);
    //
    //     // axios.post(
    //     //     `/api/myplace/add/${memberid}/${top5placeid[0]}`,
    //     //     { memberid, placeid },
    //     //     {withCredentials:true} //post에선 3번째자리에 설정
    //     //   )
    //     //   .then(() => {
    //     //     console.log('지울 id: ',memberid, 'placeid',placeid);
    //     //   })
    //     //   .catch((error) => {
    //     //     setLogInError(error.response?.data?.statusCode === 401);
    //     //   });
    //   } else if (like0===2){
    //     console.log('즐겨찾기에서 지울 id: ',memberid, 'placeid',placeid);
    //     // axios.delete(
    //     //     `/api/myplace/deletebyplace/${memberid}/${top5placeid[1]}`)
    //     //   .then(() => {
    //     //     // revalidate();
    //     //   })
    //     //   .catch((error) => {
    //     //     setLogInError(error.response?.data?.statusCode === 401);
    //     //   });
    //   }
    // }

  } //func
  return (
    <>
      <div style={{ position: 'relative' }}>
        <span style={{ position: 'absolute'}}>
          <ul>
            <li className = "icon_li custom-control">
                <input type="checkbox" className="cate" id="listidx0" onClick={()=> {func1(0); like0===1 ? setLike0(2):setLike0(1)}} value="0" />
              {/*{func1(0)}*/}
              <label className="custom" htmlFor="listidx0">
                <span id="result">{like0 ===1 ?'💛' : '🤍'}</span>
                <span>{top5name[0]}</span>
              </label>
            </li>
            <li className = "icon_li custom-control">
                <input type="checkbox" className="cate" id="listidx1" onClick={()=> {func1(1); like1===1 ? setLike1(2):setLike1(1)}} value="1" />
              {/*{func1(1)}*/}
              <label className="custom" htmlFor="listidx1">
                    <span id="result">{like1===1 ?'💛' : '🤍'}</span>
                    <span> {top5name[1]}</span>
                </label>
            </li>
            <li className = "icon_li custom-control">
                <input type="checkbox" className="cate" id="listidx2" onClick={()=> {like2===1 ? setLike2(2):setLike2(1)}} value="2" />
              {func1(2)}
              <label className="custom" htmlFor="listidx2">
                    <span id="result">{like2===1 ?'💛' : '🤍'}</span>
                    <span> {top5name[2]}</span>
                </label>
            </li>
            <li className = "icon_li custom-control">
                <input type="checkbox" className="cate" id="listidx3" onClick={()=> {like3===1 ? setLike3(2):setLike3(1)}} value="3" />
              {func1(3)}
              <label className="custom" htmlFor="listidx3">
                    <span id="result">{like3===1 ?'💛' : '🤍'}</span>
                    <span> {top5name[3]}</span>
                </label>
            </li>
            <li className = "icon_li custom-control">
                <input type="checkbox" className="cate" id="listidx4" onClick={()=> {like4===1 ? setLike4(2):setLike4(1)}} value="4" />
              {func1(4)}
              <label className="custom" htmlFor="listidx4">
                    <span id="result">{like4===1 ?'💛' : '🤍'}</span>
                    <span> {top5name[4]}</span>
                </label>
            </li>
          </ul>

        </span>
      </div>

    </>
  );
};

export default Like;
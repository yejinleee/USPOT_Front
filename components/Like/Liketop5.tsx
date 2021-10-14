import axios from 'axios';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import useSWR from 'swr';
import useInput from '@pages/Signup/useinput';
import fetcher from '@utils/fetcher';
import './Liketop5.css';

interface Props {
  top5name: any;
  top5placeid: any;
}

const Liketop5: FC<Props> = ({ children, top5name, top5placeid }) => {

  var local = localStorage.getItem('memberid');
  try{
    var memberid = Number(local.split("")[1]);
  }
  catch{
    var memberid=0;
  }
  if (memberid===0){
    // console.log("예외");
      //////////////////////////////////////////////////////////////////////////////////////////////////////
  }

  const [like0, setLike0] = useState(0); //초기0 누르면1 눌렀다 빼면 2 //처음렌더링대 false라 else문들어갈까봐
  const [like1, setLike1] = useState(0);
  const [like2, setLike2] = useState(0);
  const [like3, setLike3] = useState(0);
  const [like4, setLike4] = useState(0);

  function func_post(e: number) {
    var ethplaceid = top5placeid[e];
    console.log('즐겨찾기 할 id:', memberid, 'placeid', ethplaceid);

    axios.post(
        `/api/myplace/add/${memberid}/${top5placeid[e]}`,
        { memberid, ethplaceid },
        {withCredentials:true} //post에선 3번째자리에 설정
      )
      .then(() => {
        console.log('넣어진 id: ',memberid, 'placeid',ethplaceid);
      })
      .catch((error) => {
        alert('로그인하세욥');
      });
  }
  function func_delete(e: number) {
    // var ethplaceid = top5placeid[e];
    console.log('즐겨찾기에서 지울 id: ', memberid, 'placeid', top5placeid[e]);

    axios.delete(
        `/api/myplace/deletebyplace/${memberid}/${top5placeid[e]}`)
      .then(() => {
        console.log('지워진 id: ',memberid, 'placeid',top5placeid[e]);
      })
      .catch((error) => {
      });
  }

  function func(e: number) {
    //onCLick이벤트 여러개이려면 함수여야해서
    var ethplaceid = top5placeid[e];

    if (e === 0) {
      if (like0 === 0 || like0 === 2) {
        //처음 onClick때 setlike 한게 func에 반영 안되서 이렇게 해야할듯
        func_post(e);
      } else if (like0 === 1) {
        func_delete(e);
      }
    } else if (e === 1) {
      if (like1 === 0 || like1 === 2) {
        func_post(e);
      } else if (like1 === 1) {
        func_delete(e);
      }
    } else if (e === 2) {
      if (like2 === 0 || like2 === 2) {
        func_post(e);
      } else if (like2 === 1) {
        func_delete(e);
      }
    } else if (e === 3) {
      if (like3 === 0 || like3 === 2) {
        func_post(e);
      } else if (like3 === 1) {
        func_delete(e);
      }
    } else if (e === 4) {
      if (like4 === 0 || like4 === 2) {
        func_post(e);
      } else if (like4 === 1) {
        func_delete(e);
      }
    }
  } //func

  return (
    <>
      <div style={{ position: 'relative' }}>
        <span>
          <ul>
            <li className="icon_li custom-control">
              <input
                type="checkbox"
                className="cate"
                id="listidx0"
                onClick={() => {
                  func(0);
                  like0 === 1 ? setLike0(2) : setLike0(1);
                }}
                value="0"
              />
              {/*{func(0)}*/}
              <label className="custom" htmlFor="listidx0">
                <span className="like">{like0 === 1 ? '💛' : '🤍'}</span>
                <span className="likeplace">{top5name[0]}</span>
              </label>
            </li>
            <li className="icon_li custom-control">
              <input
                type="checkbox"
                className="cate"
                id="listidx1"
                onClick={() => {
                  func(1);
                  like1 === 1 ? setLike1(2) : setLike1(1);
                }}
                value="1"
              />
              {/*{func(1)}*/}
              <label className="custom" htmlFor="listidx1">
                <span className="like">{like1 === 1 ? '💛' : '🤍'}</span>
                <span className="likeplace"> {top5name[1]}</span>
              </label>
            </li>
            <li className="icon_li custom-control">
              <input
                type="checkbox"
                className="cate"
                id="listidx2"
                onClick={() => {
                  func(2);
                  like2 === 1 ? setLike2(2) : setLike2(1);
                }}
                value="2"
              />
              {/*{func(2)}*/}
              <label className="custom" htmlFor="listidx2">
                <span className="like">{like2 === 1 ? '💛' : '🤍'}</span>
                <span className="likeplace"> {top5name[2]}</span>
              </label>
            </li>
            <li className="icon_li custom-control">
              <input
                type="checkbox"
                className="cate"
                id="listidx3"
                onClick={() => {
                  func(3);
                  like3 === 1 ? setLike3(2) : setLike3(1);
                }}
                value="3"
              />
              {/*{func(3)}*/}
              <label className="custom" htmlFor="listidx3">
                <span className="like">{like3 === 1 ? '💛' : '🤍'}</span>
                <span className="likeplace"> {top5name[3]}</span>
              </label>
            </li>
            <li className="icon_li custom-control">
              <input
                type="checkbox"
                className="cate"
                id="listidx4"
                onClick={() => {
                  func(4);
                  like4 === 1 ? setLike4(2) : setLike4(1);
                }}
                value="4"
              />
              {/*{func(4)}*/}
              <label className="custom" htmlFor="listidx4">
                <span className="like">{like4 === 1 ? '💛' : '🤍'}</span>
                <span className="likeplace"> {top5name[4]}</span>
              </label>
            </li>
          </ul>
        </span>
      </div>
    </>
  );
};

export default Liketop5;

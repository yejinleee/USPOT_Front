import React, { FC, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './LikeVlog.css';
import { History, LocationState } from 'history';

interface Props {
  vlogname: any;
  vlogpid: any;
  history: History<LocationState>;
}

const LikeVlog: FC<Props> = (props: Props) => {
  console.log(props.vlogname);
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  var len = props.vlogname.length;

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

  function func_post(e: number) {
    var ethplaceid = props.vlogpid[e];
    console.log('즐겨찾기 할 id:', memberid, 'placeid', ethplaceid);

    if (memberid === 0) {
      alert('로그인하세욥');
      console.log(props.history);
      return props.history.push('/login');
    } else {
      axios
        .post(
          `/api/myplace/add/${memberid}/${props.vlogpid[e]}`,
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
    console.log('즐겨찾기에서 지울 id:', memberid, 'place명', props.vlogname[e]);

    axios
      .delete(`/api/myplace/deletebymyplace/${memberid}/${props.vlogname[e]}`)
      .then(() => {
        console.log('지워진 id: ', memberid, 'place명', props.vlogname[e]);
      })
      .catch((error) => {});
  }
  function func(e: number) {
    if (e === 0) {
      if (like0 === 0 || like0 === 2) {
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
    } else if (e === 5) {
      if (like5 === 0 || like5 === 2) {
        func_post(e);
      } else if (like5 === 1) {
        func_delete(e);
      }
    } else if (e === 6) {
      if (like6 === 0 || like6 === 2) {
        func_post(e);
      } else if (like6 === 1) {
        func_delete(e);
      }
    } else if (e === 7) {
      if (like7 === 0 || like7 === 2) {
        func_post(e);
      } else if (like7 === 1) {
        func_delete(e);
      }
    } else if (e === 8) {
      if (like8 === 0 || like8 === 2) {
        func_post(e);
      } else if (like8 === 1) {
        func_delete(e);
      }
    } else if (e === 9) {
      if (like9 === 0 || like9 === 2) {
        func_post(e);
      } else if (like9 === 1) {
        func_delete(e);
      }
    } else if (e === 10) {
      if (like10 === 0 || like10 === 2) {
        func_post(e);
      } else if (like10 === 1) {
        func_delete(e);
      }
    } else if (e === 11) {
      if (like11 === 0 || like11 === 2) {
        func_post(e);
      } else if (like11 === 1) {
        func_delete(e);
      }
    } else if (e === 12) {
      if (like12 === 0 || like12 === 2) {
        func_post(e);
      } else if (like12 === 1) {
        func_delete(e);
      }
    } else if (e === 13) {
      if (like13 === 0 || like13 === 2) {
        func_post(e);
      } else if (like13 === 1) {
        func_delete(e);
      }
    } else if (e === 14) {
      if (like14 === 0 || like14 === 2) {
        func_post(e);
      } else if (like14 === 1) {
        func_delete(e);
      }
    } else if (e === 15) {
      if (like15 === 0 || like15 === 2) {
        func_post(e);
      } else if (like15 === 1) {
        func_delete(e);
      }
    } else if (e === 16) {
      if (like16 === 0 || like16 === 2) {
        func_post(e);
      } else if (like16 === 1) {
        func_delete(e);
      }
    } else if (e === 17) {
      if (like17 === 0 || like17 === 2) {
        func_post(e);
      } else if (like17 === 1) {
        func_delete(e);
      }
    } else if (e === 18) {
      if (like18 === 0 || like18 === 2) {
        func_post(e);
      } else if (like18 === 1) {
        func_delete(e);
      }
    } else {
      if (like19 === 0 || like19 === 2) {
        func_post(e);
      } else if (like19 === 1) {
        func_delete(e);
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
              like0 === 1 ? setLike0(2) : setLike0(1);
            }}
          />
          <label className="custom" htmlFor="listidx0">
            <span className="like">{like0 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[0]}</span>
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
              like1 === 1 ? setLike1(2) : setLike1(1);
            }}
          />
          <label className="custom" htmlFor="listidx1">
            <span className="like">{like1 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[1]}</span>
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
              like2 === 1 ? setLike2(2) : setLike2(1);
            }}
          />
          <label className="custom" htmlFor="listidx2">
            <span className="like">{like2 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[2]}</span>
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
              like3 === 1 ? setLike3(2) : setLike3(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx3">
            <span className="like">{like3 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[3]}</span>
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
              like4 === 1 ? setLike4(2) : setLike4(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx4">
            <span className="like">{like4 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[4]}</span>
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
              like5 === 1 ? setLike5(2) : setLike5(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx5">
            <span className="like">{like5 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[5]}</span>
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
              like6 === 1 ? setLike6(2) : setLike6(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx6">
            <span className="like">{like4 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[6]}</span>
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
              like7 === 1 ? setLike7(2) : setLike7(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx7">
            <span className="like">{like7 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[7]}</span>
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
              like8 === 1 ? setLike8(2) : setLike8(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx8">
            <span className="like">{like8 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[8]}</span>
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
              like9 === 1 ? setLike9(2) : setLike9(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx9">
            <span className="like">{like9 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[9]}</span>
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
              like10 === 1 ? setLike10(2) : setLike10(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx10">
            <span className="like">{like10 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[10]}</span>
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
              like11 === 1 ? setLike11(2) : setLike11(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx11">
            <span className="like">{like11 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[11]}</span>
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
              like12 === 1 ? setLike12(2) : setLike12(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx12">
            <span className="like">{like12 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[12]}</span>
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
              like13 === 1 ? setLike13(2) : setLike13(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx13">
            <span className="like">{like13 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[13]}</span>
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
              like14 === 1 ? setLike14(2) : setLike14(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx14">
            <span className="like">{like14 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[14]}</span>
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
              like15 === 1 ? setLike15(2) : setLike15(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx15">
            <span className="like">{like15 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[15]}</span>
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
              like16 === 1 ? setLike16(2) : setLike16(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx16">
            <span className="like">{like16 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[16]}</span>
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
              like17 === 1 ? setLike17(2) : setLike17(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx17">
            <span className="like">{like17 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[17]}</span>
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
              like18 === 1 ? setLike18(2) : setLike18(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx18">
            <span className="like">{like18 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[18]}</span>
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
              like19 === 1 ? setLike19(2) : setLike19(1);
            }}
            value="0"
          />
          <label className="custom" htmlFor="listidx19">
            <span className="like">{like19 === 1 ? '💛' : '🤍'}</span>
            <span className="likeplace">{props.vlogname[19]}</span>
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

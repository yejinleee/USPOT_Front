import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import HomePage from '@pages/Home/Mainhome';
import Mypage from '@pages/Mypage/Mypage';
import { useSelector, useDispatch } from 'react-redux';
import { loginCheck } from './changeLoginStatus';

const OAuth2RedirectHandler = () => {
  let code = new URL(window.location.href).searchParams.get('code');
  const url = '/api/oauth2/authorization/kakao';
  const [response, setResponse] = useState(false);
  const [localStoragetokenCheck, setLocalStoragetokenCheck] = useState();
  // const dispatch = useDispatch();
  axios.get(url, { params: { code } }).then((res) => {
    console.log(res);
    if (res.request.statsText === 'OK') {
      setResponse(true);
      setLocalStoragetokenCheck(res.request.data.accesstoken);
      console.log(res.request.data.accesstoken);
    } else {
      setResponse(false);
    }
  });

  // const isLogin = useSelector((state: any) => state.changeLoginStatus.isLogin);
  // console.log('isLogin', isLogin);
  // useEffect(() => {
  //   if (localStoragetokenCheck) {
  //     // 로그인유지를 위해서 isLogin을 true로 변경해줘야한다.
  //     dispatch(loginCheck());
  //   }
  // }, []);

  return (
    <>
      <div>hh</div>
      {/* <Router>
        <Switch>
          {isLogin ? (
            <Route path="/mypage" component={Mypage}></Route>
          ) : (
            <Route path="/home" exact component={HomePage}></Route>
          )}
        </Switch>
      </Router> */}
    </>
  );
};

export default OAuth2RedirectHandler;

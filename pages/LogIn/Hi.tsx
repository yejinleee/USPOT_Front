import Mypage from '@pages/Mypage/Mypage';
import LogIn from '@pages/LogIn';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';

const OAuth2RedirectHandler = () => {
  // const dispatch = useDispatch();
  // const isLogin = useSelector((state) => state.changeLoginStatus.isLogin);
  // console.log('isLogin', isLogin);
  // const localStoragetokenCheck = localStorage.getItem('token');

  // useEffect(() => {
  // 	if (localStoragetokenCheck) {
  // 		// 로그인유지를 위해서 isLogin을 true로 변경해줘야한다.
  // 		dispatch(loginCheck());
  // 	}
  // }, []);

  // return (
  // 	<>
  // 		<Router>
  // 			<Switch>
  // 				{isLogin ? (
  // 					<Route path="/mypage" component={Mypage}></Route>
  // 				) : (
  // 					<Route path="/login" exact component={LogIn}></Route>
  // 				)}
  // 			</Switch>
  // 		</Router>
  // 	</>
  // );
  let code = new URL(window.location.href).searchParams.get('code');
  // const dispatch = useDispatch();
  console.log(code);
  const url = '/api/oauth2/authorization/kakao';
  const [response, setResponse] = useState(false);
  axios.get(url, { params: { code } }).then((res) => {
    console.log(res);
    console.log(res.request.statusText);
    if (res.request.statsText === 'OK') {
      setResponse(true);
    } else {
      setResponse(false);
    }
  });
  return { response } && <Redirect to="/mypage" />;
};

export default OAuth2RedirectHandler;

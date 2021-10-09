import HomePage from '@pages/Home/Mainhome';
import Mypage from '@pages/Mypage/Mypage';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loginCheck } from './changeLoginStatus';

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: any) => state.changeLoginStatus.isLogin);
  console.log('isLogin', isLogin);
  const localStoragetokenCheck = localStorage.getItem('token');
  useEffect(() => {
    if (localStoragetokenCheck) {
      // 로그인유지를 위해서 isLogin을 true로 변경해줘야한다.
      dispatch(loginCheck());
    }
  }, []);

  return (
    <>
      <Router>
        <Switch>
          {isLogin ? (
            <Route path="/mypage" component={Mypage}></Route>
          ) : (
            <Route path="/home" exact component={HomePage}></Route>
          )}
        </Switch>
      </Router>
    </>
  );
}

export default App;

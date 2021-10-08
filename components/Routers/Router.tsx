import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '@pages/Home/Mainhome';
import Mypage from '@pages/Mypage/Mypage';
import Second from '@pages/Secondpage/Second';
import Third from '@pages/Thirdpage/Third';
import LogIn from '@pages/LogIn';
import OAuth2RedirectHandler from '@pages/LogIn/Hi';
import Hello from '@pages/Signup/Hello';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mypage" component={Mypage} />
        <Route path="/oauth/callback/kakao" component={OAuth2RedirectHandler}></Route>
        <Route path="/oauth/logout" component={Hello}></Route>
        <Route exact path="/:selectedcity/:selectedcategory" component={Second} />
        <Route exact path="/:selectedcity/:selectedcategory/more" component={Third} />
        <Route exact path="/login" component={LogIn} />
      </Switch>
    </Router>
  );
};

export default Routes;

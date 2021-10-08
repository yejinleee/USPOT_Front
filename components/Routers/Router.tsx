import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '@pages/Home/Mainhome';
import Mypage from '@pages/Mypage/Mypage';
import Second from '@pages/Secondpage/Second';
import Third from '@pages/Thirdpage/Third';
import LogIn from '@pages/LogIn';
import OAuth2RedirectHandler from '@pages/LogIn/Hi';
import Counter from '@pages/LogIn/Counter';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/:selectedcity/:selectedcategory" component={Second} />
        <Route exact path="/:selectedcity/:selectedcategory/more" component={Third} />
        <Route exact path="/login" component={LogIn} />
        <Route path="/oauth/callback/kakao" component={OAuth2RedirectHandler}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;

import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '@pages/Home/Mainhome';
import Mypage from '@pages/Mypage/Mypage';
import Second from '@pages/Secondpage/Second';

// class Routes extends React.Component {
const Routes = () => {
  // render() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/:selectedcity/:selectedcategory" component={Second} />
      </Switch>
    </Router>
  );
};

export default Routes;

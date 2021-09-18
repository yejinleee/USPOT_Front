import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '@pages/Home/Mainhome';
import Mypage from '@pages/Mypage/Mypage';
import Second from '@components/Secondpage/Second';

// class Routes extends React.Component {
const Routes =()=>{
  // render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/mypage" component={Mypage} />
          {/*<Route exact path="/second" render={() => <Second selectedcity={selectedcity} />} />*/}
          <Route exact path="/second/:selectedcity/:selectedcategory" component={Second} />
        </Switch>
      </Router>
    );
}

export default Routes;

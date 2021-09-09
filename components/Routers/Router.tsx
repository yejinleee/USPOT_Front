import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '@pages/Home/Mainhome';
import Mypage from '@pages/Mypage/Mypage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/mypage" component={Mypage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Repository from 'pages/Repository';

const Routing = () => (
  <Switch>
    <Route path="/repository/:owner/:name" exact component={Repository} />
    <Route component={Home} />
  </Switch>
);

export default Routing;

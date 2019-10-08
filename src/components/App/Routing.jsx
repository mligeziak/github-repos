import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';

const Routing = () => (
  <Switch>
    <Route component={Home} />
  </Switch>
);

export default Routing;

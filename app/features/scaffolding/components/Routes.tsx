import React from 'react';
import {Switch, Route} from 'react-router';

import {Test} from '../../example/components';
import {NotFound} from '../../shared/components';

export default () => (
  <Switch>
    <Route exact path="/">
      <Test />
    </Route>

    <Route>
      <NotFound />
    </Route>
  </Switch>
);

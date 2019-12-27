import React from 'react';
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import routers from './router';

export default function AppRoot() {
  return (
    <Router>
      <Switch>
        {
          routers.map(({ page: Page, ...arg }) => {
            const key = arg.path || '';
            return (
              <Route {...arg} key={key}>
                <Page />
              </Route>
            );
          })
        }
      </Switch>
    </Router>
  );
}

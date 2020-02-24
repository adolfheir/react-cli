import React, { ReactNode } from 'react';
import {
    BrowserRouter as Router,
    // HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import routers from './router';

const AppRoot: React.FC = () => {
    return (
        <Router>
            <Switch>
                {routers.map((option: { page: any; path?: string }) => {
                    const { page: Page, ...others } = option;
                    const { path: key = '' } = others;
                    return (
                        <Route {...others} key={key}>
                            <Page />
                        </Route>
                    );
                })}
            </Switch>
        </Router>
    );
};

export default AppRoot;

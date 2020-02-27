import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    // HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import classNames from 'classnames';
import routers from './router';
import Header from './Header';

import styles from './index.scss';

const AppRoot: React.FC = () => {
    return (
        <Fragment>
            <Header />
            <div className={classNames(styles['content'])}>
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
            </div>
        </Fragment>
    );
};

export default AppRoot;

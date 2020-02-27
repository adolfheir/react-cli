import React, { Fragment } from 'react';
import classNames from 'classnames';
import LeftPanel from './LeftPanel';
import ContentPanel from './ContentPanel';

import styles from './index.scss';

const componentName = 'snop-list';

export default class SnopList extends React.Component {
    render() {
        return (
            <div className={classNames(styles[`${componentName}`])}>
                <LeftPanel />
                <ContentPanel />
            </div>
        );
    }
}

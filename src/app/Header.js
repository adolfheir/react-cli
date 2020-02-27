import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './index.scss';

const componentName = 'header';

export default class Header extends Component {
    render() {
        const { className, style } = this.props;

        return (
            <div styles={style} className={classNames(styles[`${componentName}`], className)}>
                这是头部
            </div>
        );
    }
}

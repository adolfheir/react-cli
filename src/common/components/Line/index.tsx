import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './index.scss';

interface IProps {
    className?: string;
    style?: CSSProperties;
}

interface IState {}

const componentName = 'line';

export default class Line extends React.Component<IProps, IState> {
    render() {
        const { className, style } = this.props;
        return <hr style={style} className={classNames(styles[`${componentName}`], className)} />;
    }
}

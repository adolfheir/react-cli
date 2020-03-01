import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './index.scss';

interface IProps {
    className?: string;
    style?: CSSProperties;
}

interface IState {}

export default class Line extends React.Component<IProps, IState> {
    render() {
        const { className, style } = this.props;
        return (
            <div style={style} className={classNames(styles['load-container'], styles['load7'], className)}>
                <div className={classNames(styles['loader'])}>loading...</div>
            </div>
        );
    }
}

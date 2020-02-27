import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './index.scss';

interface IProps {
    className?: string;
    style?: CSSProperties;
    process?: number;
}

interface IState {}

const componentName = 'ring';

export default class Ring extends React.Component<IProps, IState> {
    state = {
        LineSource: {},
    };

    render() {
        const { className, style, process } = this.props;
        return (
            <div style={style} className={classNames(styles[`${componentName}`], className)}>
                <svg viewBox="0 0 100 100">
                    <path
                        d="M 50 50 m -40 0 a 40 40 0 1 0 80 0  a 40 40 0 1 0 -80 0"
                        fill="none"
                        stroke="#e5e9f2"
                        strokeWidth="5">
                        >
                    </path>
                    <path
                        d="M 50 50 m -40 0 a 40 40 0 1 0 80 0  a 40 40 0 1 0 -80 0"
                        fill="none"
                        stroke="#20a0ff"
                        strokeLinecap="round"
                        transform="rotate(90,50,50)"
                        className={classNames(styles[`${componentName}__controll`],)}
                        strokeWidth="5"></path>
                </svg>
            </div>
        );
    }
}

import React, { CSSProperties, ReactNode, Fragment } from 'react';
import classNames from 'classnames';
import { isString } from 'lodash';
import Line from '@components/Line';
import styles from './index.scss';

interface IProps {
    className?: string;
    style?: CSSProperties;
    header?: ReactNode | string;
    children?: ReactNode;
}

interface IState {}

const componentName = 'panel';

export default class RightPanel extends React.Component<IProps, IState> {
    render() {
        const { className, style, header, children } = this.props;
        return (
            <div style={style} className={classNames(styles[`${componentName}`], className)}>
                {!!header && (
                    <Fragment>
                        <div className={classNames(styles[`${componentName}__header`])}>
                            {isString(header) ? (
                                <div className={classNames(styles[`${componentName}__title`])}>{header}</div>
                            ) : (
                                { header }
                            )}
                        </div>
                        <Line />
                    </Fragment>
                )}
                <div className={classNames(styles[`${componentName}__content`])}>{children}</div>
            </div>
        );
    }
}

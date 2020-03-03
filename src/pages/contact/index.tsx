import React, { Component } from 'react';
import classNames from 'classnames';
import { Button, Icon } from '@alifd/next';
import Panel from '@common/components/Panel';
import Line from '@common/components/Line';
import Ring from '@common/components/Ring';
import CreatDialog from './CreatDialog';

import styles from './index.scss';

const componentName = 'contact';

export default class Contact extends React.Component {
    state = {
        showCreatDialog: true,
        List: [1, 2, 3, 4],
    };

    render() {
        const { List, showCreatDialog } = this.state;
        return (
            <div className={classNames(styles[`${componentName}`])}>
                <Button
                    type="primary"
                    onClick={() => {
                        this.setState({ showCreatDialog: true });
                    }}>
                    +&nbsp;&nbsp;添加追踪任务
                </Button>
                <Panel header={'密切接触者分析'} className={classNames(styles[`${componentName}__content`])}>
                    <div className={classNames(styles[`${componentName}__list`])}>
                        {List.map((v) => (
                            <div key={v} className={classNames(styles[`${componentName}__item`])}>
                                <div>
                                    <div className={classNames(styles[`${componentName}__header`])}>
                                        <Icon type="arrow-down" size="xxs" />
                                        追踪任务xxxx
                                    </div>
                                    <Line />
                                    <div className={classNames(styles[`${componentName}__info`])}>
                                        <div className={classNames(styles[`${componentName}__process`])}>
                                            <Ring
                                                className={classNames(styles[`${componentName}__ring`])}
                                                process={65}
                                            />
                                            <div
                                                className={classNames(
                                                    styles[`${componentName}__state`],
                                                    styles[`${componentName}__state--success`]
                                                )}>
                                                正在追踪中。。。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Panel>
                {showCreatDialog && (
                    <CreatDialog
                        onClose={() => {
                            this.setState({ showCreatDialog: false });
                        }}
                    />
                )}
            </div>
        );
    }
}

import React, { Fragment } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import Line from '@common/components/Line';
import Panel from '@common/components/Panel';
import { Switch, Tab, Icon, DatePicker } from '@alifd/next';

import styles from './index.scss';

const componentName = 'snop-detail';

export default class Detail extends React.Component {
    render = () => {
        return (
            <Panel style={{ height: '100%' }}>
                <div className={classNames(styles[`${componentName}`])}>
                    <Tab defaultActiveKey="1">
                        <Tab.Item title="详细信息" key="1">
                            <div className={classNames(styles[`${componentName}__content`])}>
                                <div className={classNames(styles[`${componentName}__title`])}>
                                    <Icon type="arrow-down" size="xxs" />
                                    基础信息
                                    <Line />
                                </div>
                                <div className={classNames(styles[`${componentName}__info`])}>
                                    <p>
                                        <span>性别</span>——
                                    </p>
                                    <p>
                                        <span>年龄段</span>——
                                    </p>
                                    <p>
                                        <span>戴眼镜</span>——
                                    </p>
                                    <p>
                                        <span>抓拍地点</span>——
                                    </p>
                                </div>

                                <div className={classNames(styles[`${componentName}__title`])}>
                                    <Icon type="arrow-down" size="xxs" />
                                    抓拍照
                                    <Line />
                                </div>
                                <div className={classNames(styles[`${componentName}__snop`])}>
                                    <img src="https://dwz.cn/jkDtvsC2" />
                                    <img src="https://dwz.cn/jkDtvsC2" />
                                </div>

                                <div className={classNames(styles[`${componentName}__title`])}>
                                    <Icon type="arrow-down" size="xxs" />
                                    场景图预览
                                    <Line />
                                </div>
                                <div className={classNames(styles[`${componentName}__pre`])}>
                                    <img src="https://dwz.cn/jkDtvsC2" />
                                </div>
                            </div>
                        </Tab.Item>
                    </Tab>
                </div>
            </Panel>
        );
    };
}

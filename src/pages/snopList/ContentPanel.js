import React, { Fragment } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { Switch, Tab, Icon } from '@alifd/next';
import Panel from '@common/components/Panel';
import Line from '@common/components/Line';

import styles from './index.scss';

const _list = [];
for (let i = 0; i < 100; i++) {
    _list.push({ key: i, photo: 'https://dwz.cn/jkDtvsC2', time: new Date() });
}

const componentName = 'content-panel';

export default class ContentPanel extends React.Component {
    state = {
        showDetail: true,
        list: _list,
    };
    render() {
        const { showDetail, list } = this.state;
        return (
            <Panel className={classNames(styles[`${componentName}`])}>
                <div className={classNames(styles[`${componentName}__header`])}>
                    <p>{'全部抓拍（114，147）'}</p>
                    <div className={classNames(styles[`${componentName}__detail-control`])}>
                        详情
                        <Switch
                            checked={showDetail}
                            onChange={() => {
                                this.setState({ showDetail: !showDetail });
                            }}
                            size="small"
                        />
                    </div>
                </div>
                <Line style={{ position: 'absolute', margin: '0 -12px' }} />
                <div className={classNames(styles[`${componentName}__content`])}>
                    <div className={classNames(styles[`${componentName}__photo-list`])}>
                        {list.map(({ key, photo, time }) => (
                            <div key={key} className={classNames(styles[`${componentName}__photo-item`])}>
                                <img src={photo} />
                                <span>{moment(time).format('YYYY-MM-DD H:mm:ss')}</span>
                            </div>
                        ))}
                    </div>
                    {showDetail && (
                        <Panel style={{ height: '100%' }}>
                            <div className={classNames(styles[`${componentName}__detail`])}>
                                <Tab defaultActiveKey="1">
                                    <Tab.Item title="详细信息" key="1">
                                        <div className={classNames(styles[`${componentName}__detail-title`])}>
                                            <Icon type="arrow-down" size="xxs" />
                                            基础信息
                                            <Line />
                                        </div>
                                        <div className={classNames(styles[`${componentName}__detail-info`])}>
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

                                        <div className={classNames(styles[`${componentName}__detail-title`])}>
                                            <Icon type="arrow-down" size="xxs" />
                                            抓拍照
                                            <Line />
                                        </div>
                                        <div className={classNames(styles[`${componentName}__detail-snop`])}>
                                            <img src="https://dwz.cn/jkDtvsC2" />
                                            <img src="https://dwz.cn/jkDtvsC2" />
                                        </div>

                                        <div className={classNames(styles[`${componentName}__detail-title`])}>
                                            <Icon type="arrow-down" size="xxs" />
                                            场景图预览
                                            <Line />
                                        </div>
                                        <div className={classNames(styles[`${componentName}__detail-pre`])}>
                                            <img src="https://dwz.cn/jkDtvsC2" />
                                        </div>
                                    </Tab.Item>
                                </Tab>
                            </div>
                        </Panel>
                    )}
                </div>
            </Panel>
        );
    }
}

import React, { Fragment } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { Switch, DatePicker } from '@alifd/next';
import Panel from '@common/components/Panel';
import LazyList from '@common/components/LazyList';
import DetailPanel from './DetailPanel';

import styles from './index.scss';

const { RangePicker } = DatePicker;

const _list = [];
for (let i = 0; i < 10; i++) {
    _list.push({ key: i, photo: 'https://dwz.cn/jkDtvsC2', time: new Date() });
}

const componentName = 'content-panel';

export default class ContentPanel extends React.Component {
    state = {
        showDetail: true,
        //列表状态
        hasNextPage: true,
        isNextPageLoading: false,
        items: _list,
    };

    handleLoadNextPage = (...args) => {
        this.setState({ isNextPageLoading: true }, () => {
            setTimeout(() => {
                this.setState((state) => ({
                    hasNextPage: state.items.length < 10000,
                    isNextPageLoading: false,
                    items: [...state.items].concat(_list),
                }));
            }, 250);
        });
    };

    renderHeader = () => {
        const { showDetail } = this.state;
        return (
            <div className={classNames(styles[`${componentName}__header`])}>
                <p>{'全部抓拍（114，147）'}</p>
                <div className={classNames(styles[`${componentName}__detail-control`])}>
                    <span>抓拍时间:&nbsp;&nbsp;</span>
                    <RangePicker
                        defaultValue={[moment('2017-11-20', 'YYYY-MM-DD'), moment('2017-12-15', 'YYYY-MM-DD')]}
                        onChange={() => {}}
                    />
                    <span>详情&nbsp;&nbsp;</span>
                    <Switch
                        checked={showDetail}
                        onChange={() => {
                            this.setState({ showDetail: !showDetail }, () => {
                                this.__HACK__RESIZE__();
                            });
                        }}
                        size="small"
                    />
                </div>
            </div>
        );
    };
    renderItem = ({ key, photo, time }) => {
        return (
            <div key={key} className={classNames(styles[`${componentName}__photo-item`])}>
                <img src={photo} />
                <span>{moment(time).format('YYYY-MM-DD H:mm:ss')}</span>
            </div>
        );
    };
    render() {
        const { showDetail, items, hasNextPage, isNextPageLoading } = this.state;
        return (
            <Panel header={this.renderHeader()} className={classNames(styles[`${componentName}`])}>
                <div className={classNames(styles[`${componentName}__content`])}>
                    <div className={classNames(styles[`${componentName}__photo-list`])}>
                        <LazyList
                            items={items}
                            hasNextPage={hasNextPage}
                            isNextPageLoading={isNextPageLoading}
                            itemRender={this.renderItem}
                            onLoadNextPage={this.handleLoadNextPage}
                            columnWidth={140}
                            rowHeight={200}
                            __HACK__RESIZE__={(handleResize) => {
                                this.__HACK__RESIZE__ = handleResize;
                            }}
                        />
                    </div>
                    {showDetail && <DetailPanel />}
                </div>
            </Panel>
        );
    }
}

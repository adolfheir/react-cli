import React, { Fragment } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import { Radio, DatePicker, Icon } from '@alifd/next';
import Panel from '@common/components/Panel';
import Line from '@common/components/Line';

import styles from './index.scss';

interface IProps {
    className?: string;
}

interface IState {
    dataSource: any;
    value: number | null;
}

const componentName = 'left-panel';
const { Group: RadioGroup } = Radio;
const { RangePicker } = DatePicker;

export default class LeftPanel extends React.Component<IProps, IState> {
    state = {
        value: 1,
        dataSource: [
            {
                value: 1,
                label: '近1天',
            },
            {
                value: 2,
                label: '近3天',
            },
            {
                value: 3,
                label: '近7天',
            },
        ],
    };
    render() {
        const { className } = this.props;
        const { dataSource, value } = this.state;
        return (
            <Fragment>
                <Panel className={classNames(styles[`${componentName}`])}>
                    <div className={classNames(styles[`${componentName}__preset-date`])}>
                        <span>抓拍时间:</span>
                        <span>
                            <RadioGroup dataSource={dataSource} value={value} onChange={() => {}} />
                        </span>
                    </div>
                    <div className={classNames(styles[`${componentName}__date-picker`])}>
                        <RangePicker
                            defaultValue={[moment('2017-11-20', 'YYYY-MM-DD'), moment('2017-12-15', 'YYYY-MM-DD')]}
                            onChange={() => {}}
                        />
                    </div>
                    <Line style={{ position: 'absolute', margin: '0 -12px' }} />
                    <div className={classNames(styles[`${componentName}__select-control`])}>
                        <span>{'请选择卡口设备'}</span>
                        <Icon type="arrow-down" size="xxs" />
                    </div>
                    {/* {<Map />} */}
                    
                </Panel>
            </Fragment>
        );
    }
}

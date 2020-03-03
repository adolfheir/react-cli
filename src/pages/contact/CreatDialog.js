import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { Icon, Dialog, DatePicker, Range, Form, Input } from '@alifd/next';
import Line from '@common/components/Line';

import styles from './index.scss';
const componentName = 'creat-dialog';

const { RangePicker } = DatePicker;

export default class CreatDialog extends React.Component {
    state = {};

    render() {
        const { onClose } = this.props;

        return (
            <Dialog
                closeable={'esc,mask'}
                title={'新建追踪任务'}
                visible={true}
                onOk={onClose}
                onCancel={onClose}
                onClose={onClose}>
                <Form labelCol={{ fixedSpan: 10 }} wrapperCol={{ span: 14 }} style={{ width: '60%' }}>
                    <Form.Item label="baseUsername:">
                        <Input name="first" style={{ width: 80 }} placeholder="first" />
                    </Form.Item>
                    <Form.Item label="password:">
                        <Input htmlType="password" name="basePass" placeholder="Please Enter Password" />
                    </Form.Item>
                    <Form.Item label="Note:" help="something">
                        <Input.TextArea placeholder="something" name="baseRemark" />
                    </Form.Item>
                    <Form.Item label="Agreement:">
                        <RangePicker />
                    </Form.Item>
                    <Form.Item label=" ">
                        <Range min={1} max={100} step={1} defaultValue={30} hasTip={false} />
                    </Form.Item>
                </Form>
            </Dialog>
        );
    }
}

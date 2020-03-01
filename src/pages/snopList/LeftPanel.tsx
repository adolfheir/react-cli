import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Icon, Tree } from '@alifd/next';
import Map from '@common/components/GoogleMap';
import Panel from '@common/components/Panel';
const TreeNode = Tree.Node;

import styles from './index.scss';

interface IProps {
    className?: string;
}

interface IState {
    dataSource: any;
    expandedKeys: Array<string>;
    showDeviceTree: boolean;
}

const componentName = 'left-panel';

const data = [
    {
        key: '0-0',
        label: '0-0',
        leval: 1,
        children: [
            {
                key: '0-0-0',
                label: '0-0-0',
                leval: 2,
                children: [
                    {
                        key: '0-0-0-0',
                        label: '0-0-0-0',
                        leval: 3,
                    },
                    {
                        key: '0-0-0-1',
                        label: '0-0-0-1',
                        leval: 3,
                    },
                ],
            },
        ],
    },
];

export default class LeftPanel extends React.Component<IProps, IState> {
    state = {
        showDeviceTree: true,
        expandedKeys: [],
        dataSource: data,
    };
    rennderTreeNode = (item) => {
        const { leval, key, label } = item;
        const { expandedKeys } = this.state;
        const isExpend = expandedKeys.includes(key);
        return (
            <div className={classNames(styles[`${componentName}__tree-node`])}>
                <span
                    onClick={() => {
                        const { expandedKeys } = this.state;
                        let _expandedKeys = [...expandedKeys];
                        if (isExpend) {
                            _expandedKeys = _expandedKeys.filter((v) => !v.includes(key));
                        } else {
                            _expandedKeys = _expandedKeys.concat(key);
                        }
                        console.log('expandedKeys', expandedKeys);
                        this.setState({ expandedKeys: _expandedKeys });
                    }}
                    className={classNames(styles[`${componentName}__tree-node-switcher`])}>
                    <Icon type={isExpend ? 'arrow-down' : 'arrow-right'} size="xxs" />
                </span>
                <span>{label}</span>
            </div>
        );
    };

    renderTree = () => {
        const { dataSource, expandedKeys } = this.state;
        const loop = (data) =>
            data.map((item) => {
                if (item.children) {
                    return (
                        <TreeNode key={item.key} label={this.rennderTreeNode(item)}>
                            {loop(item.children)}
                        </TreeNode>
                    );
                }
                return <TreeNode key={item.key} label={this.rennderTreeNode(item)} />;
            });

        return (
            <Tree
                draggable
                selectable={false}
                expandedKeys={expandedKeys}
                className={classNames(styles[`${componentName}__tree`])}>
                {loop(dataSource)}
            </Tree>
        );
    };
    renderHeader = () => {
        const { showDeviceTree } = this.state;
        return (
            <div className={classNames(styles[`${componentName}__select-control`])}>
                <span>{'请选择卡口设备'}</span>
                <Icon
                    onClick={() => {
                        this.setState({ showDeviceTree: !showDeviceTree });
                    }}
                    type={showDeviceTree ? 'arrow-down' : 'arrow-right'}
                    size="xxs"
                />
            </div>
        );
    };
    render() {
        const { showDeviceTree } = this.state;
        return (
            <Fragment>
                <Panel header={this.renderHeader()} className={classNames(styles[`${componentName}`])}>
                    {showDeviceTree && this.renderTree()}
                    {!showDeviceTree && (
                        <div className={classNames(styles[`${componentName}__map-container`])}>
                            <Map></Map>
                        </div>
                    )}
                </Panel>
            </Fragment>
        );
    }
}

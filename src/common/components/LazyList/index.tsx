import React, { CSSProperties, ReactNode } from 'react';
import { chunk, debounce } from 'lodash';
import classNames from 'classnames';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import CustomLoading from '@components/CustomLoading';
import styles from './index.scss';

interface IProps {
    className?: string;
    style?: CSSProperties;
    items?: any;
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    itemRender: any;
    onLoadNextPage: any;
    rowHeight: number;
    columnWidth?: number; //列宽 （2选一）
    columnSize?: number; //列个数 （2选一）
    __HACK__RESIZE__?: any;
}

interface IState {
    containerHeight: number;
    containerWidth: number;
    size: number;
}

const componentName = 'lazy-list';

export default class LazyList extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.$container = React.createRef();
    }

    $container; //容器ref
    observer; //检测器

    state = {
        containerWidth: 200,
        containerHeight: 10,
        size: 0,
    };

    componentDidMount() {
        //暂时传出去 先这么搞 以后在想办法
        const { __HACK__RESIZE__ } = this.props;
        __HACK__RESIZE__(this.handleResize);

        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = debounce(
        () => {
            const { columnWidth, columnSize } = this.props;
            let width;
            let height;
            let size;
            try {
                width = this.$container.current.getBoundingClientRect().width;
                height = this.$container.current.getBoundingClientRect().height;
                size = columnSize ? columnSize : Math.floor(width / columnWidth);
            } catch (error) {
                width = 0;
                height = 0;
                size = 0;
            }
            this.setState({ containerWidth: width, containerHeight: height, size });
        },
        150,
        { maxWait: 1000 }
    );

    render() {
        const {
            hasNextPage,
            items: originData,
            itemRender,
            isNextPageLoading,
            onLoadNextPage,
            rowHeight,
            style,
            className,
        } = this.props;
        const { containerWidth, containerHeight, size } = this.state;

        const items = chunk(originData, size);

        const loadNextPage = onLoadNextPage;
        // If there are more items to be loaded then add an extra row to hold a loading indicator.
        const itemCount = hasNextPage ? items.length + 1 : items.length;

        // Only load 1 page of items at a time.
        // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
        const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

        // Every row is loaded except for our loading indicator row.
        const isItemLoaded = (index) => !hasNextPage || index < items.length;

        // Render an item or a loading indicator.
        const Item = ({ index, style }) => {
            let data = items[index] || [];
            return (
                <div style={style}>
                    {!isItemLoaded(index) && <CustomLoading className={styles['loading']} />}
                    {isItemLoaded(index) && (
                        <div style={{ display: 'flex' }}>
                            {data.map((v, index) => (
                                <div key={index} style={{ width: `${100 / size}%` }}>
                                    {itemRender(v)}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            );
        };

        return (
            <div
                // style={style}
                className={classNames(styles[`${componentName}`], className)}
                ref={this.$container}
                style={style}>
                <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemCount} loadMoreItems={loadMoreItems}>
                    {({ onItemsRendered, ref }) => (
                        <List
                            ref={ref}
                            className="List"
                            height={containerHeight}
                            itemCount={itemCount}
                            itemSize={rowHeight}
                            onItemsRendered={onItemsRendered}
                            width={containerWidth}>
                            {Item}
                        </List>
                    )}
                </InfiniteLoader>
            </div>
        );
    }
}

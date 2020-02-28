import React, { Component, CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGl from 'react-mapbox-gl';
import { isDev } from '@common/utils/index';
import { mapCore } from './utils';
import { onlineMapStyle, onlineMapKey, localMapStyle } from '@common/constants';

import styles from './index.scss';

interface IProps {
    className?: string;
    style?: CSSProperties;
    children?: JSX.Element | JSX.Element[] | Array<JSX.Element | undefined>;
}

interface IState {}

const componentName = 'map';

const MapComponent = ReactMapboxGl({
    accessToken: onlineMapKey,
});

export default class Map extends Component<IProps, IState> {
    private static defaultProps = {};

    private handleStyleLoad = (map) => {
        // @ts-ignore
        window.mapboxgl = mapboxgl;
        // @ts-ignore
        window.__Map__ = map;
        mapCore.ins = map;
    };
    public render() {
        const { style, className, children, ...others } = this.props;
        return (
            <MapComponent
                style={isDev ? onlineMapStyle : localMapStyle}
                className={classNames(styles[`${componentName}`], className)}
                containerStyle={style}
                zoom={[12]}
                onStyleLoad={this.handleStyleLoad}
                center={[120.5, 30]}
                {...others}>
                {children}
            </MapComponent>
        );
    }
}

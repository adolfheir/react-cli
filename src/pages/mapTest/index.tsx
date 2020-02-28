// @ts-nocheck
import React, { Component, CSSProperties } from 'react';
import classNames from 'classnames';
import * as turf from '@turf/turf';
import { Button } from '@alifd/next';
import { Layer, Source } from 'react-mapbox-gl';
import { mapCaller } from '@common/components/Mapbox/utils';
import Map from '@components/Mapbox';
import styles from './index.scss';

interface IProps {
    className?: string;
    style?: CSSProperties;
}

interface IState {}

const componentName = 'detail';
const list = [
    [120.5, 30],
    [120.5999984741211, 30],
    [120.69999694824219, 30],
];
let line = [list[0], list[1]];
var distance = turf.distance(list[0], list[1]);
let steps = 500;
let counter = 1;
let arc = [];
//画出地理位置上的直线 可能不是纯直线
for (var i = 0; i < distance; i += distance / steps) {
    var segment = turf.along(turf.lineString(line), i);
    arc.push(segment.geometry.coordinates);
}

export default class Header extends Component<IProps, IState> {
    state = {
        arc: arc,
        pointGeoJson: {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'Point',
                            coordinates: list[0],
                        },
                    },
                ],
            },
        },
        LineGeoJson: {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'LineString',
                            coordinates: arc,
                        },
                    },
                ],
            },
        },
    };
    startAnimal = () => {
        const { pointGeoJson } = this.state;
        //新位置
        pointGeoJson.data.features[0].geometry.coordinates = arc[counter];
        pointGeoJson.data.features[0].properties.bearing = turf.bearing(
            turf.point(arc[counter >= steps ? counter - 1 : counter]),
            turf.point(arc[counter >= steps ? counter : counter + 1])
        );
        mapCaller('getSource')('point').setData(pointGeoJson.data);
        if (counter < steps) {
            requestAnimationFrame(this.startAnimal);
        }
        counter = counter + 1;
    };

    render() {
        const { className, style } = this.props;
        const { pointGeoJson, LineGeoJson } = this.state;
        return (
            <div style={style} className={classNames(styles[`${componentName}`], className)}>
                <Button
                    type="primary"
                    onClick={() => {
                        this.startAnimal();
                    }}>
                    +&nbsp;&nbsp;添加追踪任务
                </Button>
                <Map>
                    <Source id="point" geoJsonSource={pointGeoJson} />
                    <Source id="route" geoJsonSource={LineGeoJson} />
                    <Layer
                        type="symbol"
                        sourceId="point"
                        layout={{
                            'icon-image': 'airport-15',
                            'icon-rotate': ['get', 'bearing'],
                            'icon-rotation-alignment': 'map',
                            'icon-allow-overlap': true,
                            'icon-ignore-placement': true,
                        }}
                    />
                    <Layer
                        type="line"
                        sourceId="route"
                        paint={{
                            'line-width': 2,
                            'line-color': '#007cbf',
                            'line-dasharray': [3, 3],
                        }}
                    />
                </Map>
            </div>
        );
    }
}

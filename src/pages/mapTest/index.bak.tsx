// @ts-nocheck
import React, { Component, CSSProperties, Fragment } from 'react';
import classNames from 'classnames';
import * as turf from '@turf/turf';
import { Button } from '@alifd/next';
import { Layer, Source } from 'react-mapbox-gl';
import { mapCaller } from '@common/components/Mapbox/utils';
import Map from '@components/Mapbox';
import { getLineCoincide } from '@components/Mapbox/utils';
import data from './trajectory';

import { point } from '@turf/turf';

interface IProps {
    className?: string;
    style?: CSSProperties;
}

interface IState {}

const componentName = 'map';

const list = [
    [120.5, 30],
    [120.69999694824219, 30],
    [120.5999984741211, 30],
    // [120.69999694824219, 30],
];
let counter = 1;

function getArc(point1, point2, speed) {
    let arc = [];
    //画出地理位置上的直线 可能不是纯直线
    let distance = turf.distance(point1, point2);
    for (var i = 0; i < distance; i += distance / steps) {
        let segment = turf.along(turf.lineString([point1, point2]), i);
        arc.push(segment.geometry.coordinates);
    }
    return arc;
}

let steps = 500;
let arc = getArc(list[0], list[1], steps);
const bearing = turf.bearing(turf.point(list[0]), turf.point(list[1]));

export default class Header extends Component<IProps, IState> {
    state = {
        counter: 0,
        pointGeoJson: {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {
                            bearing: bearing,
                        },
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
                            coordinates: [
                                [120.5, 30],
                                [120.69999694824219, 30],
                            ],
                        },
                    },
                ],
            },
        },
        LineGeoJson2: {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [120.69999694824219, 30],
                                [120.5999984741211, 30],
                            ],
                        },
                    },
                ],
            },
        },
    };

    startAnimal = () => {
        const { pointGeoJson, LineGeoJson } = this.state;
        //新位置
        pointGeoJson.data.features[0].geometry.coordinates = arc[counter];
        pointGeoJson.data.features[0].properties.bearing = turf.bearing(
            turf.point(arc[counter >= steps ? counter - 1 : counter]),
            turf.point(arc[counter >= steps ? counter : counter + 1])
        );
        mapCaller('getSource')('point').setData(pointGeoJson.data);
        if (counter < steps) {
            requestAnimationFrame(this.startAnimal);
        } else {
            counter = 0;
        }
        counter = counter + 1;
    };
    componentDidMount() {
        // this.dataAdapter();
    }



    render() {
        const { className, style } = this.props;
        const { pointGeoJson, LineGeoJson, LineGeoJson2 } = this.state;
        return (
            <Fragment>
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
                    <Source id="route2" geoJsonSource={LineGeoJson2} />
                    <Layer
                        type="symbol"
                        sourceId="point"
                        layout={{
                            // 'icon-offset': [0, -100],
                            'icon-image': 'airport-15',
                            'icon-rotate': ['get', 'bearing'],
                            'icon-rotation-alignment': 'map',
                            // 'icon-allow-overlap': true,
                            // 'icon-ignore-placement': true,
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
                    <Layer
                        type="line"
                        sourceId="route2"
                        paint={{
                            'line-width': 2,
                            'line-color': '#007cbf',
                            'line-dasharray': [3, 3],
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
            </Fragment>
        );
    }
}

// @ts-nocheck
import React, { Component, CSSProperties, Fragment } from 'react';
import loadsh from 'lodash';
import * as turf from '@turf/turf';
import { Button } from '@alifd/next';
import { MapContext } from 'react-mapbox-gl';
import Map from '@components/Mapbox';
import { mapCaller } from '@components/Mapbox/utils';
import { getLineCoincide, getDistance } from '@common/components/GoogleMap/utils';
import data from './trajectory';

interface IProps {
    className?: string;
    style?: CSSProperties;
}

interface IState {}

const componentName = 'track';

let coordinates = data.trackPoints.map((v) => {
    return [v['lng'], v['lat']];
});
//先获取全部路径
let paths = coordinates.reduce((accumulator, currentValue, currentIndex) => {
    if (currentIndex != 0) {
        accumulator.push([coordinates[currentIndex - 1], currentValue]);
    }
    return accumulator;
}, []);
export default class Track extends Component<IProps, IState> {
    state = {
        //地图是否加载完成
        isReady: false,
        coordinates: coordinates,
        //路径
        paths: paths,
    };

    timer; //定时器
    map; //地图实例

    addRoute = (paths) => {
        let route = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'LineString',
                        coordinates: loadsh.flatten(paths),
                    },
                },
            ],
        };
        this.map.addSource('route', {
            type: 'geojson',
            data: route,
        });
        this.map.addLayer({
            id: 'route',
            source: 'route',
            type: 'line',
            paint: {
                'line-width': 2,
                'line-color': '#007cbf',
                'line-dasharray': [3, 3],
            },
        });
    };

    getDashLine = (paths) => {
        let unOverlaPaths = [...paths];
        try {
            //开始去重合
            unOverlaPaths = unOverlaPaths.map((path) => {
                //经纬度转坐标
                return path.map((point) => this.map.transform.locationPoint(point));
            });
            // 遍历去重
            let isTraversed = false;
            while (!isTraversed && unOverlaPaths.length > 1) {
                for (let i = 1; i < unOverlaPaths.length; i++) {
                    const path1 = unOverlaPaths[i];
                    const path2 = unOverlaPaths[i - 1];
                    const resultPath = getLineCoincide(path1, path2);
                    // 如果有重叠 则生成新路径 并重新遍历
                    if (resultPath.length === 1) {
                        const _unOverlaPaths = unOverlaPaths.filter((v, index) => !(index === i || index === i - 1));
                        unOverlaPaths = [...resultPath, ..._unOverlaPaths];
                        break;
                    }
                    // 遍历结束 标记为置为true
                    if (i === unOverlaPaths.length - 1) {
                        isTraversed = true;
                    }
                }
            }
            // 转latlng
            unOverlaPaths = unOverlaPaths.map((path) => {
                return path.map((point) => {
                    let location = this.map.transform.pointLocation(point);
                    return [location['lng'], location['lat']];
                });
            });
        } catch (error) {
            console.log('error', error);
            unOverlaPaths = [];
        }
        return unOverlaPaths;
    };

    getPointerBearing = (point1, point2) => {
        return turf.bearing(turf.point(point1), turf.point(point2));
    };

    startAnimal = () => {
        this.clearAnimal();
        const { paths } = this.state;
        let isStart = false; //是否已经开始
        let speed = 3; //每帧像素
        let lastPoint = paths[0][0]; //上一次运动的点位
        let currentPathIndex = 0; //当前在哪条路径

        this.timer = setInterval(() => {
            let startPoint;
            let endPoint = paths[currentPathIndex][1];
            let bearing;
            //获取下一个点位置和bearing
            let pixelPoint1 = this.map.transform.locationPoint(lastPoint);
            let pixelPoint2 = this.map.transform.locationPoint(endPoint);
            let { x: x1, y: y1 } = pixelPoint1;
            let { x: x2, y: y2 } = pixelPoint2;

            let distance = getDistance(pixelPoint1, pixelPoint2);
            //判断是不是路径中最后一个点
            if (distance > speed) {
                let newX = ((x2 - x1) * speed) / distance + x1;
                let newY = ((y2 - y1) * speed) / distance + y1;
                let lnglat = this.map.transform.pointLocation({ x: newX, y: newY });
                startPoint = [lnglat['lng'], lnglat['lat']];
            } else {
                startPoint = endPoint;
                currentPathIndex += 1;
                //判断是不是最后一个路径
                if (currentPathIndex === paths.length - 1) {
                    this.clearAnimal();
                }
            }
            //第一个点
            if ((isStart = false)) {
                startPoint = paths[0][0];
                isStart = true;
            }
            //算角度
            bearing = turf.bearing(turf.point(startPoint), turf.point(endPoint));

            let point = {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {
                            bearing: bearing,
                        },
                        geometry: {
                            type: 'Point',
                            coordinates: startPoint,
                        },
                    },
                ],
            };
            if (!this.map.getLayer('point')) {
                this.map.addSource('point', {
                    type: 'geojson',
                    data: point,
                });
                this.map.addLayer({
                    id: 'point',
                    source: 'point',
                    type: 'symbol',
                    layout: {
                        'icon-image': 'airport-15',
                        'icon-rotate': ['get', 'bearing'],
                        'icon-rotation-alignment': 'map',
                        'icon-allow-overlap': true,
                        'icon-ignore-placement': true,
                    },
                });
            } else {
                this.map.getSource('point').setData(point);
            }
        }, 17);
    };
    clearAnimal = () => {
        if (this.timer) clearInterval(this.timer);
        if (this.map.getLayer('point')) this.map.removeLayer('point');
        if (this.map.getSource('point')) this.map.removeSource('point');
    };

    render() {
        const { isReady } = this.state;
        return (
            <Fragment>
                <Button
                    type="primary"
                    onClick={() => {
                        if (isReady) {
                            this.startAnimal();
                        }
                    }}>
                    +&nbsp;&nbsp;添加追踪任务
                </Button>
                <Map
                    onStyleLoad={(map) => {
                        //地图加载后重新算虚线
                        window.__map__ = map;
                        this.map = map;
                        this.setState({ isReady: true }, () => {
                            const { paths } = this.state;
                            let dashLine = this.getDashLine(paths, map);
                            this.addRoute(dashLine, map);
                        });
                    }}>
                    <MapContext.Consumer>{(map) => {}}</MapContext.Consumer>
                </Map>
            </Fragment>
        );
    }
}

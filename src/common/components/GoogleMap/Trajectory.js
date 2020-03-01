import React, { Component, Fragment } from 'react';
import { isEqual } from 'lodash';
import DashLine from './DashLine';
import google from 'google';
import { Polyline, OverlayView } from 'react-google-maps';
import { latLng2Point, getDistance } from '@components/GoogleMap/utils';

let timer = null; // 定时器

export default class Trajectory extends Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        const { play = false } = nextProps;
        const { play: prePlay = false } = prevState;
        if (!isEqual(play, prePlay)) {
            return {
                play: play,
                shouldPlay: play,
            };
        }
        return null;
    }

    constructor(props) {
        super(props);
        this.state = {
            play: false,
            shouldPlay: false,
        };
        this.polyLineRef = React.createRef();
    }

    componentDidUpdate() {
        const { shouldPlay } = this.state;
        if (shouldPlay) {
            this.setState({ shouldPlay: false });
            this.startAnimal();
        }
    }

    startAnimal = () => {
        this.cleartAnimal();
        const speed = 3; // 每帧移动3px
        let offset = 0;

        const optionAdapter = (value) => ({
            icons: [
                {
                    icon: {
                        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                        strokeOpacity: 1,
                        fillColor: '#F64348',
                        strokeColor: '#F64348',
                    },
                    offset: `${value}%`,
                },
            ],
        });
        // 获取speed对应的百分比
        const getPercent = () => {
            const { trajectoryPoints } = this.props;
            const paths = trajectoryPoints.map((v) => new google.maps.LatLng(v.lat, v.lng));
            const totalDistances = paths.reduce((accumulator, currentValue, currentIndex) => {
                // 从第二个开始计算距离
                if (currentIndex !== 0) {
                    const lastPoint = latLng2Point(paths[currentIndex - 1]);
                    const thisPoint = latLng2Point(currentValue);
                    accumulator += getDistance(lastPoint, thisPoint); // eslint-disable-line
                }
                return accumulator;
            }, 0);
            return (speed / totalDistances) * 100;
        };

        timer = setInterval(() => {
            try {
                // setstate 导致其他东西rerender 懒得找原因 先直接拿对象搞
                this.polyLineRef.current.state.__SECRET_POLYLINE_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.setOptions(
                    optionAdapter(offset)
                );
                offset >= 100 ? this.cleartAnimal() : (offset += getPercent());
            } catch (error) {}
        }, 16);
    };

    cleartAnimal = () => {
        if (timer) {
            clearInterval(timer);
            // 清理定时器后清除配置
            try {
                this.polyLineRef.current.state.__SECRET_POLYLINE_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.setOptions({
                    icons: [],
                });
            } catch (error) {}
        }
    };

    render() {
        const { trajectoryPoints } = this.props;
        const paths = trajectoryPoints.map((v) => new google.maps.LatLng(v.lat, v.lng));
        let tinyPaths = trajectoryPoints.reduce((accumulator, currentValue, currentIndex) => {
            if (currentIndex !== 0) {
                // 从第二个点开始处理
                const startPoint = { lat: currentValue.lat, lng: currentValue.lng };
                const endPoint = {
                    lat: trajectoryPoints[currentIndex - 1].lat,
                    lng: trajectoryPoints[currentIndex - 1].lng,
                };
                accumulator.push([startPoint, endPoint]);
            }
            return accumulator;
        }, []);
        tinyPaths = tinyPaths.map((v) => {
            let [startPoint, endPoint] = v;
            startPoint = new google.maps.LatLng(startPoint.lat, startPoint.lng);
            endPoint = new google.maps.LatLng(endPoint.lat, endPoint.lng);
            return [startPoint, endPoint];
        });

        return (
            <Fragment>
                {/* 虚线涂层 */}
                <DashLine tinyPaths={tinyPaths} />
                {/* 动画图层 */}
                <Polyline
                    ref={this.polyLineRef}
                    options={{
                        strokeColor: '#F64348',
                        strokeOpacity: 0,
                    }}
                    path={paths}
                />
            </Fragment>
        );
    }
}

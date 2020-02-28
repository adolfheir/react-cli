import React from 'react';
import { isEqual } from 'lodash';
import { latLng2Point, point2LatLng } from './utils';
import { getLineCoincide } from './utils';
import { Polyline } from 'react-google-maps';

class DashLine extends React.Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        const { tinyPaths = [] } = nextProps;
        const { tinyPaths: preTinyPaths = [] } = prevState;
        if (!isEqual(tinyPaths, preTinyPaths)) {
            let tinyPathsWithFilter = [...tinyPaths];
            // 去重
            try {
                // latlng转point
                tinyPathsWithFilter = tinyPathsWithFilter.map((path) => {
                    path = path.map((v) => latLng2Point(v)); // eslint-disable-line
                    return path;
                });
                // 遍历去重
                let isTraversed = false;
                while (!isTraversed && tinyPathsWithFilter.length > 1) {
                    for (let i = 1; i < tinyPathsWithFilter.length; i++) {
                        const path1 = tinyPathsWithFilter[i];
                        const path2 = tinyPathsWithFilter[i - 1];
                        const resultPath = getLineCoincide(path1, path2);
                        // 如果有重叠 则生成新路径 并重新遍历
                        if (resultPath.length === 1) {
                            const _tinyPathsWithFilter = tinyPathsWithFilter.filter(
                                (v, index) => !(index === i || index === i - 1)
                            );
                            tinyPathsWithFilter = [...resultPath, ..._tinyPathsWithFilter];
                            break;
                        }
                        // 遍历结束 标记为置为true
                        if (i === tinyPathsWithFilter.length - 1) {
                            isTraversed = true;
                        }
                    }
                }
                // 转latlng
                tinyPathsWithFilter = tinyPathsWithFilter.map((v) => {
                    let [startPoint, endPoint] = v;
                    startPoint = point2LatLng(startPoint);
                    endPoint = point2LatLng(endPoint);
                    return [startPoint, endPoint];
                });
            } catch (error) {
                tinyPathsWithFilter = [];
            }
            return {
                tinyPathsWithFilter,
                tinyPaths,
            };
        }

        return null;
    }

    constructor() {
        super();
        this.state = {
            tinyPaths: [],
            tinyPathsWithFilter: [],
        };
    }

    render() {
        const { tinyPathsWithFilter = [] } = this.state;
        if (tinyPathsWithFilter.length === 0) {
            return null;
        }
        return (
            <React.Fragment>
                {tinyPathsWithFilter.map((v, index) => (
                    <Polyline
                        key={index} // eslint-disable-line
                        options={{
                            strokeOpacity: 0,
                            icons: [
                                {
                                    icon: {
                                        path: 'M 0,-1 0,1',
                                        strokeOpacity: 1,
                                        strokeColor: '#F64348',
                                    },
                                    offset: '0',
                                    repeat: '20px',
                                },
                            ],
                        }}
                        path={v}
                    />
                ))}
            </React.Fragment>
        );
    }
}

export default DashLine;

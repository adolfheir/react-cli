import React from 'react';
import { Marker } from 'react-mapbox-gl';
import classnames from 'classnames';
import { Badge } from '@alifd/next';
import markerImg from '@images/marker.png';

import styles from './index.scss';

const componenName = 'marker';

const badgeOffsetY = -25;
const badgeOffsetX = 22;

export default class MarkerWithLabel extends React.Component {
    render() {
        const { badges = [1, 2, 3], activeBadgeIndex = 1, onBadgeClick } = this.props;
        return (
            <Marker
                className={classnames(styles[componenName])}
                coordinates={[120.0816032474, 30.1300123643]}
                anchor="bottom">
                <img src={markerImg} />
                <div
                    className={classnames(styles[`${componenName}__badge`])}
                    style={{
                        transform: `translate(${badgeOffsetX}px, ${badgeOffsetY}px)`,
                    }}>
                    {badges.map((v, index) => (
                        <div
                            key={index}
                            className={classnames({
                                [styles[`${componenName}__badge-item`]]: true,
                                [styles[`${componenName}__badge-item--active`]]: activeBadgeIndex === index,
                            })}
                            onClick={onBadgeClick}
                            title={index + 1}>
                            <Badge count={`${index + 1}`} />
                        </div>
                    ))}
                </div>

                <div className={styles[`${componenName}__label`]}>{'x'}</div>
            </Marker>
        );
    }
}

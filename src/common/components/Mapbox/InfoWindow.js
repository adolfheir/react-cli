import React from 'react';
import { Marker } from 'react-mapbox-gl';
import classnames from 'classnames';
import moment from 'moment';
import markerImg from '@images/marker.png';

import styles from './index.scss';

const componenName = 'info-window';

export default class InfoWindow extends React.Component {
    render() {
        const { onClose, onPlay } = this.props;
        return (
            <Marker
                className={classnames(styles[`${componenName}`])}
                coordinates={[120.0816032474, 30.1300123643]}
                offset={[20 + 22, -25 - 22]}
                anchor="bottom">
                <div className={classnames(styles[`${componenName}__container`])}>
                    <div className={styles[`${componenName}__img`]}>
                        {/* <img src={`${baseUrl}${image}`} /> */}
                        <img src={markerImg} />
                        <div onClick={onPlay} className={styles[`${componenName}__play`]} />
                    </div>
                    <div className={styles[`${componenName}__text`]}>
                        {moment(new Date().getTime()).format('YYYY-MM-DD H:mm:ss')}
                    </div>
                    <div className={styles[`${componenName}__close`]} onClick={onClose} />
                </div>
            </Marker>
        );
    }
}

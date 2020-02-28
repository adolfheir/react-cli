// @ts-nocheck
import React, { Component, CSSProperties } from 'react';
import Map from '@common/components/GoogleMap';
import { Button } from '@alifd/next';
import { setFitView } from '@common/components/GoogleMap/utils';
import Trajectory from '@common/components/GoogleMap/Trajectory';

interface IProps {
    className?: string;
    style?: CSSProperties;
}

interface IState {}

const list = [
    { lat: 30, lng: 120.69999694824219 },
    { lat: 30, lng: 120.5 },
    { lat: 30, lng: 120.5999984741211 },
];

export default class Detail extends Component<IProps, IState> {
    state = {
        play: false,
    };

    render() {
        const { play } = this.state;
        console.log('playplay', play);
        return (
            <Map
                onCreated={() => {
                    this.setState({ hasMapCreated: true });
                    setFitView(list.map((v) => new google.maps.LatLng(v.lat, v.lng)));
                }}>
                <Button
                    style={{
                        position: 'absolute',
                        top: '0px',
                        right: '0px',
                    }}
                    onClick={() => {
                        this.setState({ play: true });
                    }}>
                    sad
                </Button>
                <Trajectory play={play} trajectoryPoints={list} />
            </Map>
        );
    }
}

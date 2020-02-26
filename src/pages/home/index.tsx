import React, { Component } from 'react';
import Map from '@components/Mapbox';
import { Layer, Feature, Source } from 'react-mapbox-gl';
import MarkerWithLabel from '@components/Mapbox/MarkerWithLabel';
import InfoWindow from '@components/Mapbox/InfoWindow';

export default class Home extends React.Component {
    render() {
        // San Francisco
        const origin = [-122.414, 37.776];

        // Washington DC
        const destination = [-77.032, 38.913];
        return (
            <Map>
                <MarkerWithLabel label="sad" />
                <InfoWindow label="sad" />
                <Layer
                    type="symbol"
                    layout={{
                        'icon-image': 'airport-15',
                        'icon-rotate': ['get', 'bearing'],
                        'icon-rotation-alignment': 'map',
                        'icon-allow-overlap': true,
                        'icon-ignore-placement': true,
                    }}>
                    <Feature coordinates={origin} />
                </Layer>
                <Layer
                    type="line"
                    // sourceId="route"
                    paint={{
                        'line-width': 2,
                        'line-color': '#007cbf',
                        'line-dasharray': [3, 3],
                    }}>
                    <Feature coordinates={[origin, destination]} />
                </Layer>
            </Map>
        );
    }
}

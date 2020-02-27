import React, { Component } from 'react';
import Map from '@components/Mapbox';
import * as turf from '@turf/turf';
import { Layer, Feature, Source } from 'react-mapbox-gl';
import MarkerWithLabel from '@components/Mapbox/MarkerWithLabel';
import InfoWindow from '@components/Mapbox/InfoWindow';

export default class Home extends React.Component {
    state = {
        pointSource: {},
        LineSource: {},
    };

    render() {
        // San Francisco
        const origin = [120.5, 30];

        // Washington DC
        const destination = [120.5999984741211, 30];

        const line = turf.lineString([
            [-122.414, 37.776],
            [-77.032, 38.913],
        ]);
        const along = turf.along(line, 1, { units: 'radians' });
        return (
            <Map>
                <MarkerWithLabel label="sad" />
                <InfoWindow label="sad" />
                <Source
                    id="route"
                    geoJsonSource={{
                        type: 'geojson',
                        data: {
                            type: 'FeatureCollection',
                            features: [
                                {
                                    type: 'Feature',
                                    geometry: {
                                        type: 'LineString',
                                        coordinates: [
                                            origin,
                                            destination,
                                            // [120.5, 30]
                                        ],
                                    },
                                },
                            ],
                        },
                    }}
                />
                <Layer
                    type="symbol"
                    sourceId="route"
                    layout={{
                        'icon-offset': [10, 0],
                        'symbol-placement': 'line',
                        'icon-image': 'airport-15',
                        // 'symbol-spacing': 50,
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
        );
    }
}

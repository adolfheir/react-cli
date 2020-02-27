import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import { isDev } from '@common/utils/index';

const localMapStyle = {
    version: 8,
    name: 'Mapbox Streets',
    // "sprite": "./sprite",
    glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
    sources: {
        'osm-tiles': {
            type: 'raster',
            tiles: ['http://127.0.0.1:8080/api/v35/file/getTile/{z}/{x}/{y}'],
            tileSize: 256,
        },
    },
    layers: [
        {
            id: '123',
            type: 'raster',
            source: 'osm-tiles',
            'source-layer': 'osmtiles',
        },
    ],
};
const webMapStyle = 'mapbox://styles/mapbox/streets-v9';
const accessToken = 'pk.eyJ1IjoiYWRvbGZoZWlyIiwiYSI6ImNrNjNwdGU5YjAyeXczbG9keDB6dGc3dWgifQ.sPE1XhdGGPwDsuFl_BPXqQ';

export default class Map extends Component {
    render() {
        const Map = ReactMapboxGl({
            accessToken: accessToken,
        });
        return (
            <Map
                style={isDev ? webMapStyle : localMapStyle}
                // center={[120.0816032474, 30.1300123643]}
                center={[120.5999984741211, 30]}
                zoom={[12]}
                containerStyle={{
                    height: '100vh',
                    width: 'calc(100vw - 200px)',
                }}>
                {this.props.children}
            </Map>
        );
    }
}

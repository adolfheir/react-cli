//瓦片图
export const localTitle = 'http://127.0.0.1:8080/api/v35/file/getTile/';

//mapbox 底图
export const onlineMapStyle = 'mapbox://styles/mapbox/streets-v9';
export const onlineMapKey = `pk.eyJ1IjoiYWRvbGZoZWlyIiwiYSI6ImNrNjNwdGU5YjAyeXczbG9keDB6dGc3dWgifQ.sPE1XhdGGPwDsuFl_BPXqQ`;

export const localMapStyle = {
    version: 8,
    name: 'Mapbox Streets',
    // "sprite": "./sprite",
    glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
    sources: {
        'osm-tiles': {
            type: 'raster',
            tiles: [`${localTitle}{z}/{x}/{y}`],
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

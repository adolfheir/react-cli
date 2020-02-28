import google from 'google';
import { localTitle } from '@common/constants';

const maptileRootPath = './maptile';

export default class LocalMap {
    defaultOptions = {
        radius: undefined,
        tileSize: new google.maps.Size(256, 256),
        minZoom: 4,
        maxZoom: 20,
        name: '街道',
        alt: '高德本地街道地图',
        maptilePath: `${maptileRootPath}/mapabc/roadmap`,
        imagePostfix: '.png',
    };

    constructor(opt = {}) {
        Object.assign(this, this.defaultOptions, opt);
    }

    releaseTile() {
        // 超出窗体释放tile的操作，TODO
    }

    getTile(coord, zoom, ownerDocument) {
        const img = ownerDocument.createElement('img');
        img.style.width = `${this.tileSize.width}px`;
        img.style.height = `${this.tileSize.height}px`;
        const url = `${localTitle}${zoom}/${coord.x}/${coord.y}`;
        img.src = url;
        return img;
    }
}

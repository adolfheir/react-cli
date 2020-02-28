import google from 'google';

let _map = null;
// 缓存map实例
export const mapCore = {
    set ins(map) {
        window.__Map__ = map;
        _map = map;
    },
    get ins() {
        return _map;
    },
};

// 调用map实例方法
export const mapCaller = (cb, ...options) => {
    if (_map) {
        if (cb in _map) {
            return _map[cb](...options);
        } else {
            console.warn(`undefined function ${cb} in map instance`); // eslint-disable-line
        }
    } else {
        console.warn(`cannot find map instance for ${cb}`); // eslint-disable-line
    }
};

// 自适应bounds
export const setFitView = (LatLngArr) => {
    const bounds = new google.maps.LatLngBounds();
    for (let i = 0; i < LatLngArr.length; i++) {
        bounds.extend(LatLngArr[i]);
    }
    _map.fitBounds(bounds);
};

// 像素和坐标转换
// see https://stackoverflow.com/questions/25219346/how-to-convert-from-x-y-screen-coordinates-to-latlng-google-maps
export function latLng2Point(latLng) {
    const map = _map;
    const topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
    const bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
    const scale = Math.pow(2, map.getZoom());
    const worldPoint = map.getProjection().fromLatLngToPoint(latLng);
    return { x: (worldPoint.x - bottomLeft.x) * scale, y: (worldPoint.y - topRight.y) * scale };
}

export function point2LatLng(point) {
    const map = _map;
    const topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
    const bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
    const scale = Math.pow(2, map.getZoom());
    const worldPoint = new google.maps.Point(point.x / scale + bottomLeft.x, point.y / scale + topRight.y);
    return map.getProjection().fromPointToLatLng(worldPoint);
}

// 获取2个点的距离
export const getDistance = (point1, point2) => {
    const { x: x1, y: y1 } = point1;
    const { x: x2, y: y2 } = point2;
    return Math.abs(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)));
};

//判断是否是0值 给一个偏移量
const isZero = (floatValue) => {
    return floatValue > -0.00001 && floatValue < 0.00001;
};

//判断2个向量是否平行
const isParallel = (vectorA, vectorB) => {
    const { x: x1, y: y1 } = vectorA;
    const { x: x2, y: y2 } = vectorB;
    return isZero(x1 * y2 - y1 * x2);
};

//判断一个点是否在线段上 判断向量叉乘是否为0 且x坐标在线段2端点间
export const isPointOnLine = (vectorA, path) => {
    const [vectorB, vectorC] = path;

    //与端点重合
    if ((vectorA.x == vectorB.x && vectorA.y == vectorB.y) || (vectorA.x == vectorC.x && vectorA.y == vectorC.y)) {
        return true;
    }

    //在同一竖直方向，线段竖直，点在该线段所在的直线上
    if (isZero(vectorB.x - vectorC.x) && isZero(vectorB.x - vectorA.x)) {
        //已判定点在直线上，若点在两端点中间，即点在线段上
        if ((vectorA.y < vectorC.y && vectorA.y > vectorB.y) || (vectorA.y < vectorB.y && vectorA.y > vectorC.y)) {
            return true;
        }
        return false;
    }

    //在同一水平方向
    if (isZero(vectorB.y - vectorC.y) && isZero(vectorB.y - vectorA.y)) {
        if ((vectorA.x < vectorC.x && vectorA.x > vectorB.x) || (vectorA.x < vectorB.x && vectorA.x > vectorC.x)) {
            return true;
        }
        return false;
    }

    // 线段倾斜，此时线段所在直线存在斜率
    // 点在直线上，AB与AC斜率相等，且有共同点A，此时AC与AB重合，即点A在直线BC上
    if (isZero((vectorB.y - vectorA.y) / (vectorB.x - vectorA.x) - (vectorA.y - vectorC.y) / (vectorA.x - vectorC.x))) {
        if (
            (vectorB.y - vectorA.y) * (vectorA.y - vectorC.y) > 0 &&
            (vectorB.x - vectorA.x) * (vectorA.x - vectorC.x) > 0
        ) {
            return true;
        }
        return false;
    }
};

//获取线段重合部分，如果重合返回合并后的线段 如果不重合 返回传入的线段
//see https://blog.csdn.net/qq_39108767/article/details/81673921
//see https://www.cnblogs.com/tuyang1129/p/9390376.html
export const getLineCoincide = (path1, path2) => {
    let paths = [];
    const [vectorA, vectorB] = path1;
    const [vectorC, vectorD] = path2;

    const isOnLineA = isPointOnLine(vectorA, [vectorC, vectorD]);
    const isOnLineB = isPointOnLine(vectorB, [vectorC, vectorD]);
    const isOnLineC = isPointOnLine(vectorC, [vectorA, vectorB]);
    const isOnLineD = isPointOnLine(vectorD, [vectorA, vectorB]);

    const isCollinear = isParallel(
        { x: vectorA.x - vectorB.x, y: vectorA.y - vectorB.y },
        { x: vectorC.x - vectorD.x, y: vectorC.y - vectorD.y }
    );
    //下面6中情况代表合并
    if (isOnLineA && isOnLineC && isCollinear) {
        paths = [[vectorB, vectorD]];
    }
    if (isOnLineA && isOnLineD && isCollinear) {
        paths = [[vectorB, vectorC]];
    }
    if (isOnLineB && isOnLineC && isCollinear) {
        paths = [[vectorA, vectorD]];
    }
    if (isOnLineB && isOnLineD && isCollinear) {
        paths = [[vectorA, vectorC]];
    }
    if (isOnLineA && isOnLineB && isCollinear) {
        paths = [[vectorC, vectorD]];
    }
    if (isOnLineC && isOnLineD && isCollinear) {
        paths = [[vectorA, vectorB]];
    }
    //未匹配到上述情况,则没有重合 原样返回
    if (paths.length == 0) {
        paths = [path1, path2];
    }
    return paths;
};

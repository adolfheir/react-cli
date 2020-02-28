export let _map = null;
// 缓存map实例
export const mapCore = {
    set ins(map) {
        _map = map;
    },
    get ins() {
        return _map;
    },
};

// 调用map实例方法
export const mapCaller = (cb) => {
    if (_map) {
        return _map[cb].bind(_map);
    } else {
        console.warn(`cannot find map instance for ${cb}`); // eslint-disable-line
    }
};

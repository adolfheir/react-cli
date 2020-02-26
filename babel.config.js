module.exports = function(api) {
    api.cache(true);
    let plugins = [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        '@babel/plugin-transform-runtime',
    ];
    let presets = ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'];
    return {
        presets,
        plugins,
    };
};

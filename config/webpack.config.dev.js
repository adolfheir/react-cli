const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');


const baseConfig = require('./webpack.common.js');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
    ],
    devServer: {
        index: 'index.html',
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        host: '0.0.0.0',
        port: 7788,
        hot: true,
    },
});


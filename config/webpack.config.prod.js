const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const baseConfig = require('./webpack.common.js');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: false,
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments: true, //提取license
                terserOptions: {
                    compress: {
                        drop_debugger: true, // console
                        drop_console: true, //注释console
                        pure_funcs: ['console.log'], // 移除console
                    },
                    output: {
                        comments: true,
                    },
                },
            }),
        ],
    },
});

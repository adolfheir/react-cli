const path = require('path');
const dartSass = require('sass');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        ['app']: path.resolve(__dirname, '../src/app.tsx'),
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js|\.ts|\.tsx)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: dartSass,
                        },
                    },
                ],
                include: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: dartSass,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20000, // size <= 20KB
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
        }),
        new CopyPlugin([
            {
                from: path.join(__dirname, '../public/index.html'),
                to: path.join(__dirname, '../build/index.html'),
            },
            {
                from: path.join(__dirname, '../public/mapbox'),
                to: path.join(__dirname, '../build/mapbox'),
            },
        ]),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            '@images': path.join(__dirname, '../public/images'),
            '@app': path.join(__dirname, '../src/app'),
            '@common': path.join(__dirname, '../src/common'),
            '@components': path.join(__dirname, '../src/common/components'),
            '@pages': path.join(__dirname, '../src/pages'),
            '@styles': path.join(__dirname, '../src/styles'),
            '@stores': path.join(__dirname, '../src/stores'),
        },
    },
    externals: {},
};

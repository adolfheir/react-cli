const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const baseConfig = require('./webpack.common.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin({}),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
    }),
    new CopyPlugin([
      { from: path.join(__dirname, "../public"), to: path.join(__dirname, "../build") },
    ]),
  ],
  devServer: {
    index: 'index.html',
    historyApiFallback: true,
    contentBase: path.join(__dirname, "build"),
    compress: true,
    host: "0.0.0.0",
    port: 7788,
    hot: true
  },
})

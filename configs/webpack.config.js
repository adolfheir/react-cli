const path = require('path');
const argv = require('yargs').argv
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDev = (argv.NODE_ENV === 'development')

let config = {
  mode: isDev ? 'development' : 'production',
  entry: {
    ['app']: path.resolve(__dirname, '../web/app.js'),
  },
  devtool: isDev ? 'source-map' : false,
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(sa|sc)ss$/,
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
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 20000, // size <= 20KB
            }
          }
        ],
        exclude: /node_modules/
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: isDev,
        extractComments: false,
        terserOptions: {
          compress: {
            drop_debugger: true, // console
            drop_console: true, //注释console
            pure_funcs: ['console.log'], // 移除console
          },
          output: {
            comments: true
          }
        },
      }),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new webpack.LoaderOptionsPlugin({ minimize: !isDev }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
    }),
    new CopyPlugin([
      { from: path.join(__dirname, "../public"), to: path.join(__dirname, "../build") },
    ]),
  ],
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx'],
    alias: {
      '@app': path.join(__dirname, '../web/app'),
      '@pages': path.join(__dirname, '../web/pages'),
      '@stores': path.join(__dirname, '../web/stores'),
      '@common': path.join(__dirname, '../web/common'),
      '@components': path.join(__dirname, '../web/common/components'),
      '@utils': path.join(__dirname, '../web/common/utils'),
    },
  },
  externals: {
    global,
    google: "google"
  },
  devServer: {
    index: 'index.html',
    historyApiFallback: true,
    contentBase: path.join(__dirname, "build"),
    compress: true,
    host: "0.0.0.0",
    port: 7788,
    hot: true
  },
};

module.exports = config

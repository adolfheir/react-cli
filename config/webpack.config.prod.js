const TerserPlugin = require('terser-webpack-plugin');

const baseConfig = require('./webpack.common.js')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
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
  }
})

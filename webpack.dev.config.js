/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.base.config.js');

module.exports = Object.assign({},config, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: 'chunk[id].js?[chunkhash]',
    publicPath: '/'
  },
  module: {
    rules: [
      ...config.module.rules,
    ]
  },
  devtool: 'source-map',
  plugins: [
    ...config.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        LOCALE: JSON.stringify('zh-CN'),
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.ejs',
      filename: './index.html',
      cache: false
    })
  ],
  devServer: {
    host: '0.0.0.0',
    contentBase: [path.join(__dirname, './')],
    port: 8091,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/mock/329': {
        target: 'http://www.bai.du.com',
        // pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true,
      }
    },
    open: true
  }
});

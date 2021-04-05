/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.base.config.js');

module.exports = Object.assign({},config, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      ...config.module.rules,
      {
        test: /\.css$/,
      }
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
      filename: '../index.html',
      cache: true
    })
  ],
});

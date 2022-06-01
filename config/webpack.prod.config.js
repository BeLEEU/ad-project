const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PORT = 8080;
const webpackConfigProd = {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'React APP',
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html')
    }),
    new CleanWebpackPlugin({
      protectWebpackAssets: true,
    }),
  ]
};

module.exports = merge(webpackConfigBase, webpackConfigProd);
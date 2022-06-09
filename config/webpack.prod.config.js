const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PORT = 8080;
const webpackConfigProd = {
  mode: 'production',
  plugins: [    
    new CleanWebpackPlugin({
      protectWebpackAssets: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhase:4].css'
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'React APP',
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html')
    })
  ]
};

module.exports = merge(webpackConfigBase, webpackConfigProd);
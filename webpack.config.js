const WebpackShellPlugin = require('webpack-shell-plugin');
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: __dirname + "/main.js",
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /polymer/],
        loader: 'babel-loader',
        query:{
          presets: ['es2015']
        }
      }
    ]
  },

  plugins: [
    new WebpackShellPlugin({
      onBuildStart:['fable rpn.fsx']
    })
  ],

  // devtool: 'source-map',
  // resolve: {
  //   extensions: ['', '.js'],
  // }
};

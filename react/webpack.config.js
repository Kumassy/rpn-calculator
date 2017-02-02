// import path from 'path'
// import HtmlWebpackPlugin from 'html-webpack-plugin' //この行を追記
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') //この行を追記

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
  entry: src + '/index.jsx',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    //以下追記
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    })
  ]
};

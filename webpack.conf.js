const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/script/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/script'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015-without-strict'],
        },
      },
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },
}
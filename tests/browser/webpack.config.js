/* eslint-disable no-undef */
const {join} = require('path')

module.exports = {
  entry: join(__dirname, 'index.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: join(__dirname, '..', '..', 'node_modules')
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    host: '0.0.0.0',
    compress: true
  }
}

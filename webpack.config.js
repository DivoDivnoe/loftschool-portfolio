const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BabelPlugin = require('babel-webpack-plugin');

const config = {
  output: {
    filename: 'main.js'
  },

  plugins: [
    new BabelPlugin({
      test: /\.js$/,
      presets: ['es2015'],
      sourceMaps: false,
      compact: false
    }),
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
};

module.exports = config;

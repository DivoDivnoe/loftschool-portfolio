const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  output: {
    filename: 'main.js'
  },

  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
};

module.exports = config;

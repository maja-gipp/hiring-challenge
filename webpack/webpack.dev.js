const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const getRules = require('./webpack.common.rules.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../src/html'),
    index: 'index.html',
    overlay: true,
    open: true,
    openPage: '',
    historyApiFallback: true
  },
  module: {
    rules: getRules('development')
  },
});

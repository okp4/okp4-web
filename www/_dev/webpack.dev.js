const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'js/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../assets'),
  },
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map'
};
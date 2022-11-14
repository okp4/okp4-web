const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  entry: path.resolve(__dirname, 'js/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../assets'),
  }
};

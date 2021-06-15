const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Learn Webpack',
      template: path.resolve(__dirname, '../src/index.html')
    })
  ],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../build')
  }
};


const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const isDev = process.env.NODE_ENV === 'development';

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    sourceMapFilename: 'index.map',
  },
  devtool: isDev ? 'cheap-module-eval-source-map' : 'source-map',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // 设置见.babelrc文件
        },
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: ['.js'],
  },
};

if (isDev) {
  webpackConfig.plugins.push(new NodemonPlugin());
}

module.exports = webpackConfig;

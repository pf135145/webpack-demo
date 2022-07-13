const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolveLoader: {
    modules: [ path.resolve(__dirname, 'src/loaders'), 'node_modules' ],
    extensions: ['.js'],
  },
  module: {
    rules: [
      // 普通loader
      {
        test: /\.js$/,
        use: ['normal1-loader', 'normal2-loader'],
      },
      // 前置loader
      {
        test: /\.js$/,
        use: ['pre1-loader', 'pre2-loader'],
        // enforce: 'pre',
      },
      // 后置loader
      {
        test: /\.js$/,
        use: ['post1-loader', 'post2-loader'],
        enforce: 'post',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      template: 'assets/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
  ],
};
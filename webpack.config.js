const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  devServer: {
    // proxy: {
    //   "/api": "http://localhost:3000",
    // },
    compress: true,
    hot: true,
  },
  mode: 'production',
  entry: {
    app: './src/index.js',
    // home: './src/home.js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ],
  },
  externals: {
    lodash: '_'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      template: 'assets/index.html',
      inject: 'body',
      filename: 'index.html',
      // chunks: ['app'],
    }),
    // new BundleAnalyzerPlugin()
    // new HtmlWebpackPlugin({
    //   title: 'home',
    //   template: 'assets/index.html',
    //   inject: 'body',
    //   filename: 'home.html',
    //   chunks: ['home'],
    // }),
  ],
};
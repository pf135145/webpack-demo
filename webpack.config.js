const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  devtool: 'cheap-source-map',
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
        extractComments: false,
      })
    ],
    splitChunks:{
      chunks: 'initial'
    }
  },
  // externals: {
  //   lodash: '_'
  // },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
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
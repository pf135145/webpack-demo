const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin")
const HelloWorldPlugin = require('./src/plugins/hello');

module.exports = {
  devtool: 'source-map',
  // devServer: {
    // proxy: {
    //   "/api": "http://localhost:3000",
    // },
  //   compress: true,
  //   hot: true,
  // },
  mode: 'development',
  entry: {
    app: './src/index.js',
    // home: './src/home.js',
  },
  // target: 'web',
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       extractComments: false,
  //     })
  //   ],
  //   splitChunks:{
  //     chunks: 'async'
  //   }
  // },
  // externals: {
  //   lodash: '_'
  // },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },
      {
        test: /\.js$/,
        use: {
          loader: require.resolve('./src/loaders/loader1.js'),
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
    new HelloWorldPlugin({ options: true })
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
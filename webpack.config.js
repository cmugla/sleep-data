var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client');

var config = {
  entry: APP_DIR + '/app/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // 'process.env.NODE_ENV': JSON.stringify('production')
      'process.env.NODE_ENV': JSON.stringify('dev')
    }),
    new HtmlWebpackPlugin({
      title: 'Celeste Glavin - Sleep Data',
      xhtml: true,
      inject: false,
      template: './views/index.ejs',
      appMountId: 'app'
    }),
    new ExtractTextPlugin("src/client/css/styles.css"),
    new CopyWebpackPlugin([
      { from: 'src/client/favicon', to: 'src/client/favicon' }
    ])
  ]
};

module.exports = config;

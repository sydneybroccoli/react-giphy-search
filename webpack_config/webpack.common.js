const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv-webpack');

module.exports = {
  entry: { main: './src/index.jsx' },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      // JS RULES
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // CSS RULES
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      // HTML RULES
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!html-loader!templates/index.html'
    }),
    new dotenv()
  ]
};

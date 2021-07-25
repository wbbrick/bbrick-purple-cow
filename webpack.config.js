const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.jsx'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    port: 3000,
    contentBase: ['./dist', './src']
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mooooo!',
      templateContent: '<div id="root"></div>'
    }),
  ],

};
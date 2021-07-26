const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// default port is 3000, but it can be overwritten with an environment variable
const PORT = process.env.PORT || 3000

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.jsx'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    port: PORT,
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
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
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
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  devServer: {
    hot: true,
    open: true,
    port: 3000,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.jsx?/,
        exclude: '/node_modules',
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.join(__dirname, '/dist'),
  },
};

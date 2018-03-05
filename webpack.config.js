const path = require('path');

module.exports = {
  entry: [
    './client/src/main.jsx',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, '/client/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  // devServer: {
  //   contentBase: './client/dist',
  // },
};

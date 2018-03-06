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
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          'file-loader',
        ],
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

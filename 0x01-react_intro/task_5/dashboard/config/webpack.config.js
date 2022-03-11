const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [  'style-loader', 'css-loader' ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  }
};

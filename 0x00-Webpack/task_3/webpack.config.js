const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    // Name maps to key in entry
    filename: '[name].bundle.js',
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
  },
  // Starts dev server on port 8564 (in development mode)
  devServer: {
    compress: true,
    port: 8564,
  },
  plugins: [
    // Automatically creates index.html file
    new HtmlWebpackPlugin(),
    // Cleans folder before building
    new CleanWebpackPlugin(),
  ],
  // Generate source map (this option is slow for publishing one file but maintains quality)
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
